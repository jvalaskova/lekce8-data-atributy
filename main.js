const obrazky = document.querySelectorAll('img');

obrazky.forEach((obrazek) => {
	obrazek.addEventListener('click', zobrazKalorie);
});

function zobrazKalorie(udalost) {
	let obrazek = udalost.target;

	let kalorie = obrazek.dataset.kalorie;
	let zeme = obrazek.dataset.zemePuvodu;

	let soucetKaloriiElement = document.querySelector('#soucet-kalorii')

	document.querySelector('#vysledek').textContent = 'Snědla jsi ' + kalorie + ' kcal/100g a země původu je ' + zeme + '.';
	soucetKaloriiElement.textContent = parseInt(soucetKaloriiElement.textContent) + parseInt(kalorie);

	let snedeno = document.querySelector('#snedeno');
	obrazek.removeEventListener('click', zobrazKalorie);
	snedeno.appendChild(obrazek);
}