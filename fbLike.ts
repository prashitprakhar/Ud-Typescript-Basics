export class FbLike{

   // buttonStatus : boolean = false;
   // numberOfLikes : number;
    constructor(private _numberOfLikes: number, private _buttonStatus: boolean){
    }

    onClickLikeBtn(){
        this._numberOfLikes += this._buttonStatus ? -1 : 1;
        this._buttonStatus = !this._buttonStatus;
    }

    get numberOfLikes(){
        return this._numberOfLikes;
    }

    get buttonStatus(){
        return this._buttonStatus;
    }

    set numberOfLikes(likeCOunt){
        this._numberOfLikes = likeCOunt;
    }

    set buttonStatus(isClicked){
        this._buttonStatus = isClicked;
    }
}