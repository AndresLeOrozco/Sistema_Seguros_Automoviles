class Insurances{
    dom;
    modal;

    state;

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
               <fieldset style="display: block;">
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
                     <select class="form-select" aria-label="Default select example" required>
                      <option selected>Select Vehicle</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <br>
                    <i class="fa fa-credit-card"></i>
                    <h7>Pay Method</h7>
                    <br>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                      <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
                    
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                      <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
                    
                      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                      <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
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
            <h4 class="modal-title" id="myModalLabel">Modal title 2</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <form>
            <fieldset>
                  <div class="form-top">
                     <div class="form-top-left">
                        <h3>Step 2 / 3</h3>
                        <p>Set up your account:</p>
                     </div>
                     <div class="form-top-right">
                        <i class="fa fa-key"></i>
                     </div>
                  </div>
                  <div class="form-bottom">
                     <div class="form-group">
                        <label class="sr-only" for="form-email">Email</label>
                        <input name="form-email" placeholder="Email..." class="form-email form-control" id="form-email" type="text">
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="form-password">Password</label>
                        <input name="form-password" placeholder="Password..." class="form-password form-control" id="form-password" type="password">
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="form-repeat-password">Repeat password</label>
                        <input name="form-repeat-password" placeholder="Repeat password..." class="form-repeat-password form-control" id="form-repeat-password" type="password">
                  
               </fieldset>
           </form>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-default btn-prev">Prev</button>
            <button id="nextV2" type="button" class="btn btn-default btn-next">Next</button>
            <button type="button" class="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Close</button>
         </div>
      </div>
   </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Modal title 3</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
           <form>
            <fieldset>
                  <div class="form-top">
                     <div class="form-top-left">
                        <h3>Step 3 / 3</h3>
                        <p>Social media profiles:</p>
                     </div>
                     <div class="form-top-right">
                        <i class="fa fa-twitter"></i>
                     </div>
                  </div>
                  <div class="form-bottom">
                     <div class="form-group">
                        <label class="sr-only" for="form-facebook">Facebook</label>
                        <input name="form-facebook" placeholder="Facebook..." class="form-facebook form-control" id="form-facebook" type="text">
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="form-twitter">Twitter</label>
                        <input name="form-twitter" placeholder="Twitter..." class="form-twitter form-control" id="form-twitter" type="text">
                     </div>
                     <div class="form-group">
                        <label class="sr-only" for="form-google-plus">Google plus</label>
                        <input name="form-google-plus" placeholder="Google plus..." class="form-google-plus form-control" id="form-google-plus" type="text">
                     </div>
                     <button type="button" class="btn btn-previous">Previous</button>
                     <button type="submit" class="btn">Sign me up!</button>
                  </div>
               </fieldset>
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
            <h4 class="modal-title" id="myModalLabel">Modal title 4</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body">
            Thank For Register
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-default btn-prev">Prev</button>
            <button type="button" class="btn btn-default btn-next">Next</button>
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
    }
    registerInsurance2 =async () => {
        this.modalAdd2.show();
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
