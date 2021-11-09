export default class Publisher{

    static listeners = {}

    static subscribe( name, listener ) {
        if( !this.listeners[name] ) {
            this.listeners[name] = [];
        }
        this.listeners[name].push(listener);
    }

    static unsubscribe( name, listener ) {

    }

    static notify( name , data) {

        if( !this.listeners[name] ) {
            this.listeners[name] = [];
        }
        this.listeners[name].forEach( fn => fn(data) );
    }

    static events = {
        clickProduct: 'CLICK ON PRODUCT',
        buildModal: 'BUILD MODAL',
        searchFromInput: 'SEARCH FROM INPUT',
        clickCategFiltr: 'CLICK ON CATEGORY'
    }

}