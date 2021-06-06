/*
Doplň k obrázkům v HTML data atribut data-kalorie
a jako hodnotu do něj dej číslo, představující kalorickou
hodnotu potraviny na obrázku (číslo si klidně vymysli).

Zařiď, aby se při kliknutí na obrázek volala funkce,
která vypíše kalorickou hodnotu potraviny.

BONUS: počítej a zobrazuj celkový počet sněděných kalorií.
Tj. při klikání na obrázky se postupně sčítají kalorie.
*/

const obrazky = document.querySelectorAll('img');

obrazky.forEach((obrazek) => {
	obrazek.addEventListener('click', (udalost) => {
		//console.log('Ahoj ' + udalost.target.innerText);
        document.querySelector("#vysledek").innerHTML = udalost.target.dataset.kalorie;
	});
});
