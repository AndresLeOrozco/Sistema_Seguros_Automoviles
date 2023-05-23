class App{
    dom;
    modal; // login modal

    reg; // register modal

    state;  // state variables: if any\

    clienteDOM;


    constructor(){
        this.state={};
        this.dom=this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#app>#modal'));
        this.reg = new bootstrap.Modal(this.dom.querySelector('#register'));
        this.dom.querySelector('#app>#modal #apply').addEventListener('click',e=>this.login());
        this.dom.querySelector('#subs').addEventListener('click',e=>this.register());
        this.renderBodyFiller();
        this.renderMenuItems();
        this.clienteDOM = new Clients();
    }

    render=()=>{
        const html= `
            ${this.renderMenu()}
            ${this.renderBody()} 
            ${this.renderFooter()}
            ${this.renderModal()}
            ${this.renderReg()}
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
                       <img class="img-circle" id="img_logo" src="images/user.png" style="max-width: 50px; max-height: 50px" alt="logo">
                       <span style='margin-left:4em;font-weight: bold;'>Login</span> 
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <form id="form" >
                   <div class="modal-body" id="modalbo">
                       <div class="input-group mb-3">
                           <span class="input-group-text">Id</span>
                           <input type="text" class="form-control" id="identificacion" name="identificacion" value="" placeholder="id" required>
                       </div>  
                       <div class="input-group mb-3">
                           <span class="input-group-text">clave</span>
                           <input type="password" class="form-control" id="clave" name="clave" value="" placeholder="password" required>
                       </div>      
                   </div>
                   <div class="modal-footer">
                       <button id="apply" type="button" class="btn btn-primary" id="apply">Login</button>
                   </div>
<!--                   <div class="input-group">-->
<!--                       <span style="font-style: italic; margin-left: 2em;">No tiene cuenta? ... </span>-->
<!--                       <a id="" class="btn btn-info btn-block" style="margin-bottom: 15px; background-color: white; color:red; border:1px solid red" href="#">Registrese aquí</a>-->
<!--                   </div>                -->
                   </form>                 
               </div>         
           </div>          
       </div>   
    `;
    }

    renderReg = () => {
        return `
        <div id="register" class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div class="modal-body mx-3">
      
        <div class="md-form mb-3">
          <i class="fas fa-user-circle prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-name" style="margin-left: 7px"> User</label>
          <input type="text" id="Rusername" class="form-control validate">
        </div>
        
        <div class="md-form mb-3">
          <i class="fas fa-lock prefix grey-text" ></i> <label class="ml-2" data-error="wrong" data-success="right" for="orangeForm-pass" style="margin-left: 5px"> Password</label>
          <input type="password" id="Rpass" class="form-control validate">
        </div>
        
        <div class="md-form mb-3">
          <i class="fas fa-user prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-name" style="margin-left: 7px"> Name</label>
          <input type="text" id="Rname" class="form-control validate">
        </div>
        
        <div class="md-form mb-3">
          <i class="fas fa-phone prefix grey-text"></i><label data-error="wrong" data-success="right" for="orangeForm-phone" style="margin-left: 7px"> Phone</label>
          <input type="tel" id="Rphone" class="form-control validate" placeholder="00000000" pattern="[0-9]{8}" required>
        </div>

        <div class="md-form mb-3">
          <i class="fas fa-envelope prefix grey-text"></i><label data-error="wrong"  data-success="right" for="orangeForm-email" style="margin-left: 7px"> Email</label>
          <input placeholder="usuario@mail.com" type="email" id="Remail" class="form-control validate">
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button id="subs" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>
    `;
    }

    renderBodyFiller=()=>{
        var html= `
        <div id='bodyFiller' style='margin-left: 10%; margin-top:100px; width: 80%; text-align: center; font-size: 1.5em'>
        </div>
    `;
        this.dom.querySelector('#app>#body').replaceChildren();
        this.dom.querySelector('#app>#body').innerHTML=html;
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
            if(globalstate.user.type_client===1){
                html+=`
                    <li class="nav-item">
                        <a class="nav-link" id="clients" href="#"> <span><i class="fa fa-address-book"></i></span> Clients </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" id="categories" href="#"> <span><i class="fa fa-bars"></i></span> Categories </a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" id="coverages" href="#"> <span><i class="fa fa-blind"></i></span> Coverage </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="vehicles" href="#"> <span><i class="fa fa-car"></i></span> Vehicle </a>
                    </li>   
                `;
            }
            if(globalstate.user.type_client===2){
                html+=`
                <li class="nav-item">
                     <a class="nav-link" id="insurances" href="#"> <span><i class="fa fa-wheelchair"></i></span> Insurances </a>
                </li>
                `;
            }
            html+=`
              <li class="nav-item">
                  <a class="nav-link" id="logout" href="#" data-bs-toggle="modal"> <span><i class="fas fa-power-off"></i></span> Logout (${globalstate.user.username}) </a>
              </li>
            `;
        };
        this.dom.querySelector('#app>#menu #menuItems').replaceChildren();
        this.dom.querySelector('#app>#menu #menuItems').innerHTML=html;
        this.dom.querySelector("#app>#menu #menuItems #countries")?.addEventListener('click',e=>this.countriesShow());
        this.dom.querySelector("#app>#menu #menuItems #login")?.addEventListener('click',e=>this.modal.show());
        this.dom.querySelector("#app>#menu #menuItems #register")?.addEventListener('click',e=>this.reg.show());
        this.dom.querySelector("#app>#menu #menuItems #logout")?.addEventListener('click',e=>this.logout());
        this.dom.querySelector("#app>#menu #menuItems #clients")?.addEventListener('click',e=>this.showCli());
        if(globalstate.user!==null){
            switch(globalstate.user.rol){
                case 'CLI':
                    break;
            }
        }
    }


    login= async ()=>{
        let user = this.dom.querySelector("#identificacion").value;
        let pass = this.dom.querySelector("#clave").value;
        if(user === "" || pass === ""){

        }else {
            const request = new Request(`${backend}/client/name/${user}/${pass}`, {method: 'GET', headers: {}});
            const response = await fetch(request);
            if (!response.ok) {
                errorMessage(response.status);
            }
            let usuario = await response.json();
            if (usuario.type_client === null) {
                this.dom.querySelector("#identificacion").style.borderColor = "red";
                this.dom.querySelector("#clave").style.borderColor = "red";
            } else {
                const input1 = document.getElementById("identificacion");
                const input2 = document.getElementById("clave");
                globalstate.user = usuario;
                this.modal.hide();
                this.renderMenuItems();
                input1.value = input1.defaultValue;
                input2.value = input1.defaultValue;
                input1.style.borderColor = "";
                input2.style.borderColor = "";

            }
        }
    }

    register= async ()=>{
        const newRegister = {user: this.dom.querySelector("#Rusername").value,
            password: this.dom.querySelector("#Rpass").value,
            name: this.dom.querySelector("#Rname").value,
            phone: this.dom.querySelector("#Rphone").value,
            email: this.dom.querySelector("#Remail").value
        };

        const request = new Request(`${backend}/client`, {method: 'POST',body: JSON.stringify(newRegister), headers: {
            "Content-type": "application/json; charset=UTF-8"}});

        const response = await fetch(request);

        //Validate if the response is ok
        if (!response.ok) {errorMessage(response.status);}
        alert("Registered")
        this.reg.hide();
        this.renderMenuItems();


    }

    showCli=async()=>{
        this.dom.querySelector('#app>#body').replaceChildren(this.clienteDOM.dom);
        this.clienteDOM.list();
    };

    logout= async ()=>{
        // invoque backend for login
        globalstate.user=null;
        this.dom.querySelector('#app>#body').replaceChildren();
        this.renderBodyFiller();
        this.renderMenuItems();
        let request = new Request(`${backend}/login`, {method: 'DELETE', headers: { }});
    }

}
     //