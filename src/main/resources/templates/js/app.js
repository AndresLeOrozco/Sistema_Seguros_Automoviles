class App{
    dom;
    modal; // login modal

    reg; // register modal

    state;  // state variables: if any\

    clienteDOM;
    insuranceDOM;
    vehicleDOM;
    categoryDOM;


    constructor(){
        this.state={};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#app>#modal'));
        this.reg = new bootstrap.Modal(this.dom.querySelector('#register'));
        this.warn = new bootstrap.Modal(this.dom.querySelector('#alert'));
        this.dom.querySelector('#app>#modal #apply').addEventListener('click',e=>this.login());
        this.dom.querySelector('#subs').addEventListener('click',e=>this.register());
        this.dom.querySelector("#upd").addEventListener("click",e=>this.UpdateUser());
        this.dom.querySelector("#botUpd").style.visibility = 'hidden';
        this.renderBodyFiller();
        this.renderMenuItems();
        this.clienteDOM = new Clients();
        this.categoryDOM = new Categories();
        this.insuranceDOM = new Insurances();
        this.vehicleDOM = new Vehicles();
    }

    render=()=>{
        const html= `
            ${this.renderMenu()}
            ${this.renderBody()} 
            ${this.renderFooter()}
            ${this.renderModal()}
            ${this.renderReg()}
            ${this.renderWarning()}
        `;
        var rootContent= document.createElement('div');
        rootContent.id='app';
        rootContent.innerHTML=html;
        return rootContent;
    }

    renderMenu=()=>{
        return `
            <nav id="menu" class="navbar navbar-expand-lg p-0 navbar-light" style="background-color: #f1f1f1;" >
          <div class="container-fluid">
            <a class="navbar-brand font-italic font-weight-light text-info"  href="#">
                <img src="images/logo.png" class="logo rounded-circle" alt="logo" style="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="menuCollapse" class="collapse navbar-collapse" >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id='menuItems'>
              </ul>
            </div>
          </div>
        </nav>
        
        `;
    }

    renderBody=()=>{
        return `
        <div id="body">   
        </div>          
    `;
    }

    renderFooter=()=>{
        return `
        <footer class="text-center text-white fixed-bottom" style="background-color: #f1f1f1;">
          <!-- Grid container -->
          <div class="container pt-4">
            <!-- Section: Social media -->
            <section class="mb-4">
              <!-- Facebook -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.facebook.com/eduardo.orellanarivas"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-facebook-f"></i
              ></a>
        
              <!-- Twitter -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://twitter.com/fcbarcelona"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-twitter"></i
              ></a>
        
              <!-- Google -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.google.com/?hl=es"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-google"></i
              ></a>
        
              <!-- Instagram -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://www.instagram.com/gugarojeda/"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-instagram"></i
              ></a>
        
              <!-- Linkedin -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://cr.linkedin.com/in/carlosloriasaenz"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-linkedin"></i
              ></a>
              <!-- Github -->
              <a
                class="btn btn-link btn-floating btn-lg text-dark m-1"
                href="https://github.com/AndresLeOrozco/Sistema_Seguros_Automoviles"
                role="button"
                data-mdb-ripple-color="dark"
                ><i class="fab fa-github"></i
              ></a>
            </section>
            <!-- Section: Social media -->
          </div>
          <!-- Grid container -->
        
          <!-- Copyright -->
          <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-dark" href="https://www.youtube.com/watch?v=w3QFThq8gQo">BEGUESS SA</a>
          </div>
          <!-- Copyright -->
        </footer>
    `;
    }

    renderModal=()=>{
        return `
        <div id="modal" class="modal fade" tabindex="-1">
           <div class="modal-dialog">
               <div class="modal-content">
                   <div class="modal-header" >
                      
                       <h4 class="modal-title w-100 font-weight-bold"><span><i class="fa fa-address-card" aria-hidden="true"></i></span> Login</h4> 
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <form id="formlog" >
                   <div class="modal-body" id="modalbo">
                       <div class="input-group mb-3">
                           <span class="input-group-text">Id</span>
                           <input type="text" class="form-control" id="identificacion" name="identificacion" value="" placeholder="id" required>
                       </div>  
                       <div class="input-group mb-3">
                           <span class="input-group-text">Password</span>
                           <input type="password" class="form-control" id="clave" name="clave" value="" placeholder="password" required>
                       </div>      
                   </div>
                   <div class="modal-footer">
                       <button id="apply" type="button" class="btn btn-primary" id="apply">Login</button>
                   </div>
                   <div class="input-group">
                       <span style="font-style: italic; margin-left: 2em;">Don't have an account? ... </span>
                       <a id="GoRegister" class="btn btn-info btn-block" style="margin-bottom: 15px; background-color: white; color:red; border:1px solid red" href="#">Sign Up</a>
                   </div>                
                   </form>                 
               </div>         
           </div>          
       </div>   
    `;
    }

    renderReg = () => {
        if(globalstate.user === null)
            return `
            <div id="register" class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header text-center">
                    <h4 id="titleReg" class="modal-title w-100 font-weight-bold">Sign up</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body mx-3">
                  
                    <div class="md-form mb-3">
                      <i class="fas fa-user-circle prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-name" style="margin-left: 7px"> User</label>
                      <input type="text" id="Rusername" class="form-control validate" required>
                    </div>
                    
                    <div class="md-form mb-3">
                      <i class="fas fa-lock prefix grey-text" ></i> <label class="ml-2" data-error="wrong" data-success="right" for="orangeForm-pass" style="margin-left: 5px"> Password</label>
                      <input type="password" id="Rpass" class="form-control validate" required>
                    </div>
                    
                    <div class="md-form mb-3">
                      <i class="fas fa-user prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-name" style="margin-left: 7px"> Name</label>
                      <input type="text" id="Rname" class="form-control validate" required>
                    </div>
                    
                    <div class="md-form mb-3">
                      <i class="fas fa-phone prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-phone" style="margin-left: 7px"> Phone</label>
                      <input type="tel" id="Rphone" class="form-control validate" placeholder="00000000" pattern="[0-9]{8}" required>
                    </div>
            
                    <div class="md-form mb-3">
                      <i class="fas fa-envelope prefix grey-text"></i><label data-error="wrong"  data-success="right" for="orangeForm-email" style="margin-left: 7px"> Email</label>
                      <input placeholder="usuario@mail.com" type="email" id="Remail" class="form-control validate" required>
                    </div>
            
                  </div>
                  <div id="botSub" class="modal-footer d-flex justify-content-center">
                    <button id="subs" class="btn btn-primary">Register</button>
                  </div>
                  <div id="botUpd" class="modal-footer d-flex justify-content-center">
                    <button id="upd" class="btn btn-primary">Update</button>
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


    renderBodyFiller=()=>{
        var html= `
        <div id='bodyFiller' style='margin-left: 10%; margin-top:100px; width: 80%; text-align: center; font-size: 1.5em'>
        </div>
    `;
        this.dom.querySelector('#app>#body').replaceChildren();
        this.dom.querySelector('#app>#body').innerHTML=html;
    }

    renderUpdate=()=>{
        this.dom.querySelector("#titleReg").textContent = "Edit User";
        this.dom.querySelector("#Rusername").value = globalstate.user.username;
        //this.dom.querySelector("#Rusername").setAttribute('readonly', 'true');
        this.dom.querySelector("#Rpass").value = globalstate.user.password;
        this.dom.querySelector("#Rname").value = globalstate.user.name;
        this.dom.querySelector("#Rphone").value = globalstate.user.num_telefono;
        this.dom.querySelector("#Remail").value = globalstate.user.mail;
        this.dom.querySelector("#Remail").setAttribute('readonly', 'true');
        this.dom.querySelector("#botSub").style.visibility = 'hidden';
        this.dom.querySelector("#botUpd").style.visibility = 'visible';
        this.reg.show();
    }

    renderMenuItems=()=>{
        var html='';
        if(globalstate.user===null){
            html+=`
              <li class="nav-item">
                  <a class="nav-link" id="login" href="#" data-bs-toggle="modal"> <span><i class="fa fa-user"></i></span> Login </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" id="register" href="#"> <span><i class="fas fa-file-alt"></i></span> Register </a>
              </li>
            `;
        }else{
            html+=`
              <li class="nav-item">
                  <a class="nav-link" id="information" href="#" data-bs-toggle="modal"> <span><i class="fa fa-address-card"></i></span> ${globalstate.user.username}</a>
              </li>
            `;
            if(globalstate.user.type_client===1){
                html+=`
                    <li class="nav-item">
                        <a class="nav-link" id="clients" href="#"> <span><i class="fa fa-address-book"></i></span> Clients </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" id="categories" href="#"> <span><i class="fa fa-th-list" aria-hidden="true"></i></span> Cat-Cov </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="vehicles" href="#"> <span><i class="fa fa-car"></i></span> Vehicle </a>
                    </li>   
                    <li class="nav-item">
                    <a class="nav-link" id="logout" href="#" data-bs-toggle="modal"> <span><i class="fas fa-power-off"></i></span> Logout(Administrator) </a>
                    </li>
                `;
            }
            if(globalstate.user.type_client===2){
                html+=`
                <li class="nav-item">
                     <a class="nav-link" id="insurances" href="#"> <span><i class="fa fa-wheelchair"></i></span> Insurances </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="logout" href="#" data-bs-toggle="modal"> <span><i class="fas fa-power-off"></i></span> Logout(Client) </a>
                </li>
                `;
            }

        };
        this.dom.querySelector('#app>#menu #menuItems').replaceChildren();
        this.dom.querySelector('#app>#menu #menuItems').innerHTML=html;
        this.dom.querySelector("#app>#menu #menuItems #login")?.addEventListener('click',e=>this.modal.show());
        this.dom.querySelector("#app>#menu #menuItems #register")?.addEventListener('click',e=>{this.reg.show();this.clearParameters()});
        this.dom.querySelector("#app>#menu #menuItems #logout")?.addEventListener('click',e=>this.logout());
        this.dom.querySelector("#app>#menu #menuItems #clients")?.addEventListener('click',e=>this.showCli());
        this.dom.querySelector("#app>#menu #menuItems #information")?.addEventListener('click',e=>this.renderUpdate());
        this.dom.querySelector("#GoRegister")?.addEventListener('click',e=>{
            this.modal.hide();
            this.reg.show();
            });

        this.dom.querySelector("#app>#menu #menuItems #categories")?.addEventListener('click',e=>this.showCat());
        this.dom.querySelector("#app>#menu #menuItems #vehicles")?.addEventListener('click',e=>this.showVeh());

    }


    login= async ()=>{
        let user = this.dom.querySelector("#identificacion").value;
        let pass = this.dom.querySelector("#clave").value;
        if(!user || !pass){
            this.addWarning("Fill de blanks",2);
            this.modal.hide();
            this.warn.show();
            this.clearParameters();
        }else {
            const request = new Request(`${backend}/client/login/${user}/${pass}`, {method: 'GET', headers: {}});
            const response = await fetch(request);
            if (!response.ok) {
                this.addWarning(response.statusText,1);
                this.warn.show();
            }
            let usuario = await response.json();
            if (usuario.type_client === null) {
                this.addWarning("ID or password incorrect",1);
                this.modal.hide();
                this.warn.show();
                this.clearParameters();
            } else {
                globalstate.user = usuario;
                this.modal.hide();
                this.renderMenuItems();
                this.clearParameters();
            }
            if(globalstate.user.type_client === 2)
                await this.showInsurance();
        }
    }

    register = () => {
        const username = this.dom.querySelector("#Rusername").value;
        const password = this.dom.querySelector("#Rpass").value;
        const name = this.dom.querySelector("#Rname").value;
        const phone = this.dom.querySelector("#Rphone").value;
        const email = this.dom.querySelector("#Remail").value;

        // Validación de campos de entrada
        if (!username || !password || !name || !phone || !email) {
            this.addWarning("Fill de blanks",2);
            this.reg.hide();
            this.warn.show();
            return;
        }
        if(Number(phone) === NaN || phone > 99999999 ||  phone < 10000000){
            this.addWarning("Phone format wrong",2);
            this.reg.hide();
            this.warn.show();
            return;
        }

        const newRegister = {
            username: username,
            password: password,
            name: name,
            num_telefono: phone,
            mail: email
        };

        const request = new Request(`${backend}/client`, {
            method: 'POST',
            body: JSON.stringify(newRegister),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        (async ()=>{
        try {
            const response = await fetch(request);

            if (!response.ok) {
                const errorMessage = await response.text();
                this.addWarning(errorMessage,1);
                this.reg.hide();
                this.warn.show();
                return;
            }
            let resp = await response.json();
            if(JSON.stringify(resp).includes('0')){
                this.addWarning("User already exist",1);
                this.warn.show();
                this.clearParameters();
                this.reg.hide();
                return;
            }
            this.addWarning("User Registered",3);
            this.warn.show();
            this.clearParameters();
            this.reg.hide();
            this.renderMenuItems();
        } catch (error) {
            console.error(error);
            this.addWarning(error,1);
            this.warn.show();
            this.reg.hide();
            this.clearParameters();
        }
        })();
    }

    UpdateUser = async () => {
        const username = this.dom.querySelector("#Rusername").value;
        const password = this.dom.querySelector("#Rpass").value;
        const name = this.dom.querySelector("#Rname").value;
        const phone = this.dom.querySelector("#Rphone").value;
        const email = this.dom.querySelector("#Remail").value;

        // Validación de campos de entrada
        if (!username || !password || !name || !phone || !email) {
            this.addWarning("Fill de blanks",2);
            this.reg.hide();
            this.warn.show();
            return;
        }
        if(Number(phone) === NaN || phone > 99999999 ||  phone < 10000000){
            this.addWarning("Phone format wrong",2);
            this.reg.hide();
            this.warn.show();
            return;
        }
        const newRegister = {
            id:Number(globalstate.user.id),
            username: username,
            password: password,
            name: name,
            num_telefono: phone,
            mail: email,
            type_client:Number(globalstate.user.type_client)
        };
        const request = new Request(`${backend}/client/${globalstate.user.id}/update`, {
            method: 'PUT',
            body: JSON.stringify(newRegister),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

            const response = await fetch(request);
            if (!response.ok) {
                const errorMessage = await response.text();
                this.addWarning(errorMessage,1);
                this.reg.hide();
                this.warn.show();
                return;
            }
            let resp = await response.json();
            if(resp.id === null) {
                this.addWarning("Cant modify user, repeat Username",1);
                this.warn.show();
                this.clearParameters();
                this.reg.hide();
                return;
            }
            this.addWarning("User Modify",3);
            this.warn.show();
            this.clearParameters();
            globalstate.user = resp;
            this.reg.hide();
            this.renderMenuItems();

    }

    handleErrorResponse = (status, message) => {
        // Manejo de errores específicos en función del código de estado de la respuesta
        switch (status) {
            case 400:
                alert(`Request error: ${message}`);
                break;
            case 401:
                alert(`Authentication error: ${message}`);
                break;
            default:
                alert(`Unknown error: ${status}`);
        }
    }

    clearParameters = () =>{
        this.dom.querySelector("#titleReg").textContent = "Sign Up";
        this.dom.querySelector("#Rusername").value = '';
        this.dom.querySelector("#Rusername").readOnly=false;
        this.dom.querySelector("#Rpass").value = '';
        this.dom.querySelector("#Rname").value = '';
        this.dom.querySelector("#Rphone").value = '';
        this.dom.querySelector("#Remail").value = '';
        this.dom.querySelector("#Remail").readOnly= false;
        this.dom.querySelector("#identificacion").value = '';
        this.dom.querySelector("#clave").value = '';
        this.dom.querySelector("#botSub").style.visibility = 'visible';
        this.dom.querySelector("#botUpd").style.visibility = 'hidden';

    }


    showCli=async()=>{
        this.dom.querySelector("#app>#menu #menuItems").style.fontWeight = '';
        this.dom.querySelector("#app>#menu #menuItems #clients").style.fontWeight = 'bold';
        this.dom.querySelector('#app>#body').replaceChildren(this.clienteDOM.dom);
        this.clienteDOM.list();
    };

    showCat=async()=>{
        this.dom.querySelector("#app>#menu #menuItems").style.fontWeight = '';
        this.dom.querySelector("#app>#menu #menuItems  #categories").style.fontWeight = 'bold';
        this.dom.querySelector('#app>#body').replaceChildren(this.categoryDOM.dom);
        this.categoryDOM.list();
    };
    showVeh=async()=>{
        this.dom.querySelector("#app>#menu #menuItems").style.fontWeight = '';
        this.dom.querySelector("#app>#menu #menuItems #vehicles").style.fontWeight = 'bold';
        this.dom.querySelector('#app>#body').replaceChildren(this.vehicleDOM.dom);
        this.vehicleDOM.list();
    };

    logout= async ()=>{
        // invoque backend for login
        this.dom.querySelector("#app>#menu #menuItems").style.fontWeight = 'normal';
        globalstate.user=null;
        this.dom.querySelector('#app>#body').replaceChildren();
        this.renderBodyFiller();
        this.renderMenuItems();
    }
    showInsurance = async () =>{
        this.dom.querySelector('#app>#body').replaceChildren(this.insuranceDOM.dom);
        this.insuranceDOM.list();
    }

}
     //