class Insurances{
    dom;
    modal;

    state;

    insurance;

    constructor() {
        this.state = {'entities': new Array(), 'entity': "", 'mode': 'A'};

        this.insurance = {'id_vehicle': "", 'pay_meth': "", 'vin': "",
            'cover': new Array(), 'client': "", 'cost': "", 'date': ""};

        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#myModal'));
        this.modalAdd = new bootstrap.Modal(this.dom.querySelector('#myModal1'));
        this.modalAdd2 = new bootstrap.Modal(this.dom.querySelector('#myModal2'));
        this.modalAdd3 = new bootstrap.Modal(this.dom.querySelector('#myModal3'));
        // this.modalAdd4 = new bootstrap.Modal(this.dom.querySelector('#myModal4'));
        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.dom.querySelector('#addNew').addEventListener('click', this.registerInsurance);
        this.dom.querySelector('#nextV1').addEventListener('click', this.registerInsurance2);
        this.dom.querySelector('#nextV2').addEventListener('click', this.registerInsurance3);
        // this.dom.querySelector('#nextV3').addEventListener('click', this.registerInsurance4);


    }

    render = () => {
        const html = `
            ${this.renderList()}
            ${this.renderModal()} 
            ${this.renderModalAdd()}
            ${this.renderWarning()}
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
            <div id="addImage">
<!--                <i class="fa fa-car fa-lg pt-3 pb-1 px-3"></i>-->
<!--                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"-->
<!--                    class="card-img-top" alt="Apple Computer" />-->
            </div>
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">Believing is seeing</h5>
              <p class="text-muted mb-4">Apple pro display XDR</p>
            </div>
            <div id="showCover">
<!--              <div class="d-flex justify-content-between">-->
<!--                <span>Pro Display XDR</span><span>$5,999</span>-->
<!--              </div>-->
<!--              <div class="d-flex justify-content-between">-->
<!--                <span>Pro stand</span><span>$999</span>-->
<!--              </div>-->
<!--              <div class="d-flex justify-content-between">-->
<!--                <span>Vesa Mount Adapter</span><span>$199</span>-->
<!--              </div>-->
            </div>
            <div id="precioFinal" class="d-flex justify-content-between total font-weight-bold mt-4">
<!--              <span>Total</span><span>$7,197.00</span>-->
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
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
      </div>
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
            <p style="font-size: medium; margin-bottom: 0em;  margin-top: 0em; font-weight: bold;">${c.category.type}</p>
            <input class="form-check-input" type="checkbox" role="switch" id="o-${c.id}" value="${c.id}">
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


        listing.innerHTML=`
            <h3> Step 2 / 3 </h3>
            <p>Set the coverages of the VIN ${this.insurance.vin}:</p>
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
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        this.insurance.client = globalstate.user;
        this.insurance.date = `${year}-${month}-${day}`;

        this.modalAdd.show();
        this.listVehicle();
    }
    registerInsurance2 =async () => {
        //Get the previous information
        var vin = document.getElementById("iVIN").value;
        var info = document.getElementById('sVehicle').value;
        var infoCar = info.split('-');
        var price  = document.getElementById('iPrice').value;


        // Validate all inputs are fill
        if (!vin || !infoCar || !price ) {
            swal("Fill the blank");
            return;
        }

        if (await this.getInsuranceByVin(vin) == 0){
            alert("VIN COULD NOT BE USED!");
            return;
        }

        //After validate add all data to insurance
        this.insurance.cost = price;
        this.insurance.id_vehicle = await this.getVehicle(infoCar[0], infoCar[1], infoCar[2]);
        this.insurance.pay_meth = document.querySelector('input[name="btnradio"]:checked').value;
        this.insurance.vin = vin;



        this.modalAdd2.show();
        this.showVIN();
        this.listCoverages();
        this.modalAdd.hide();


    }

    registerInsurance3 =async () => {
        // save each id of coverage registered
        var selectedCoverages = [];

        // Save each coverage
        var recoveryCoverage = [];

        // Recovery all coverages checked
        var checkboxes = document.querySelectorAll('#iCoverages input[type="checkbox"]:checked');
        checkboxes.forEach( e => selectedCoverages.push(e.value));

        // Get from the DB the info od the coverages selected
        for (let i = 0; i < selectedCoverages.length; i++) {
            var coverage = await this.getCoverById(selectedCoverages[i]);
            recoveryCoverage.push(coverage);
        }

        this.insurance.cover = recoveryCoverage;

        this.modalAdd3.show();
        this.showInformation();
        this.modalAdd2.hide();
    }
    registerInsurance4 =async () => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });

        this.modalAdd4.show();
        this.modalAdd3.hide();
    }

    getVehicle= async (brand, model, year)=>{
        const request = new Request(`${backend}/vehicle/car/${brand}/${model}/${year}`, {method: 'GET', headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var vehicle = await response.json();
        return vehicle;
    }

    getCoverById = async (id) =>{
        const request = new Request(`${backend}/coverage/${id}`, {method: 'GET', headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var coverage = await response.json();
        return coverage;
    }
    getInsuranceByVin = async (vin) =>{
        const request = new Request(`${backend}/insurance/${vin}`, {method: 'GET', headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var insurance = await response.json();
        console.info(insurance);
        return insurance;
    }

    showInformation = async () =>{
        var finalprice = 0;
        var price = Number(this.insurance.cost);

        var listing = this.dom.querySelector("#showCover")
        var listing2 = this.dom.querySelector("#precioFinal")
        var listing3 = this.dom.querySelector("#addImage")

        listing3.innerHTML = `
            <i className="fa fa-car fa-lg pt-3 pb-1 px-3"></i>-
            <img src="${backend}/vehicle/${this.insurance.id_vehicle.id}/img" class="card-img-top" alt="Apple Computer" />
        `;

        this.insurance.cover.forEach( e => {
            var min_cost = Number(e.min_cost);
            var per_cost = Number(e.per_cost);
            finalprice += Math.max(min_cost, per_cost * price);
            listing.innerHTML += `
            <div class="d-flex justify-content-between">
               <span>${e.description}</span><span>$${Math.max(min_cost, per_cost * price)}</span>
            </div>
        `;});
        listing2.innerHTML = `
            <span>Total</span><span>$${finalprice}</span>
        `;

        // var insurance = {"id_vehicle": this.insurance.id_vehicle, "pay_meth": this.insurance.pay_meth, "vin": this.insurance.vin, "client": globalstate.user, "cost": price, "date": date, "cover": recoveryCoverage};
        this.addInsurance(this.insurance);

    }

    addInsurance =async (insurance) => {
        const request = new Request(`${backend}/insurance`, {
            method: 'POST',
            body: JSON.stringify(insurance),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        try {
            const response = await fetch(request);

            if (!response.ok) {
                const errorMessage = await response.text();
                this.handleErrorResponse(response.status, errorMessage);
                return;
            }
            let resp = await response.json();

            if(JSON.stringify(resp).includes('0')){
                alert('Insurance Already Exists');
                return;
            }
            alert('Insurance Registered');
            return;

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
                console.log(message);
                break;
            case 401:
                alert(`Authentication error: ${message}`);
                break;
            default:
                alert(`Unknown error: ${status}`);
        }
    }


}
