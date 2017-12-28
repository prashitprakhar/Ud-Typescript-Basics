export class Point {
    constructor(private _x?:number, private _y?:number){

    }

    draw(){
        console.log("X co-ord is "+this._x+" and Y co-ord is "+this._y);
        
    }
}