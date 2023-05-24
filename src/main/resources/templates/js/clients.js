class Clients{
    dom;
    modal;

    state;  // state variables: entities, entity, mode (Add|Edit)

    constructor() {
        this.state = {'entities': new Array(), 'entity': "", 'mode': 'A'};
        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
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

    renderList = () => {
        return `
        <div id="list" class="container">     
            <div class="card bg-light">
                <h4 class="card-title mt-3 text-center"><span><i class="fas fa-user-circle"></i></span> Clients</h4>    
                    <div class="table-responsive " style="max-height: 300px; overflow: auto">
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

    renderModal = () => {
        return `
        <div id="modal" class="modal fade" tabindex="-1">
            
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
                <td>${c.name}</td>
                <td>${c.username}</td>
                <td>${c.num_telefono}</td>
                <td>${c.type_client}</td>
                <td>
                  <div class="w3-container">
                    <button onclick="(function() {
                      var button = document.getElementById('button-${c.id}');
                      button.style.display = 'none';
                      var modal = document.getElementById('${c.id}');
                      modal.style.display = 'block';
                    })()" id="button-${c.id}" class="w3-button w3-black">ver</button>                    
                    <div id="${c.id}" class="w3-modal" style="display: none; border: 1px solid black; padding: 10px">
                      <div class="w3-modal-content">
                        <div class="w3-container">
                          <button onclick="(function() {
                                var button = document.getElementById('button-${c.id}');
                                button.style.display = 'block';
                                var modal = document.getElementById('${c.id}');
                                modal.style.display = 'none';
                              })()" id="button-${c.id}" class="w3-button w3-display-topright" style="float: right; text-align: right;">&times;</button>
                          <h3>Insurances of client</h3>
                                ${c.insurances && Array.isArray(c.insurances) ? c.insurances.map(element => `
                                  <h5>Insurance ID: ${element.id}</h5>
                                  <p>Modelo Vehiculo: ${element.id_vehicle.model}</p>
                                  <p>VIN: ${element.vin}</p>
                                  <ul>Coverages:
                                    ${element.cover && Array.isArray(element.cover) ? element.cover.map(cov => `
                                     <li> <p>Descripcion: ${cov.descrption}</p>
                                      <p>Category: ${cov.cat.description}</p></li>
                                    `).join('') : ''}
                                  </ul>
                                `).join('') : ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
  `;
        list.append(tr);
    }

    list=()=>{
        const request = new Request(`${backend}/client`, {method: 'GET', headers: { }});
        (async ()=> {
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var countries = await response.json();
            this.state.entities = countries;
            var listing=this.dom.querySelector("#listbody");
            listing.replaceChildren();
            this.state.entities.forEach( e=>{
                if(e.type_client === 1)
                    e.type_client = "Administrator"
                if(e.type_client === 2)
                    e.type_client = "Client"

                this.row(listing,e)
            });
        })();
    }
}