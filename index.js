class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return (this.radius * 2)
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    get circumference() {
        return (this.radius *2 * Math.PI)
    }

    set circumference(newCirc){
        this.radius = newCirc/2/Math.PI
    }

    get area() {
        return (this.radius ** 2 * Math.PI)
    }

    set area(newArea) {
        this.radius = sqrt(newArea/Math.PI)
    }


}