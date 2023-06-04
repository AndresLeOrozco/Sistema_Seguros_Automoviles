class Clients{
    dom;
    modal;

    state;  // state variables: entities, entity, mode (Add|Edit)

    constructor() {
        this.state = {'entities': new Array(), 'entity': "", 'mode': 'A'};
        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#myModal'));
    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModal()} 
        `;
        let rootContent = document.createElement('div');
        rootContent.id = 'clients';
        rootContent.innerHTML = html;
        return rootContent;
    }
    renderModal = () => {
        return ` 
        <!-- The Modal -->
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
        
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Insurance Information</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              
              <div class="modal-body" id="mBody">
              
              </div>
        
              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
              </div>
        
            </div>
          </div>
        </div>   
        `;
    }

    renderList = () => {
        return `
        <div id="list" class="container">     
            <div class="card bg-light">
                <h4 class="card-title mt-3 text-center"><span><i class="fas fa-user-circle"></i></span> Clients</h4>    
                    <div class="table-responsive " style="max-height: 420px; overflow-y: auto">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>User</th>
                                    <th>Phone</th>
                                    <th>Rol</th>
                                    <th>Insurances</th>
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
    row=(list,c)=>{
        var tr =document.createElement("tr");
        if(c.type_cli === "Administrator"){
            tr.innerHTML=`
                <td>${c.name}</td>
                <td>${c.user}</td>
                <td>${c.phone}</td>
                <td>${c.type_cli}</td>
                <td><strong>Administrator</strong></td>
                        `;
        }
        else{
            tr.innerHTML=`
                <td>${c.name}</td>
                <td>${c.user}</td>
                <td>${c.phone}</td>
                <td>${c.type_cli}</td>
                <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal"><a id="cli-${c.id}">Insurances</a></button></td>
            `;

        }

        list.append(tr);
        this.dom.querySelector(`#cli-${c.id}`)?.addEventListener('click',e=>this.openDetail(c));

    }

    list=()=>{
        const request = new Request(`${backend}/client`, {method: 'GET', mode:"no-cors", headers: { }});
        (async ()=> {
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var countries = await response.json();
            this.state.entities = countries;
            var listing=this.dom.querySelector("#listbody");
            listing.replaceChildren();
            this.state.entities.forEach( e=>{
                if(e.type_cli === 1)
                    e.type_cli = "Administrator"
                if(e.type_cli === 2)
                    e.type_cli = "Client"
                this.row(listing,e)
            });
        })();
    }

    openDetail = async (c) =>{
        var insure = document.createElement('div');
        var listing= this.dom.querySelector("#mBody");
        let html = ""
        let ins = [];
        ins = c.insurances;
        ins.forEach(i=>{
            html +=`
                <h4><strong>Insurance</strong></h4>
                <p>VIN: ${i.vin}</p>
                <p>Pay Method: ${i.pay_meth}</p>
                <p>Vehicle Cost: ${i.cost}</p>
                <table class="table table-striped">
                <thead>
                <h5>Coverages</h5>
                  <tr>
                    <th>Minimum Cost</th>
                    <th>Percentage Cost</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                    ${this.shCovs(i)}
                </tbody>
                </table>
                <br>
                
            `;
        });
        insure.innerHTML=html;
        listing.replaceChildren();
        listing.append(insure);
        this.modal.show();
    }
    shCovs = (ins) =>{
        let covs = [];
        covs = ins.cover;
        let html = "";

        covs.forEach(e=>{
           html+=`
               <tr>
               <td>${e.min_cost}</td>
               <td>${e.per_cost}</td>
               <td>${e.description}</td>
               </tr>
           `;
        })
        return html;
    }

}