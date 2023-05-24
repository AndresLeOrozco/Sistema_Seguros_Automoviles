class Insurances{
    dom;
    modal;

    state;

    insu;

    constructor() {
        this.state = {'entities': new Array(), 'entity': "", 'mode': 'A'};
        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#myModal'));
        this.modalAdd = new bootstrap.Modal(this.dom.querySelector('#myModal1'));
        this.modalAdd2 = new bootstrap.Modal(this.dom.querySelector('#myModal2'));
        this.modalAdd3 = new bootstrap.Modal(this.dom.querySelector('#myModal3'));
        this.modalAdd4 = new bootstrap.Modal(this.dom.querySelector('#myModal4'));
        this.dom.querySelector('#addNew').addEventListener('click', this.registerInsurance);
        this.dom.querySelector('#nextV1').addEventListener('click', this.registerInsurance2);
        this.dom.querySelector('#nextV2').addEventListener('click', this.registerInsurance3);
        this.dom.querySelector('#nextV3').addEventListener('click', this.registerInsurance4);


    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModal()} 
            ${this.renderModalAdd()}
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
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                          <button type="button" class="btn btn-outline-primary" id="addNew">Add New</button>
                    </div>    
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
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>

    </div>
  </div>
</div>
<!--        </div>      -->
        `;
    }

    renderModalAdd = () =>{
        return `
        <div class="modal fade" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Insurance</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            <form role="form" action="" method="post" class="registration-form">
                  <div class="form-top">
                     <div class="form-top-left">
                        <h3>Step 1 / 3</h3>
                        <p>Fill the next information:</p>
                     </div>
                     <div class="form-top-right">
                        <i class="fa fa-truck"></i>
                        <h7>Vehicle Information</h7>
                     </div>
                  </div>
                  <div class="form-bottom">
                     <div class="form-group">
                        <label class="sr-only" for="form-first-name"></label>
                        <input name="form-first-name" placeholder="Vehicle VIN..." class="form-first-name form-control input-error" id="iVIN" type="text">
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="form-last-name"></label>
                        <input name="form-last-name" placeholder="Vehicle Price..." class="form-last-name form-control input-error" id="iPrice" type="text">
                     </div>
                     <br>
                     <i class="fa fa-car"></i>
                     <h7>Brand - Model - Year</h7>
                     <select id="sVehicle" class="form-select" aria-label="Default select example" required>
                      <option selected></option>
<!--                      <option value="1">One</option>-->
<!--                      <option value="2">Two</option>-->
<!--                      <option value="3">Three</option>-->
                    </select>
                    <br>
                    <i class="fa fa-credit-card"></i>
                    <h7>Pay Method</h7>
                    <br>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="Trimestral" autocomplete="off" checked>
                      <label class="btn btn-outline-primary" for="btnradio1">Quaterly</label>
                    
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="Semestral" autocomplete="off">
                      <label class="btn btn-outline-primary" for="btnradio2">Half-Yearly</label>
                    
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" value="Anual" autocomplete="off">
                      <label class="btn btn-outline-primary" for="btnradio3">Yearly</label>
                    </div>
            </form>
            <br><br><br>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-default btn-prev">Prev</button>
            <button id="nextV1" type="button" class="btn btn-default btn-next">Next</button>
            <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
         </div>
      </div>
   </div>
</div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Coverages</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <form>
            <fieldset>
                  <div class="form-top">
                     <div id="infVIN" class="form-top-left">
<!--                        <h3>Step 2 / 3</h3>-->
<!--                        <p>Set up your coverages:</p>-->
                     </div>
                     <div class="form-top-right">
                        <i class="fa fa-key"></i>
                     </div>
                  </div>
                  <div class="form-bottom">
                     <div id="iCoverages" class="form-check form-switch">
<!--                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">-->
<!--                      <label class="form-check-label" for="flexSwitchCheckDefault">Switch checkbox input por defecto</label>-->
                    </div>
                  </div>
               </fieldset>
           </form>
         <div class="modal-footer">
            <button type="button" class="btn btn-default btn-prev">Prev</button>
            <button id="nextV2" type="button" class="btn btn-default btn-next">Next</button>
            <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
         </div>
      </div>
   </div>
</div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Purchase</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <form>
            <fieldset>
                  <div class="form-top">
                     <div class="form-top-left">
                        <h3>Step 3 / 3</h3>
                        <p>Purchase information:</p>
                     </div>
                     <div class="form-top-right">
                        <i class="fa fa-computer"></i>
                     </div>
                  </div>
               </fieldset>
               <section style="background-color: #eee; height: 100%; width: 100%;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div style="height: 100%; width: 100%; class="col-md-8 col-lg-6 col-xl-4">
        <div class="card text-black">
          <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
            class="card-img-top" alt="Apple Computer" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Believing is seeing</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Pro Display XDR</span><span>$5,999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Pro stand</span><span>$999</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span><span>$199</span>
              </div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span><span>$7,197.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
           </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-default btn-prev">Prev</button>
            <button id="nextV3" type="button" class="btn btn-default btn-next">Next</button>
            <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
         </div>
      </div>
   </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal4" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Purchased</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            Thank For Register
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
         </div>
      </div>
   </div>
</div>
        
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

    selectOP=(list,c)=>{
        var option =document.createElement("option");

        option.innerHTML=`
                <option value="${c.brand} - ${c.model} - ${c.year}">${c.brand}-${c.model}-${c.year}</option>
                `;
        list.append(option);

    }

    checkC=(list, c) =>{
        var div = document.createElement("div");
        var br = document.createElement("br");
        div.innerHTML=`
            <p style="font-size: medium; margin-bottom: 0em;  margin-top: 0em; font-weight: bold;">${c.cat.type}</p>
            <input class="form-check-input" type="checkbox" role="switch" id="o-${c.id}" value="${c.descrption}">
            <label class="form-check-label" for="flexSwitchCheckDefault">${c.descrption}</label>
           
       ` ;
        list.append(div);
        list.append(br);
    }

    listVehicle=()=>{

        const request = new Request(`${backend}/vehicle`, {method: 'GET', headers: { }});
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var vehicles = await response.json();
            var listing=this.dom.querySelector("#sVehicle");
            vehicles.forEach( e=>this.selectOP(listing,e));
        })();
    }
    listCoverages=()=>{

        const request = new Request(`${backend}/coverage`, {method: 'GET', headers: { }});
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var coverages = await response.json();
            var listing=this.dom.querySelector("#iCoverages");
            coverages.forEach( e=>this.checkC(listing,e));
        })();
    }

    showVIN=() =>{
        var listing = this.dom.querySelector("#infVIN");
        var vin = document.getElementById("iVIN").value;

        listing.innerHTML=`
            <h3> Step 2 / 3 </h3>
            <p>Set the coverages of the VIN ${vin}:</p>
        `;
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

    registerInsurance = () => {
        this.modalAdd.show();
        this.listVehicle();
    }
    registerInsurance2 =async () => {
        this.modalAdd2.show();
        this.showVIN();
        this.listCoverages();
        this.modalAdd.hide();


    }

    registerInsurance3 =async () => {
        this.modalAdd3.show();
        this.modalAdd2.hide();
    }
    registerInsurance4 =async () => {
        this.modalAdd4.show();
        this.modalAdd3.hide();
    }



}
