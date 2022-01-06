class Jumper{
    
    private _name : string;
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    
    private _idNumber : string;
    public get idNumber() : string {
        return this._idNumber;
    }
    public set idNumber(v : string) {
        this._idNumber = v;
    }

    
    private _jumpingHeight : number;
    public get jumpingHeight  () : number {
        return this._jumpingHeight;
    }
    public set jumpingHeight  (v : number) {
        this._jumpingHeight = v;
    }

    constructor(name: string , idNumber:string  , jumpingHeight:number) {
        this.name=name;
        this.idNumber=idNumber;
        this.jumpingHeight=jumpingHeight;
    }

    public show():void{
        console.log(`Name: ${this.name},IdNumber: ${this.idNumber},Jumping Height:${this.jumpingHeight}`);
    }

    public greaterThen(jumper: Jumper):boolean {
       if (this.jumpingHeight<jumper.jumpingHeight){
           return true;
       }else{
           return false;
       }
    }
}