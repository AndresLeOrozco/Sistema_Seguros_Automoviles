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
        this.modalCov = new bootstrap.Modal(this.dom.querySelector('#modalCov'));
        this.dom.querySelector("#addNewCat").addEventListener('click', this.makenew);
        this.dom.querySelector("#addNewCov").addEventListener('click', this.makenewCov);
        this.dom.querySelector('#apply').addEventListener('click',this.add);
        this.dom.querySelector('#addNewCov').addEventListener('click', this.listCatType);
        this.coverageDOM = new Coverage();
    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModalCategory()}
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
        option.value = c.type; // Asigna el valor correspondiente si es necesario
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