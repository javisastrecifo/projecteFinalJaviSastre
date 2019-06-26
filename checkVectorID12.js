/**
 * 
 */

// Funció que identifica qui és l'autor del vector entrant.
// Autor: Javi Sastre
// Paràmetres: retorna la variable 'alumne' amb el nom de l'alumne


function vectorId(id) {
	var llistaAlumnes = [ "Marc Formador", "Maria Arquer", "Ma Jose Balmana",
			"Gerard Barbero", "Lionel Cioffi", "Carlos Fabian",
			"Juan Gonzalez", "Jose A Juarez", "Montse Monclus",
			"Javier Narciandi", "Nuria Perez", "Guillermo Rincon",
			"Javi Sastre", "Roger Sobrino" ];
	var alumne = llistaAlumnes[id];
	return alumne;
}

