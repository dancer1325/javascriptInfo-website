class LiveTimer extends TimeFormatted {
    render() {
        // Set into this element, the other autonomous custom element
        // -> which invokes connectedCallback()
        this.innerHTML = `
    <time-formatted hour="numeric" minute="numeric" second="numeric">
    </time-formatted>
    `;
        // firstElementChild            is the previous one set up
        this.timerElem = this.firstElementChild;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
        // Periodic schedule call
        this.timer = setInterval(() => this.update(), 1000);
    }

    update() {
        this.date = new Date();
        // set a new value for the attribute 'datetime', which is listened the changes by TimeFormatted
        this.timerElem.setAttribute('datetime', this.date);
        // Trigger an event, since we wanted to display on the console based on event action tick
        this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
    }

    disconnectedCallback() {
        clearInterval(this.timer); // important to let the element be garbage-collected
    }
}

customElements.define("live-timer", LiveTimer);