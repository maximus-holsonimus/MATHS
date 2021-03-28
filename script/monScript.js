//on prend la date du fichier
var lastMod = document.lastModified;

//un tableau contenant les noms des mois
var tabMois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");

//on construit un objet de type date avec la date du fichier
var lastDate = new Date(lastMod);
var annee = lastDate.getFullYear();
var hh = lastDate.getHours();
var mm = lastDate.getMinutes();

var heure = (hh > 9? hh:"0" + hh);
heure += ":" + (mm > 9? mm:"0" + mm);

document.write("<center>Dernière date de mise à jour : ");
document.write(lastDate.getDate() + " ");
document.write(tabMois[lastDate.getMonth()] + " ");
document.write(annee + " ");
document.write(" à " + heure + "</center>");
