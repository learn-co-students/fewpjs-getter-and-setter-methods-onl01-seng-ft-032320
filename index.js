class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter/2;
    }

    get diameter() {
        return this.radius * 2
    }

    set circumference(circumference) {
        this.radius = (circumference/Math.PI)/2
    }

    get circumference() {
        return (this.radius*2)*Math.PI
    }

    set area(area) {
        const pi = Math.PI
        this.radius = Math.sqrt(area/pi)
    }

    get area() {
        const pi = Math.PI
        return pi * (this.radius*this.radius)
    }

}


