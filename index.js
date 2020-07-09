// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
        this.pi = Math.PI
    }
    
    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return this.pi * (this.diameter)
    }

    set circumference(circumference) {
        return this.radius = circumference / ( this.pi * 2 )
    }

    get area() {
        return this.pi * (this.radius**2)
    }


}