form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';

    // chrome needs some time to paint yellow
    setTimeout(() => {
        //  .tagName            Allows identifying HTML element
        alert("target = " + event.target.tagName + ", this=" + this.tagName);
        event.target.style.backgroundColor = ''
    }, 0);
};