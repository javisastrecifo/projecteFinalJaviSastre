/**
 * 
 */

// Funció que converteix el vector de 10 valors en una matriu de 3 x 3 valors
// (deixant separat el 10è element)
// Autor: Javi Sastre
// Paràmetres: retorna la variable 'matriu'.

function matrixToVector12(input1,input2) {
	var matriu = input1;
	var codiAlumne = input2;
	var vector = [];
	vector = [ matriu[0], matriu[1], matriu[2], codiAlumne ]

	return vector;
}
