/**
 * @author Rody Middelkoop
 */
var Docent = function(voornaam, voegsel, achternaam, geboortedatum, salaris, vakken)
{
	Persoon.call(this, voornaam, voegsel, achternaam, geboortedatum)
	this.salaris = salaris;
	this.vakken = vakken;
	
	this.totaalVakken = function()
	{
		if (this.vakken)
			return this.vakken.length;
	}
	
	this.getSalaris = function()
	{
		return this.salaris;
	}
	
	this.toon = function()
	{
		Persoon.prototype.toon.call(this);
		alert(this.getSalaris())
	}
}
Docent.prototype = new Persoon;
