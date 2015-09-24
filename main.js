$(document).ready(function() {
	var audio = new Audio();
	var audioCounter = 0;
	var numbersPlayed = [];

	$('body').on('click', '.winner-overlay', function() {
		$(this).hide();
		audio.pause();
	});
	
	function assembleBingo() {
		chooseLetter(function(letter, min, max) {
			chooseNumbers(min, max, function(number) {
				if (numbersPlayed.indexOf(letter + number) > -1) {
					console.log('exists! ', letter + number);
					assembleBingo();
				} else {
					console.log('does not exist! ', letter + number);
					startAnimation();
					$('.numberContainer').html('<p></p>');
					$('p').addClass('fade-in');
					$('p').html(letter + number);
				}
				// setTimeout(function() {
				// 	$('p').removeClass('fade-in');
				// }, 10500);
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
    	// var num = Math.floor(Math.random() * (18 - 1 + 1) + 1);
    	console.log(audioCounter);
    	if(audioCounter >= 25 || audioCounter < 1) {
    		audioCounter = 1;
    	} else {
    		audioCounter++;
    	}
		
    	audio.src = 'audio/' + audioCounter + '.mp3';
    	console.log(audioCounter);
    	// audio.currentTime = 30;
    	audio.play();
    }

    $(document).keypress(function(event){
    	if(String.fromCharCode(event.which) == ' ') {
    		audio.pause();
			chooseAudio(audioCounter);
			assembleBingo();
			// $('p').css('opacity', 0);
			$('.title').addClass('flicker');
			$('.spiral').addClass('spin');
			$('.jaw').addClass('chomp');
    	}
    	if (String.fromCharCode(event.which) == '1') {
    		$('.winner-overlay').show();
			audio.src = 'audio/bingo-winner.mp3';
			$('.title').removeClass('flicker');
			$('.spiral').removeClass('spin');
			$('.jaw').removeClass('chomp');
			audio.pause();
	    	audio.play();
	    	$('p').html('');
    	}

    	if (String.fromCharCode(event.which) == '2') {
	    	$('.winner-overlay').hide();
			audio.pause();
    	}
	 });
});
    function startAnimation() {
    	// $('.gifContainer').html('<img src="./assets/' + Math.floor(Math.random() * (5 - 1 + 1) + 1) + '.gif">')
    	// $('.gifContainer').animate({'margin-top': '50px'}, 1500);

    }