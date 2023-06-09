class Vehicles{
    dom;
    modal;

    state;

    constructor(){
        this.state = {'entities': new Array(), 'entity': this.emptyEntity(), 'mode':'A'};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.dom.querySelector("#create").addEventListener('click',this.makenew);
        this.dom.querySelector('#apply').addEventListener('click',this.add);
    }

    render=()=>{
        const html= `
            ${this.renderList()}
            ${this.renderModal()} 
            ${this.renderWarning()}
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
                <h4 class="card-title mt-3 text-center"><span><i class="fa fa-car"></i></span> Vehicles</h4>    
                <div class="card-body mx-auto w-75" >
                    <form id="form">
                      
                    </form>

                    <div class="table-responsive " style="max-height: 400px; overflow: auto">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn btn-outline-primary" id="create">Add New</button>
                          </div>
                        <table class="table table-striped table-hover">
                            <thead><tr><th scope="col">Imagen</th><th scope="col">Brand</th><th scope="col">Model</th><th scope="col">Year</th></tr></thead>
                            <tbody id="listbody">
                            </tbody>
                        </table>
                          <div class="input-group mb-3">
                            
                        </div>
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
                       <button onclick="this.clearParameters()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="form" >
                    <div class="modal-body">
                        <input id="bra" type="text" class="form-control" placeholder="Brand">
                        <input id="mod" type="text" class="form-control" placeholder="Model">
                        <input id="yea" type="text" class="form-control" placeholder="Year">
                        <input type="file" name="fileInput" id="fileInput">
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
        this.modal.show();
    }



    reset=()=>{
        this.state.entity=this.emptyEntity();
    }

    emptyEntity=()=>{
    }

    addVehicle=async () => {
        let bra = this.dom.querySelector("#bra").value;
        let mod = this.dom.querySelector("#mod").value;
        let yea = Number(this.dom.querySelector("#yea").value);
        var fileInput = this.dom.querySelector("#fileInput");
        if (!bra || !mod || !yea || !(fileInput.files && fileInput.files.length > 0)) {
            this.addWarning("Fill the fields",2);
            this.modal.hide();
            this.warn.show();
            return;
        }
        if(isNaN(yea) || yea < 1980){
            this.addWarning("The car year must be a number and over 1980",2);
            this.modal.hide();
            this.warn.show();
            return;
        }
        var vehi = {brand: bra, model: mod, year: yea};
        const request = new Request(`${backend}/vehicle`, {
            method: 'POST',
            body: JSON.stringify(vehi),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        try {
            const response = await fetch(request);

            if (!response.ok) {
                const errorMessage = await response.text();
                this.addWarning( errorMessage,2);
                this.modal.hide();
                this.warn.show();
                return 0;
            }
            let resp = await response.json();
            if(JSON.stringify(resp).includes('0')){
                this.addWarning( 'Car Already Exists',1);
                this.modal.hide();
                this.warn.show();
                return 0;
            }
            this.addWarning( 'Car Registered',3);
            this.modal.hide();
            this.warn.show();
            return 1;
        } catch (error) {
            console.error(error);
            alert("There is an error with the request.");
            return 0;
        }



    }

    getVehicle= async ()=>{
        let bra = this.dom.querySelector("#bra").value;
        let mod = this.dom.querySelector("#mod").value;
        const request = new Request(`${backend}/vehicle/car/${mod}/${bra}`, {method: 'GET', headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var vehicle = await response.json();
        return vehicle;
    }

    addImg= async (id)=> {
        var data = new FormData();
        data.append("image", this.dom.querySelector("#fileInput").files[0])
        const request = new Request(`${backend}/vehicle/img/${id}`, {
            method: 'POST',
            body: data,
        });
        const response = await fetch(request);
    }

    add= async()=>{

        let number = await this.addVehicle()
        if(number === 1) {
            let vehi = await this.getVehicle();
            await this.addImg(vehi.id);
            this.update();
            this.clearParameters();
        }

    }

    update=()=>{
        // Validate data, load into entity, invoque backend for updating
        this.list();
        this.reset();
        this.modal.hide();
    }

    list=()=>{
        const request = new Request(`${backend}/vehicle`, {method: 'GET', headers: { }});
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



    row=(list,c)=>{
        var tr =document.createElement("tr");
        tr.innerHTML=`
                <td><img class="flag" src="${backend}/vehicle/${c.id}/img"></td>
                <td>${c.brand}</td>
                <td>${c.model}</td>
                <td>${c.year}</td>
        `;
        list.append(tr);
    }

    makenew=()=>{
        this.reset();
        this.state.mode='A'; //adding preguntar
        this.showModal();
    }


    clearParameters=() =>{
        this.dom.querySelector("#bra").value = "";
        this.dom.querySelector("#mod").value= "";
        this.dom.querySelector("#yea").value="";
    }

}
