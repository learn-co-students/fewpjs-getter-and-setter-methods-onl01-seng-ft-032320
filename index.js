// Add your Circle class here
class Circle  {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(diameter){
        this.radius = (diameter/2)
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    set circumference(circunference){
        this.radius = (circunference/(2 * Math.PI))
        
    }

    get area(){
        return Math.PI * (this.radius ** 2)
    }

    set area(area){
        this.radius = (area/Math.PI) ** (1/2)
    }
}