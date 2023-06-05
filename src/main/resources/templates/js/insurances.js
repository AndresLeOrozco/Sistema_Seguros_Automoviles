class Insurances{
    dom;
    modal;
    modalAdd;
    modalAdd2;
    modalAdd3;

    insurance;

    constructor() {

        this.insurance = {'idVehicle': 0, 'pay_meth': '', 'vin': '',
             'idClient': 0, 'cost': 0, 'date': '', 'cover': new Array(),};

        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#myModal'));
        this.modalAdd = new bootstrap.Modal(this.dom.querySelector('#myModal1'));
        this.modalAdd2 = new bootstrap.Modal(this.dom.querySelector('#myModal2'));
        this.modalAdd3 = new bootstrap.Modal(this.dom.querySelector('#myModal3'));

        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.dom.querySelector('#addNew').addEventListener('click', this.registerInsurance);
        this.dom.querySelector('#nextV1').addEventListener('click', this.registerInsurance2);
        this.dom.querySelector('#nextV2').addEventListener('click', this.registerInsurance3);
        this.dom.querySelector('#prevV2').addEventListener('click', this.registerInsurancePrev);
        this.dom.querySelector('#prevV3').addEventListener('click', this.registerInsurancePrev2);
        this.dom.querySelector('#payIns').addEventListener('click', this.registerPay);
        this.dom.querySelector('#busqueda').addEventListener('click', this.FiltrarporVin());
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
                          <div class="input-group ps-5">
                              <div id="navbar-search-autocomplete" class="form-outline">
                                <input type="search" id="busqueda" class="form-control" />
                              </div>
                              <button type="button" class="btn btn-primary">
                                <i class="fas fa-search"></i>
                              </button>
                            </div>
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
                      
=
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
            <button id="nextV1" type="button" class="btn btn-success btn-next">Next</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
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
            <button id="prevV2" type="button" class="btn btn-warning btn-prev">Prev</button>
            <button id="nextV2" type="button" class="btn btn-success btn-next">Next</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Close</button>
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

            </div>
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title"></h5>
              <p class="text-muted mb-4"></p>
            </div>
            <div id="showCover">

            </div>
            <div id="precioFinal" class="d-flex justify-content-between total font-weight-bold mt-4">

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
         <button id="prevV3" type="button" class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Prev</button>
        <button id="payIns" type="button" class="btn btn-success" aria-label="Close">Pay</button>
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


    row=(list,c, n)=>{
        var tr =document.createElement("tr");
        tr.innerHTML=`
 
                <td><img style="width: 70px; height: 70px" class="rounded-circle" src="${backend}/vehicle/${c.id_vehicle.id}/img"/></td>
                <td>${n}</td>
                <td>${c.vin}</td>
                <td>${c.date}</td>
                <td>${this.finalPrice(c)}</td>
                <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal"><a id="insurance-${c.id}">Show</a></button></td>`;

        list.append(tr);
        this.dom.querySelector(`#insurance-${c.id}`)?.addEventListener('click',e=>this.openDetail(c));
    }

    FiltrarporVin =async () => {
        let vin = this.dom.querySelector("#busqueda").value;
        if (vin === "")
            this.insurance = await this.getInsurancesById(globalstate.user.id);
        else {
            const filteredList = this.insurance.filter((insurance) => insurance.vin.toLowerCase().includes(vin.toLowerCase()));
            this.insurance = filteredList;
        }
        await this.list();
    }

    list= async ()=>{
        let n = 0;
        let x = await globalstate.user
        this.insurance = await this.getInsurancesById(x.id);
        var listing= this.dom.querySelector("#listbody");
        listing.replaceChildren();
        if (Array.isArray(this.insurance) && this.insurance.length > 0)
            this.insurance.forEach( e=>
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
            <label class="form-check-label" for="flexSwitchCheckDefault">${c.description}</label>
           
       ` ;
        list.append(div);
        list.append(br);
    }

    listVehicle=()=>{
        var option =document.createElement("option");
        const request = new Request(`${backend}/vehicle`, {method: 'GET', mode:"no-cors", headers: { }});
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var vehicles = await response.json();
            var listing=this.dom.querySelector("#sVehicle");
            listing.replaceChildren();
            option.innerHTML=`
                <option selected></option>
                `;
            listing.append(option);
            vehicles.forEach( e=>this.selectOP(listing,e));
        })();
    }
    listCoverages=()=>{

        const request = new Request(`${backend}/coverage`, {method: 'GET',mode:"no-cors", headers: { }});
        (async ()=>{
            const response = await fetch(request);
            if (!response.ok) {errorMessage(response.status);return;}
            var coverages = await response.json();
            var listing=this.dom.querySelector("#iCoverages");
            listing.replaceChildren();
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
        var listing= this.dom.querySelector("#vehiclePrice");
        var listing2= this.dom.querySelector("#coverInfo");
        let covers = [];
        covers = c.cover;

        p.innerHTML = `
            <p>Pay Method: ${c.pay_meth}</p>
            <p>Vehicle Cost: ${c.cost}</p>
        `;

        listing2.replaceChildren();
        covers.forEach(function (e){
            var tr = document.createElement('tr');
            tr.innerHTML +=`
                 
                <td>${e.min_cost}</td>
                <td>${e.per_cost}</td>
                <td>${e.description}</td>
            `;
            listing2.append(tr);
        });

        listing.replaceChildren();
        listing.append(p);
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

    registerInsurance = async () => {

        var e  = await this.getAllInsurances();
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        this.insurance.idClient = globalstate.user.id;
        this.insurance.date = `${year}-0${month}-${day}`;

        this.modalAdd.show();
        this.listVehicle();
    }
    registerInsurancePrev = () =>{
        this.registerInsurance();
        this.modalAdd2.hide();
        this.update();

    }
    registerInsurancePrev2 = () =>{

        this.registerInsurance2();
        this.modalAdd3.hide();

    }
    registerInsurance2 =async () => {

        //Get the previous information
        var vin = document.getElementById("iVIN").value;
        var info = document.getElementById('sVehicle').value;
        var infoCar = info.split('-');
        var price  = document.getElementById('iPrice').value;



        // Validate all inputs are fill
        if (!vin || !infoCar || !price || !info) {
            swal("PLEASE!", "Fill the blank", "warning");
            return;
        }

        if (await this.getInsuranceByVin(vin) == 0){
            swal("ATTENTION","VIN REPEATED", "warning");
            return;
        }

        var car = await this.getVehicle(infoCar[0], infoCar[1], infoCar[2]);

        //After validate add all data to insurance
        this.insurance.cost = Number(price);
        this.insurance.idVehicle = Number(car.id);
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

        if(selectedCoverages.length == 0){
            swal("PLEASE!", "Check the coverages", "warning");
            return;
        }

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

    registerPay = () =>{

        this.addInsurance(this.insurance);
        this.modalAdd3.hide();
        this.clearParameters();

    }

    getVehicle= async (brand, model, year)=>{
        const request = new Request(`${backend}/vehicle/car/${brand}/${model}/${year}`, {method: 'GET',mode:"no-cors", headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var vehicle = await response.json();
        return vehicle;
    }

    getCoverById = async (id) =>{
        const request = new Request(`${backend}/coverage/${id}`, {method: 'GET',mode:"no-cors", headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var coverage = await response.json();
        return coverage;
    }
    getInsuranceByVin = async (vin) =>{
        const request = new Request(`${backend}/insurance/${vin}`, {method: 'GET',mode:"no-cors", headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var insurance = await response.json();
        console.info(insurance);
        return insurance;
    }

    getInsurancesById = async (id) =>{
        const request = new Request(`${backend}/insurance/client/${id}`, {method: 'GET',mode:"no-cors", headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        let insurances = [];
        insurances = await response.json();
        console.info(insurances);
        return insurances;
    }

    showInformation = async () =>{
        var finalprice = 0;
        var price = Number(this.insurance.cost);

        var listing = this.dom.querySelector("#showCover")
        var listing2 = this.dom.querySelector("#precioFinal")
        var listing3 = this.dom.querySelector("#addImage")

        //Clear all datta recovery before
        listing.replaceChildren();
        listing2.replaceChildren();
        listing3.replaceChildren();

        listing3.innerHTML = `
            <i className="fa fa-car fa-lg pt-3 pb-1 px-3"></i>-
            <img src="${backend}/vehicle/${this.insurance.idVehicle}/img" class="card-img-top" alt="Car insuranced" />
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
            this.update();
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
            });
            swal("SUCCESSFULLY","Transaction processed!", "success");
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

    getAllInsurances = async () =>{
        const request = new Request(`${backend}/insurance`, {method: 'GET', headers: {}});
        const response = await fetch(request);
        if (!response.ok) {
            errorMessage(response.status);
            return;
        }
        var insurance = await response.json();
        console.info(insurance);
        return insurance;
    }

    clearParameters=() =>{
        this.dom.querySelector("#iVIN").value = "";
        this.dom.querySelector("#iPrice").value= "";
        this.dom.querySelector("#sVehicle").selectedIndex=0;
        this.dom.querySelector("#sVehicle").value="";
        var checkboxes = this.dom.querySelectorAll('#iCoverages input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        this.insurance = {'idVehicle': 0, 'pay_meth': '', 'vin': '',
            'idClient': 0, 'cost': 0, 'date': '', 'cover': new Array()};
    }

    update = ()=>{
        this.list();
    }



}
