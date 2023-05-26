class Categories {
    dom;
    modal;
    modalCov
    state;
    coverageDOM;

    constructor(){
        this.state = {'entities': new Array(), 'entity': "", 'mode':'A'};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.modalCov = new bootstrap.Modal(this.dom.querySelector('#modalCov'));
        this.dom.querySelector("#addNewCat").addEventListener('click', this.makenew);
        this.dom.querySelector("#addNewCov").addEventListener('click', this.makenewCov);
        this.dom.querySelector('#apply').addEventListener('click',this.add);
        this.dom.querySelector('#applyCov').addEventListener('click',this.addCov);
        this.dom.querySelector('#addNewCov').addEventListener('click', this.listCatType);

    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModalCategory()}
            ${this.renderWarning()}
            ${this.renderModalCoverage()}
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

    renderModalCoverage = () => {
        return `
        <div id="modalCov" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" >
                        <img class="img-circle" id="img_logo" src="images/logo.png" style="max-width: 50px; max-height: 50px" alt="logo">
                        <span style='margin-left:4em;font-weight: bold;'>Coverage</span> 
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formCov" >
                    <div class="col">
                        <label class="form-label" for="form2Example11">Select a Category</label>
                        <select name="categoriesDrpDwn" id="catDrpDwn" required>
                            <option value="" label="" disabled>Choose option</option>
                            
                        </select>
                        <br><br>
                    </div>
                    <div class="modal-body">
                        <input id="descr" type="text" class="form-control" placeholder="Description">
                        <input id="minCost" type="text" class="form-control" placeholder="Minimum cost">
                        <input id="perCost" type="text" class="form-control" placeholder="Percentage cost">
                    </div>
                    <div class="modal-footer">
                        <button id="applyCov" type="button" class="btn btn-primary" >Save</button>
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

    comboBoxOption=(list,c)=>{
        var option = document.createElement("option");
        option.textContent = c.type;
        option.value = c.id; // Asigna el valor correspondiente si es necesario
        list.appendChild(option);
    }

    listCatType = async () => {
        const request = new Request(`${backend}/category`, { method: 'GET', headers: {} });
        try {
            const response = await fetch(request);
            if (!response.ok) {
                errorMessage(response.status);
                return;
            }
            const categoryType = await response.json();
            const listing = this.dom.querySelector("#catDrpDwn");
            listing.innerHTML="";
            categoryType.forEach(e => this.comboBoxOption(listing, e));
        } catch (error) {
            console.error("Error al obtener los datos de categoría:", error);
        }
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
                //handleErrorResponse(response.status, errorMessage);
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
            this.update();
        } catch (error) {
            console.error(error);
            alert("There is an error with the request.");
        }
    }

    addCov = async () => {
        const cat = this.dom.querySelector("#catDrpDwn").value;
        const description = this.dom.querySelector("#descr").value;
        const min_cost = this.dom.querySelector("#minCost").value;
        const per_cost = this.dom.querySelector("#perCost").value;

        if (!cat || !description || !min_cost || !per_cost) {
            this.addWarning("Fill the blanks", 2);
            this.modalCov.hide();
            this.warn.show();
            return;
        }

        if ( Number(min_cost) === NaN || Number(per_cost) === NaN || per_cost < 1 ) {
            this.addWarning("Wrong format number", 2);
            this.modalCov.hide();
            this.warn.show();
            return;
        }

        const newCoverage = {
            cat: cat,
            description: description,
            min_cost: min_cost,
            per_cost: per_cost
        };

        const request = new Request(`${backend}/coverage`, {
            method: 'POST',
            body: JSON.stringify(newCoverage),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        try {
            const response = await fetch(request);

            if (!response.ok) {
                const errorMessage = await response.text();
                this.addWarning(errorMessage, 1);
                this.modalCov.hide();
                this.warn.show();
                return;
            }
            let resp = await response.json();
            if(JSON.stringify(resp).includes('0')){
                this.addWarning("Coverage already exist", 1);
                this.modalCov.hide();
                this.warn.show();
                this.clearParameters();
                return;
            }
            this.addWarning("Coverage saved", 3);
            this.modalCov.hide();
            this.warn.show();
            this.clearParameters();
            this.update();
        } catch (error) {
            this.addWarning(error, 2);
            this.modalCov.hide();
            this.warn.show();;
        }
    }

    clearParameters = () =>{
        this.dom.querySelector("#typ").value = '';
        this.dom.querySelector("#desc").value = '';
        this.dom.querySelector("#descr").value = '';
        this.dom.querySelector("#minCost").value = '';
        this.dom.querySelector("#perCost").value = '';
    }

    emptyEntity=()=>{
        // return an empty entity
    }

    makenew=()=>{
        this.reset();
        this.state.mode='A'; //adding
        this.showModal();
    }

    showModalCov= async ()=>{
        // Load entity data into modal form
        this.modalCov.show();
    }

    makenewCov=()=>{
        this.reset();
        this.state.mode='A'; //adding
        this.showModalCov();
    }

    update=()=>{
        // Validate data, load into entity, invoque backend for updating
        this.list();
        this.reset();
        this.modal.hide();
        this.modalCov.hide();
    }

}