class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) { 
        return this.radius = newDiameter / 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set circumference(newCircumference) {
        return this.radius = (newCircumference / Math.PI) / 2
    }

    get area() {
        return this.area = Math.PI * this.radius ** 2
    }
    
    set area(newArea) {
        return this.radius = Math.sqrt(newArea / Math.PI)
    }
}