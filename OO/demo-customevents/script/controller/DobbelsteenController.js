function DobbelsteenController() 
{
    // let's explain this "hack" when we get there
    var self = this;
    this._ds = new Dobbelsteen();
    
    this.throwDice = function()
    {
        self._ds.throwMe()
    }

    this._textView = new DobbelsteenTextView(this);
    this._imgView = new DobbelsteenImageView(this);
    this._ds.addListener("throwEvent", this._textView.diceThrown);
    this._ds.addListener("throwEvent", this._imgView.diceThrown);    
};
