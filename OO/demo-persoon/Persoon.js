/**
 * @author Rody Middelkoop
 */
/* 
 * class Persoon
 * {
 *     private String voornaam;
 * 
 *     public Persoon(voornaam,voegsel,achternaam,geboortedatum) {
            this.voornaam = voornaam;
            this.voegsel = voegsel;
            this.achternaam = achternaam;
        }
 * }
 */
var Persoon = function(voornaam,voegsel,achternaam,geboortedatum) {
	this.voornaam = voornaam;
	this.voegsel = voegsel;
	this.achternaam = achternaam;

	this.parseDate = function(stringDate) {
		if (stringDate) {
			var arrDate=stringDate.split("-");
			var now = new Date();
			now.setFullYear(arrDate[2], arrDate[1], arrDate[0]-1);
			return now;

		}
	}
	this.geboortedatum = this.parseDate(geboortedatum);

	this.getVoornaam = function() {
		if (this.voornaam)
			return this.voornaam;
		else
			return "";
	};
	this.getVoegsel = function() {
		if (this.voegsel)
			return this.voegsel;
		else
			return "";
	};
	this.getAchternaam = function() {
		if (this.achternaam)
			return this.achternaam;
		else
			return "";
	};
	this.getGeboortedatum = function() {
		if (this.geboortedatum)
			return this.geboortedatum;
		else
			return "";
	};
	this.toon = function() {
		alert(this.getVoornaam())
		if (this.voegsel) alert(this.getVoegsel())
		alert(this.getAchternaam())
		alert(this.getGeboortedatum())
	};
	this.leeftijd = function() {
		var now = new Date();
		var currentYear = now.getFullYear();
		var birthYear = this.geboortedatum.getFullYear();
		var dateOfBirth = new Date(this.geboortedatum);
		dateOfBirth.setFullYear(currentYear);
		var adj = (now-dateOfBirth<0) ? 1 : 0;
		return currentYear - birthYear - adj;
	};
	this.completeNaam = function() {
		return (this.getVoornaam() + " " + this.getVoegsel() + " " + this.getAchternaam())
	};
};
