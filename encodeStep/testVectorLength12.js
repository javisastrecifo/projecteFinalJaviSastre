/**
 * 
 */

// Funció que s'assegura de que el vector entrant tingui els 10 paràmetres necessaris.
// Autor: Javi Sastre
// Paràmetres: retorna la variable 'vectorCorrecte' amb el valor true o false (correcte o incorrecte).

function testVectorLength(input) {
	var vectorCorrecte = 0;
	if (input.length == 10 && input[9] >= 0 && input[9] < 14) {
		vectorCorrecte = true
	} else {
		vectorCorrecte = false
	}
	return vectorCorrecte
}

