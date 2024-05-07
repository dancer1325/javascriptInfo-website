class RenderingOrder extends HTMLElement {
    connectedCallback() {
        // innerHTML            Get access information contained into the HTMLElement
        // innerHTML will be empty, since in connectedCallBak no child information added
        alert(this.innerHTML);
    }
}

customElements.define("render-order", RenderingOrder);

class RenderingOrderSetTimeOut extends HTMLElement {
    connectedCallback() {
        // Zero delay       === it's executed after executing all the script file
        setTimeout(() => alert(this.innerHTML));
    }
}

customElements.define("render-order-set-timeout", RenderingOrderSetTimeOut);


class RenderingOrderNestedSetTimeOut extends HTMLElement {
    connectedCallback() {
        // id       Attribute contained by all Element -- from which HTMLElement extend from --
        alert(`${this.id} connected.`);
        setTimeout(() => alert(`${this.id} initialized.`));
    }
}

customElements.define("render-order-nested-set-timeout", RenderingOrderNestedSetTimeOut);


// TODO: Build get access to children's content via observedAttributes & attributeChangedCallback -- Fix --
class RenderingOrderObservingAttributesAndListeningChanges extends HTMLElement {

    render() {
        //alert(this.b);
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    static get observedAttributes() {
        return ['innerSample'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("render-order-observing-attributes-to-inner", RenderingOrderObservingAttributesAndListeningChanges);