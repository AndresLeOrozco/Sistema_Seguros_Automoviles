class Insurances{
    dom;
    modal;

    state;

    constructor() {
        this.state = {'entities': new Array(), 'entity': "", 'mode': 'A'};
        this.dom = this.render();
        this.modal = new bootstrap.Modal(this.dom.querySelector('#modal'));
    }

}