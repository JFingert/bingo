$(document).ready(function() {
	$('body').on('click', 'button', function() {
		$('.gifContainer').css('margin-top', '500px');
		assembleBingo();
	});
	
	function assembleBingo() {
		chooseLetter(function(letter, min, max) {
			chooseNumbers(min, max, function(number) {
				// console.log(letter + number);
				// startAnimation();
				// chooseAudio();
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

    function startAnimation() {
    	$('.gifContainer').html('<img src="./assets/' + Math.floor(Math.random() * (5 - 1 + 1) + 1) + '.gif">')
    	$('.gifContainer').animate({'margin-top': '50px'}, 1500);
    }

    function chooseAudio() {
    	// var audio = new Audio();
    	var audio = document.getElementById('audio');
    	var num = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    	var src = 'audio/' + num + '.mp3';
    	audio.pause();
    	audio.setAttribute('src', src); //change the source
		audio.load();
		audio.addEventListener("load", function() {
			audio.play();
		});
    	// if (audio.paused) {
    	// 	audio = new Audio('audio/' + num + '.mp3');
    	// 	audio.play();
    	// } else {
    	// 	audio.pause();
    	// 	audio = new Audio('audio/' + num + '.mp3');
    	// 	audio.play();
    	// }
    	
		
    }
});