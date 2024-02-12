



let rollResult = document.getElementById("rollResult");
let image = document.getElementById('dice'); 
let span = document.getElementById("prophecy");
span.textContent = "Let's see how lucky you are!";

image.addEventListener('click', rollDice);

function rollDice() {
	let rollResult = Math.floor(Math.random() *6) +1;
	
	let img = rollResult;
	switch (rollResult) {
		case 1: {image.src='images/1.png';break;}
		case 2:{image.src='images/2.png';break;}
		case 3:{image.src='images/3.png';break;}
		case 4:{image.src='images/4.png';break;}
		case 5:{image.src='images/5.png';break;}
		case 6:{image.src='images/6.png';break;}
	}
 	updateText(rollResult); 
		
}


function updateText(rollResult) {
	span.textContent = "";

		switch (rollResult) {
		case 1: {span.textContent = 'The number 1 is symbolic of new beginnings, fresh starts, starting again, starting over.'; break;}
		case 2: {span.textContent = 'The number 2 holds significant meaning and symbolism, particularly in relation to partnerships, harmony, and balance.'; break;}
		case 3: {span.textContent = 'Wherever the number 3 shows up in your life, it’s generally an omen of creativity, communication, optimism, and curiosity!'; break;}
		case 4: {span.textContent = 'Wherever you find the number 4, it means you have something to learn about hard work, discipline, patience, order, and stability.'; break;}
		case 5: {span.textContent = 'The Number 5 vibrates with the joy of living. It resonates with risk-taking, adventure and more than anything else, adaptability to change.'; break;}
		case 6: span.textContent = 'Lucky you! This is the most powerful number. Number 6 is generally considered to be lucky in China because 六 sounds like 流 (liú), which means flow in Chinese. Many businesses display the number 6 to bring good fortune. Unlike in western culture where 666 is associated with the devil, multiples of 6 is good in Chinese culture.';
		break;
	}
 
}

