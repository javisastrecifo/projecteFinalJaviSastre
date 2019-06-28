/**
 * 
 */

// Funció que converteix el vector de 10 valors en una matriu de 3 x 3 valors (deixant separat el 10è element)
// Autor: Javi Sastre
// Paràmetres: retorna la variable 'matriu'.

function vectorToMatrix12(input) {
	var vector = input;
	var matriu = [ [ vector[0], vector[1], vector[2] ],
			[ vector[3], vector[4], vector[5] ],
			[ vector[6], vector[7], vector[8] ] ];

	return matriu[0] + "<br>" + matriu[1] + "<br>" + matriu[2];
}

