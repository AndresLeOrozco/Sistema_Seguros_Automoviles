class Categories {
    dom;
    modal;
    state;

    constructor(){
        this.state = {'entities': new Array(), 'entity': "", 'mode':'A'};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
        //this.dom.querySelector("#create").addEventListener('click',this.makenew);
        //this.dom.querySelector('#apply').addEventListener('click',this.add);
    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModal()} 
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
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-outline-primary" id="addNew">Add New</button>
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

    renderModal = () => {
        return `
        <div id="modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" >
                        <img class="img-circle" id="img_logo" src="images/logo.png" style="max-width: 50px; max-height: 50px" alt="logo">
                        <span style='margin-left:4em;font-weight: bold;'>Country</span> 
                       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="form" >
                    <div class="modal-body">
                        <input id="nom" type="text" class="form-control" placeholder="Nombre Pais">
                        <input id="cap" type="text" class="form-control" placeholder="Capital">
                        <input id="pop" type="text" class="form-control" placeholder="Population">
                        <input id="are" type="text" class="form-control" placeholder="Area">
                        <input id="lat" type="text" class="form-control" placeholder="Latitud">
                        <input id="lon" type="text" class="form-control" placeholder="Longitud">
                        <input id="fla" type="text" class="form-control" placeholder="Bandera">
                    </div>
                    <div class="modal-footer">
                        <button id="apply" type="button" class="btn btn-primary" >Aplicar</button>
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

}