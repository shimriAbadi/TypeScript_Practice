class Competition{
    
    private _racePlaceName : string;
    public get racePlaceName() : string {
        return this._racePlaceName;
    }
    public set racePlaceName(v : string) {
        this._racePlaceName = v;
    }

    private _allCompetitors: Jumper[];
    public get allCompetitors() : Jumper[] {
        return this._allCompetitors;
    }
    public set allCompetitors(v : Jumper[]) {
        this._allCompetitors= v;
    }
    
    
    private _maxCompetitors : number;
    public get maxCompetitors() : number {
        return this._maxCompetitors;
    }
    public set maxCompetitors(v : number) {
        this._maxCompetitors = v;
    }
    
    
    constructor(racePlaceName: string , maxCompetitors: number) {
        this.racePlaceName=this.racePlaceName;
        this._allCompetitors=[];
        this.maxCompetitors=maxCompetitors;
        
    }

    public add(v:Jumper):boolean {
        if (this.allCompetitors.length<this.maxCompetitors){
            this.allCompetitors.push(v);
            return true;
        }
        else{
            return false;
        }
    }

    public showAllJumpers():void {
        this.allCompetitors.forEach((jumper, i) => {
            jumper.show();
        });
    }

    public findWinner():Jumper{
        let winner:Jumper = this._allCompetitors[0];
        for(let i:number = 1; i < this._allCompetitors.length; i++){
            if(winner.jumpingHeight < this._allCompetitors[i].jumpingHeight){
                winner = this._allCompetitors[i];
            }
        }
        return winner;
    }
}