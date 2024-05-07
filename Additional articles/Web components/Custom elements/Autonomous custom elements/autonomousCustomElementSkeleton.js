// Skeleton class to define the custom element
class MyElement extends HTMLElement {
    constructor() {
        super();
        // element created
    }

    connectedCallback() {
        // browser calls this method when the element is added to the document
        // (can be called many times if an element is repeatedly added/removed)
    }

    disconnectedCallback() {
        // browser calls this method when the element is removed from the document
        // (can be called many times if an element is repeatedly added/removed)
    }

    static get observedAttributes() {
        return [/* array of attribute names to monitor for changes */];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // called when one of attributes listed above is modified
    }

    adoptedCallback() {
        // called when the element is moved to a new document
        // (happens in document.adoptNode, very rarely used)
    }

    // Properties as any ES6 class
    set name(value){}
    get name(){}

    // Listen events
    onClick(){
        this.dispatchEvent(new CustomEvent('nameChange'), {});
    }

    // there can be other element methods and properties
}

// Register the custom element for the browser
// Any time it's used `<my-element>` -> instance of MyElement will be created

// 1. Via customElements
customElements.define("my-element", MyElement);

// 2. Via document
document.createElement('my-element');
