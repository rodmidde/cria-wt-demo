var presentation;
var presentor = false;
var socket;

$(document).ready(function () {
    // Initialize presentation
    if (window.location.hash == "#presentor") {
        presentor = true;
    }

    presentation = new Presentation($(".slide"));
    socket = io.connect('http://localhost:1740');
    socket.on('connect', function () {
        socket.on('previousSlide', function () {
            if (!presentor) {
                presentation.previous();
            }
        });
        socket.on('nextSlide', function () {
            if (!presentor) {
                presentation.next();
            }
        });

        socket.on('disconnect', function () {
            console.log("Socket closed...");
        });
    });
});

/* Presentation */
var Presentation = function (slides) {
    this.slides = (slides || []).map(function (index, element) {
        return new Slide(element, index);
    });

    // On key change
    var _t = this;
    $(document).keyup(function (event) {
        _t.keyHandler(event);
    }, false);

    // Set correct slide according to hash
    this.currentSlide = parseInt(window.location.hash.split('#slide')[1], 10);

    if (isNaN(this.currentSlide)) {
        this.currentSlide = this.firstSlide;
    }

    this.update();
};

Presentation.prototype = {
    firstSlide: 1,
    currentSlide: 1,

    update: function () {
        // Update the hash to the correct slide number
        window.location.hash = "slide" + this.currentSlide;

        // Update the state of the nearby slides
        for (var x = this.currentSlide - 1; x < this.currentSlide + 7; x++) {
            if (this.slides[x - 4]) {
                this.slides[x - 4].setState(Math.max(0, x - this.currentSlide));
            }
        }
    },
    next: function () {
        this.currentSlide = Math.min(this.currentSlide + 1, this.slides.length);
        this.update();
    },
    previous: function () {
        this.currentSlide = Math.max(this.currentSlide - 1, this.firstSlide);
        this.update();
    },
    first: function () {
        this.currentSlide = this.firstSlide;
        this.resetSlides();
        this.update();
    },
    last: function () {
        this.currentSlide = this.slides.length;
        this.resetSlides();
        this.update();
    },
    goToSlide: function (slideNr) {
        this.currentSlide = slideNr;
        this.update();
    },
    keyHandler: function (event) {
        if (event.target.nodeName == "INPUT") {
            return;
        }

        switch (event.keyCode) {
            case 37: // Left arrow
                this.previous();
                socket.emit('previousSlide', {message: "previousSlide"});
                break;
            case 39: // Right arrow
            case 32: // Spacebar
                this.next();
                socket.emit('nextSlide', {message: "nextSlide"});
                break;
            case 38: // Up arrow
                this.last();
                break;
            case 40: // Down arrow
                this.first();
                break;
        }
    },
    resetSlides: function () {
        for (var slideNr = 0; slideNr < this.slides.length; slideNr++) {
            this.slides[slideNr].setState(0);
        }
    },
};

/* Slide */
var Slide = function (element, index) {
    this.element = element;
    this.index = index;
    this._jt = $(this.element);

    var _t = this;
    $(this._jt).click(function (event) {
        _t.keyHandler(event);
    }, false);

    this.setFooter();
};

Slide.prototype = {
    states: ["distant-past", "far-past", "past", "current", "future", "far-future", "distant-future"],

    setState: function (stateNr) {
        // Remove all state classes from this slide
        for (var i = 0; i < this.states.length; i++) {
            this._jt.removeClass(this.states[i]);
        }

        // Add the correct state to this slide
        this._jt.addClass(this.states[stateNr]);
    },
    setFooter: function () {
        var footer = document.createElement("footer");
        var slideNr = document.createElement("span");
        slideNr.innerHTML = this.index + 1;
        slideNr.className = "slideNr";

        var presentationTitle = document.createElement("span");
        presentationTitle.innerHTML = "AVISI Tech Day | HTML 5 and CSS3";
        presentationTitle.className = "presentationTitle";

        footer.appendChild(slideNr);
        footer.appendChild(presentationTitle);
        this.element.appendChild(footer);
    },
    showNext: function () {
        //alert("Show next");
    },
    keyHandler: function (event) {
        switch (event.button) {
            case 0: // Left mouse button
                this.showNext();
                break;
        }
    },
};