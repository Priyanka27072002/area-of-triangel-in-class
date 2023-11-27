class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    area(){
        let x=this.height*this.width
        document.write("The area of the rectangle is "+x+"<br>")
    }
    perimeter(){
        let y=2*(this.height+this.width)
        document.write("The perimeter of the rectangle is "+y)
    }

}
let areaOf=new Rectangle(10,20)
areaOf.area()
areaOf.perimeter()