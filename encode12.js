/**
 * 
 */

// Funció que multiplica la matriu entrant per la matriu donada per codificar.
// Autor: Javi Sastre
// Paràmetres: utilitza dos entrades de dades: matriu entrant i matriu donada pel professor
// Després de la operació, retorna la variable 'matriuResultant'.

function encode12(input1, input2) {

	var matriuEntrant = input1;
	var matriuDonada = input2;
	var matriuResultant =[];

	for (var j = 0; j < 3; j++) {
		matriuResultant[j] =[];
		for (var l = 0; l < 3; l++) {
			matriuResultant[j][l] = 0;
		}
	}

	
	for (var fila = 0; fila < 3; fila++) {
		for (var colu = 0; colu < 3; colu++) {
				for (i = 0; i < 3; i++) {
				matriuResultant[fila][colu] += matriuEntrant[fila][i] * matriuDonada[i][colu];

				}
				
		}
	}

	return matriuResultant;
}