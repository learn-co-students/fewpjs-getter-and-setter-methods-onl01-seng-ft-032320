class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // getters
    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return (Math.PI * this.diameter);
    }

    get area() {
        return (Math.PI * (this.radius **2));
    }

    // setters
    set diameter(dia) {
        this.radius = dia / 2;
    }

    set circumference(circ) {
        this.diameter = (circ / Math.PI);
    }

    set area(area) {
        this.radius = (Math.sqrt(area / Math.PI));
    }
}
