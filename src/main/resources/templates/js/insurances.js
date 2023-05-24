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
                <h4 class="card-title mt-3 text-center"><span><i class="fas fa-shield-alt"></i></span> Insurances</h4><br>    

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
  <!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Insurance Information</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      
      <div class="modal-body" id="vehiclePrice">
      
      </div>

      <!-- Modal body -->
      <div class="modal-body">
          <table class="table table-striped">
    <thead>
    <h5>Coverages</h5>
      <tr>
        <th>Minimum Cost</th>
        <th>Percentage Cost</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody id="coverInfo">
        
    </tbody>
  </table>
  </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
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
                <td>${this.finalPrice(c)}</td>
                <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal"><a id="insurance-${c.id}">Show</a></button></td>`;

        list.append(tr);
        this.dom.querySelector(`#insurance-${c.id}`)?.addEventListener('click',e=>this.openDetail(c));
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
    openDetail = async (c) =>{
        var p = document.createElement('p');
        var tr = document.createElement('tr');
        var listing= this.dom.querySelector("#vehiclePrice");
        var listing2= this.dom.querySelector("#coverInfo");
        let covers = [];
        covers = c.cover;

        p.innerHTML = `
            <p>Pay Method: ${c.pay_meth}</p>
            <p>Vehicle Cost: ${c.cost}</p>
        `;


        covers.forEach(e =>
            tr.innerHTML =`
                
                <td>${e.min_cost}</td>
                <td>${e.per_cost}</td>
                <td>${e.descrption}</td>
            `
        );

        listing.replaceChildren();
        listing2.replaceChildren();
        listing.append(p);
        listing2.append(tr);
        this.modal.show();
    }

    finalPrice = (c) => {
        let price = 0;
        const cost = Number(c.cost);

        c.cover.forEach(e => {
            const minCost = Number(e.min_cost);
            const perCost = Number(e.per_cost);
            price += Math.max(minCost, cost * perCost);

        });

        return price;
    }

}
