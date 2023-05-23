class Insurances{
    dom;
    modal;

    state;

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
                <h4 class="card-title mt-3 text-center"><span><i class="fas fa-user-circle"></i></span> Insurances</h4>    

                    <div class="table-responsive " style="max-height: 300px; overflow: auto">
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>VIN</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Detail</th>
                                    <th>Number</th>
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
                <td>${c.vin}</td>
                <td>${c.date}</td>
                <td>${c.cost}</td>
                <button id="seeInf" class="w3-button w3-black">See</button>
                <td>${c.number}</td>`;
        list.append(tr);
    }

    list=()=>{
        const request = new Request(`${backend}/insurance`, {method: 'GET', headers: { }});
        (async ()=> {
            const response = await fetch(request);

            if (!response.ok) {
                errorMessage(response.status);
                return;}

            var insurances = await response.json();
            this.state.entities = insurances;
            var listing= this.dom.querySelector("#listbody");
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