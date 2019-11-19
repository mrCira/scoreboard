var point, set, osvojio;

init();

document.addEventListener('keydown', function (e) {
	if (active) {

		// Osvojen pojen
		if(e.keyCode === 37 || e.keyCode === 38) {
			//Player1
			osvojio = 0;
			point[osvojio]++;
		} else if (e.keyCode === 39 || e.keyCode === 40) {
			//Player2
			osvojio = 1;
			point[osvojio]++;
		}
		document.getElementById('score-' + osvojio).textContent = point[osvojio];

		// Osvojen set
		if (point[osvojio] >= 11) {
			if ( (point[0] - point[1]) < -1 || (point[0] - point[1]) > 1 ) {
				set[osvojio]++;
				document.getElementById('set-' + osvojio).textContent = set[osvojio];
				document.querySelector('.player-0-panel').classList.remove('active');
				document.querySelector('.player-1-panel').classList.remove('active');
				document.querySelector('.player-' + osvojio +'-panel').classList.add('winner');
				active = false;

				// PBOEDA
				if (set[osvojio] === 2) {
					document.querySelector('#name-' + osvojio).textContent = 'Pobednik!';
				}
			}
		}

		// Servis promena
		if ( ((point[0]+point[1]) % 2) === 0 || point[0] > 10 || point[1] > 10 ) {
			promenaServe();
		}
	}

	if (e.keyCode === 82 || e.keyCode === 182) {
		// Rezultat 0:0
		point = [0,0];
		document.getElementById('score-0').textContent = 0;
		document.getElementById('score-1').textContent = 0;
		
		// Promena strane
		tempSet = set[0];
		set[0] = set[1];
		set[1] = tempSet;
		document.getElementById('set-0').textContent = set[0];
		document.getElementById('set-1').textContent = set[1];
		
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');
		active = true;
	}

	if (e.keyCode === 78 || e.keyCode === 183) {
		init();
	}
});


document.querySelector('.btn-new').addEventListener('click', init);

function init () {
	point = [0,0];
	set = [0,0];
	servira = 0;
	active = true;
	tempset = 0;

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('set-0').textContent = 0;
	document.getElementById('set-1').textContent = 0;

	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

	document.querySelector('#name-0').textContent = ' ';
	document.querySelector('#name-1').textContent = ' ';
}

function promenaServe () {
	servira === 0 ? servira = 1 : servira = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle ('active');
}