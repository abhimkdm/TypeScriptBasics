class Shape {

   public h : number;
   public w : number;

    constructor(height: number, width? : number) {
        this.h = height;
        this.w = width || 0;
    }
}

class Reactangle extends Shape {

    area() {
        return this.h * this.w;
    }

}

class Square extends Shape {

    area() {
        return this.h * this.h;
    }

}

var rectObj = new Reactangle(10,20); 
console.log(rectObj.area());

var srq= new Square(10);
console.log(srq.area());