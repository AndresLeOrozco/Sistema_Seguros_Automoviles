class Categories {
    dom;
    modal;
    state;

    constructor(){
        this.state = {'entities': new Array(), 'entity': "", 'mode':'A'};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.dom.querySelector("#addNewCat").addEventListener('click', this.makenew);
        //this.dom.querySelector("#addNewCov").addEventListener('click', this.makenew);
        this.dom.querySelector('#apply').addEventListener('click',this.add);
    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModalCategory()}
            ${this.renderWarning()}
        `;
        let rootContent = document.createElement('div');
        rootContent.id = 'categories';
        rootContent.innerHTML = html;
        return rootContent;
    }

    renderList = () => {
        return `
        <div id="list" class="container">     
            <div class="card bg-light">
                <h4 class="card-title mt-3 text-center"><span><i class="fa fa-th-list" aria-hidden="true"></i></span> Categories</h4>
                <div class="d-grid gap-2 col-2">
                            <button type="button" class="btn btn-outline-primary" id="addNewCat">Add New Category</button>
                            <button type="button" class="btn btn-outline-primary" id="addNewCov">Add New Coverage</button>
                        </div>
                    <div class="table-responsive " style="max-height: 300px; overflow: auto">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Description</th>
                                    <th>Coverages</th>
                                </tr>
                            </thead>
                            <tbody id="listbody">
                            </tbody>
                        </table>
                    </div>                 
                </div>
            </div>
        </div>
        `;
    }

    renderModalCategory = () => {
        return `
        <div id="modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" >
                        <img class="img-circle" id="img_logo" src="images/logo.png" style="max-width: 50px; max-height: 50px" alt="logo">
                        <span style='margin-left:4em;font-weight: bold;'>Category</span> 
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="form" >
                    <div class="modal-body">
                        <input id="typ" type="text" class="form-control" placeholder="Type">
                        <input id="desc" type="text" class="form-control" placeholder="Descrption">
                    </div>
                    <div class="modal-footer">
                        <button id="apply" type="button" class="btn btn-primary" >Save</button>
                    </div>
                    </form>                 
                </div>         
            </div>
        </div>      
        `;
    }

    renderWarning(){
        return `
                <div class="modal fade" id="alert" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-bottom-end">
                      

                        <div class="modal-body" id="modalBodyWarn">
                         
                        </div>
                       
                      
                    </div>
                  </div>
            `;
    }

    addWarning = (message,type) => {
        //type 1: Error Type 2: Warning Type 3 Succes
        let warning = this.dom.querySelector("#modalBodyWarn");
        let html = "";
        if(type === 1)
            html += `
                <div class="alert alert-danger" role="alert">
                 ${message}
                </div>
            `;
        if(type === 2)
            html += `
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>WARNING!</strong> ${message}
                 
                </div>
            `;
        if(type === 3)
            html += `
                <div class="alert alert-success" role="alert">
                  <h4 class="alert-heading">Succesful!</h4>
                  <p>${message}</p>
                  <hr>
                </div>
            `;
        warning.replaceChildren();
        warning.innerHTML=html;
    }

    showModal= async ()=>{
        // Load entity data into modal form
        this.modal.show();
    }

    row=(list,c)=>{
        var tr =document.createElement("tr");
        tr.innerHTML=`
                <td>${c.type}</td>
                <td>${c.description}</td>`;
        list.append(tr);
    }

    list=()=>{
        const request = new Request(`${backend}/category`, {method: 'GET', headers: { }});
        (async ()=> {
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var categories = await response.json();
            this.state.entities = categories;
            var listing=this.dom.querySelector("#listbody");
            listing.replaceChildren();
            //listing.innerHTML="";
            this.state.entities.forEach( e=>this.row(listing,e));
        })();
    }

    reset=()=>{
        this.state.entity=this.emptyEntity();
    }

    add = async () => {
        const type = this.dom.querySelector("#typ").value;
        const description = this.dom.querySelector("#desc").value;

        if (!type || !description) {
            alert("Fill in all the fields.");
            return;
        }

        const newCategory = {
            type: type,
            description: description
        };

        const request = new Request(`${backend}/category`, {
            method: 'POST',
            body: JSON.stringify(newCategory),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        try {
            const response = await fetch(request);

            if (!response.ok) {
                const errorMessage = await response.text();
                handleErrorResponse(response.status, errorMessage);
                return;
            }
            let resp = await response.json();
            if(JSON.stringify(resp).includes('0')){
                alert('Category already exist');
                this.clearParameters();
                this.modal.hide();
                return;
            }
            alert('Category Saved');
            this.clearParameters();
            this.modal.hide();
            this.renderList();
        } catch (error) {
            console.error(error);
            alert("There is an error with the request.");
        }
        // this.list();
        // this.reset();
        // this.modal.hide();
    }

    handleErrorResponse = (status, message) => {
        // Manejo de errores específicos en función del código de estado de la respuesta
        switch (status) {
            case 400:
                alert(`Request error: ${message}`);
                break;
            case 401:
                alert(`Authentication error: ${message}`);
                break;
            default:
                alert(`Unknown error: ${status}`);
        }
    }

    clearParameters = () =>{
        this.dom.querySelector("#typ").value = '';
        this.dom.querySelector("#desc").value = '';
    }

    emptyEntity=()=>{
        // return an empty entity
    }

    makenew=()=>{
        this.reset();
        this.state.mode='A'; //adding
        this.showModal();
    }

}