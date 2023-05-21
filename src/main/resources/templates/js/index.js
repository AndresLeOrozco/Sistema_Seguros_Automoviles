var backend="http://localhost:9090";

var globalstate={user:null};

var app;

function loaded(){
    app= new App();
    document.querySelector('#root').replaceChildren(app.dom);
}
document.addEventListener("DOMContentLoaded",loaded);
//document.addEventListener("DOMContentLoaded", (event) => {this.loaded();});

function errorMessage(code){
    alert(`Error. Status: ${code}`);
}