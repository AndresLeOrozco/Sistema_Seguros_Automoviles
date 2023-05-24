class Insurances{
    dom;
    modal;

    state;

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
        rootContent.id = 'insurance';
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
                                    <th>Number</th>
                                    <th>VIN</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Detail</th>
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
<!--        <div id="modal" class="modal fade" tabindex="-1">-->
        <div class="modal" id="myModal">
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>           
<!--        </div>      -->
        `;
    }
    showModal= async ()=>{
        // Load entity data into modal form
        this.modal.show();
    }

    row=(list,c, n)=>{
        var tr =document.createElement("tr");
        tr.innerHTML=`
                <td>${n}</td>
                <td>${c.vin}</td>
                <td>${c.date}</td>
                <td>${c.cost}</td>
                <td><button id="${c.id}" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="{openInfo() {
      this.openInfo();
    })()">Show</button></td>`;

        list.append(tr);
        ;
    }

    list=()=>{
        let n = 0;
        let insurances = [];
        insurances = globalstate.user.insurances;
        var listing= this.dom.querySelector("#listbody");
        listing.replaceChildren();
        insurances.forEach( e=>
            this.row(listing,e, n += 1)
        );
    }



}
//