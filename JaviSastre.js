/**
 * 
 */

function vectorToMatrix12(input) {
	var vector = input;
	var matriu = [ [ vector[0], vector[1], vector[2] ],
			[ vector[3], vector[4], vector[5] ],
			[ vector[6], vector[7], vector[8] ] ];

	return matriu[0] + "<br>" + matriu[1] + "<br>" + matriu[2];
}

function testVectorComplet(input) {
	var vectorCorrecte = "";
	if (input.length == 10 && input[9] >= 0 && input[9] < 13) {
		vectorCorrecte = "El vector introduit esta complet."
	} else {
		vectorCorrecte = "El vector introduit no esta complet."
	}
	return vectorCorrecte
}

function vectorId(id) {
	var llistaAlumnes = [ "Marc Formador", "Maria Arquer", "Ma Jose Balmana",
			"Gerard Barbero", "Lionel Cioffi", "Carlos Fabian",
			"Juan Gonzalez", "Jose A Juarez", "Montse Monclus",
			"Javier Narciandi", "Nuria Perez", "Guillermo Rincon",
			"Javi Sastre", "Roger Sobrino" ];
	var alumne = llistaAlumnes[id];
	return alumne;
}

