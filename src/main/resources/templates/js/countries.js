class Countries{
    dom;
    modal;

    state;  // state variables: entities, entity, mode (Add|Edit)

    constructor(){
        this.state = {'entities': new Array(), 'entity': this.emptyEntity(), 'mode':'A'};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
        this.dom.querySelector("#create").addEventListener('click',this.makenew);
        this.dom.querySelector("#search").addEventListener('click',this.search);
        this.dom.querySelector('#apply').addEventListener('click',this.add);
    }

    render=()=>{
        const html= `
            ${this.renderList()}
            ${this.renderModal()} 
        `;
        var rootContent= document.createElement('div');
        rootContent.id='countries';
        rootContent.innerHTML=html;
        return rootContent;
    }

    renderList=()=>{
        return `
        <div id="list" class="container">     
            <div class="card bg-light">
                <h4 class="card-title mt-3 text-center">Countries</h4>    
                <div class="card-body mx-auto w-75" >
                    <form id="form">
                        <div class="input-group mb-3">
                            <span class="input-group-text">Name</span>
                            <input id="name" type="text" class="form-control">
                          <div class="btn-toolbar">
                            <div class="btn-group me-2"><button type="button" class="btn btn-primary" id="search">Search</button> </div>
                            <div class="btn-group me-2"><button type="button" class="btn btn-primary" id="create">Create</button> </div>                        
                          </div>  
                        </div>
                    </form>

                    <div class="table-responsive " style="max-height: 300px; overflow: auto">
                        <table class="table table-striped table-hover">
                            <thead><tr><th scope="col">Name</th><th scope="col">Flag</th></tr></thead>
                            <tbody id="listbody">
                            </tbody>
                        </table>
                    </div>                 
                </div>
            </div>
        </div>
        `;
    }

    renderModal=()=>{
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

    load=()=>{
        // Save modal form data into entity
    }

    reset=()=>{
        this.state.entity=this.emptyEntity();
    }

    emptyEntity=()=>{
        // return an empty entity
    }

    addCountry=()=>{
        let nom = this.dom.querySelector("#nom").value;
        let cap = this.dom.querySelector("#cap").value;
        let pop = Number(this.dom.querySelector("#pop").value);
        let are = Number(this.dom.querySelector("#are").value);
        let fla = this.dom.querySelector("#fla").value;
        let latlon = [];
        latlon[0] = Number(this.dom.querySelector("#lat").value);
        latlon[1] = Number(this.dom.querySelector("#lon").value);
        var countrpais = {name:nom,captail:cap,population:pop,area:are,latitudlongitud:latlon,flag:fla};
        const request = new Request(`${backend}/countries`, {method: 'POST',body: JSON.stringify(countrpais), headers: { "Content-type": "application/json; charset=UTF-8"}});
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);}
            this.list();
        })();
    }

    add=()=>{
        // Validate data, load into entity, invoque backend for adding
        this.reset();
        this.addCountry();
        this.modal.hide();
    }

    update=()=>{
        // Validate data, load into entity, invoque backend for updating
        this.list();
        this.reset();
        this.modal.hide();
    }

    validate=()=>{
        // validate data
    }


    list=()=>{
        const request = new Request(`${backend}/client`, {method: 'GET', headers: { }});
        (async ()=> {
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var countries = await response.json();
            this.state.entities = countries;
            var listing=this.dom.querySelector("#countries #list #listbody");
            listing.innerHTML="";
            this.state.entities.forEach( e=>this.row(listing,e));
        })();
    }

    row=(list,c)=>{
        var tr =document.createElement("tr");
        tr.innerHTML=`
                <td>${c.id}</td>
                <td>${c.name}</td>`;
        list.append(tr);
    }

    makenew=()=>{
        this.reset();
        this.state.mode='A'; //adding
        this.showModal();
    }

    search=()=>{
        let request = null;
        let nom = this.dom.querySelector("#name").value;
        if(nom === ""){
            request = new Request(`${backend}/countries`, {method: 'GET', headers: { }});
        }else {
            request = new Request(`${backend}/countries/name/${nom}`, {method: 'GET', headers: {}});
        }
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var countries = await response.json();
            this.state.entities = countries;
            var listing=this.dom.querySelector("#countries #list #listbody");
            listing.innerHTML="";
            this.state.entities.forEach( e=>this.row(listing,e));
        })();
    }

}
