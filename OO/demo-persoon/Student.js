/**
 * @author Rody Middelkoop
 */
var Student = function(voornaam, voegsel, achternaam, geboortedatum, studiepunten, vakken)
{
    // super(voornaam, voegsel, achternaam, geboortedatum)
	Persoon.call(this, voornaam, voegsel, achternaam, geboortedatum)
	this.studiepunten = studiepunten;
	this.vakken = vakken;
	
	this.totaalVakken = function()
	{
		if (this.vakken)
			return this.vakken.length;
	}
	
	this.getStudiepunten = function()
	{
		return this.studiepunten;
	}
	
	this.toon = function()
	{
	    // super.toon()
		Persoon.prototype.toon.call(this);
		alert(this.getStudiepunten())
	}
}
Student.prototype = new Persoon;
