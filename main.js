$(document).ready(function() {
	var audio = new Audio();
	// window.audio.abort();

	$('body').on('click', '.select', function() {
		$('.gifContainer').css('margin-top', '500px');
		assembleBingo();

		$('.title').addClass('flicker');
		$('.spiral').addClass('spin');
		$('.jaw').addClass('chomp');
		chooseAudio();
		setTimeout(function() {
			$('.title').removeClass('flicker');
			$('.spiral').removeClass('spin');
			$('.jaw').removeClass('chomp');
			audio.pause();
		}, 3950);
	});

	$('body').on('click', '.winner', function() {
		$('.winner-overlay').show();
		audio.src = 'audio/bingo-winner.mp3';
    	audio.play();
    	$('p').html('');

		setTimeout(function() {
			audio.pause();
			$('.winner-overlay').hide();
		}, 7000);
	});
	
	function assembleBingo() {
		chooseLetter(function(letter, min, max) {
			chooseNumbers(min, max, function(number) {
				// console.log(letter + number);
				startAnimation();
				$('p').html(letter + number);
			});
		});
	}
    
    function chooseLetter(callback) {
    	var letterArray = ['B', 'I', 'N', 'G', 'O'];
    	var letter = letterArray[Math.floor(Math.random() * letterArray.length)];
    	var min = '', max = '';

    	if (letter == 'B') {
    		min = 1, max = 15;
    	}
    	if (letter == 'I') {
    		min = 16, max = 30;
    	}
    	if (letter == 'N') {
    		min = 31, max = 45;
    	}
    	if (letter == 'G') {
    		min = 46, max = 60;
    	}
    	if (letter == 'O') {
    		min = 61, max = 75;
    	}
    	callback(letter, min, max);
    }

    function chooseNumbers(min, max, callback) {
    	callback(Math.floor(Math.random() * (max - min + 1) + min));
    }

    function chooseAudio() {
    	var num = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    	var src = 'audio/' + num + '.mp3';

    	audio.src = src;
    	// audio.currentTime = 30;
    	audio.play();
    }
});
    function startAnimation() {
    	// $('.gifContainer').html('<img src="./assets/' + Math.floor(Math.random() * (5 - 1 + 1) + 1) + '.gif">')
    	// $('.gifContainer').animate({'margin-top': '50px'}, 1500);

    }