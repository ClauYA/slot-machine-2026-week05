
//input is the amount of money the player has to bet and multiply the money for and amount it depends which item was matched

//if you win: 

//throw new error() it is like an alert that shows an error its knowledge no related to the problem here
document.getElementById("spin-button").onclick=spin;
document.getElementById("min-icon").onclick=substracMin;
document.getElementById("max-icon").onclick=addMax;
const reel=['exercise','egg','glass_cup','bedtime','nutrition']
const minimumBet=5;
const maximumBet=50;
let balance=100;

let winningAmount=2;
function spin(yourBet)
{	
	yourBet=Number(document.getElementById('bet-amount').value)
	
	document.querySelector('#wallet').value=balance
	for(let reelNum = 1; reelNum <= 3; reelNum++) 
	{
        for(let i = 0; i < reel.length; i++) 
		{
            document.getElementById(`reel${reelNum}-symbol${i+1}`).innerHTML = 
            `<span class="material-symbols-outlined">${reel[Math.floor(Math.random()*reel.length)]}</span>`;
        }
    }
	if(yourBet>=minimumBet && yourBet<=maximumBet && yourBet>0 && yourBet<=balance)
	{
		
		if(document.getElementById('reel1-symbol3').innerText===document.getElementById('reel2-symbol3').innerText
		 && document.getElementById('reel2-symbol3').innerText===document.getElementById('reel3-symbol3').innerText)
		{
			balance+=yourBet*winningAmount;
			document.querySelector('#result').innerText="You won!";
			document.querySelector('#wallet').value=balance;
		}else{
			balance-=yourBet;
			document.querySelector('#result').innerText="You lost!";
		}
	}else if(balance===0){
			alert("Game over!");
	}else{
		alert('Your bet is less than our mininum or max than our maxinumbet')
	}
	return `Remaining balance: $${balance}`;
}

function substracMin()
{
	let minNewBet=Number(document.getElementById('bet-amount').value)
	if(minNewBet>minimumBet)
	{
		console.log(minNewBet)
		minNewBet-=5
		console.log(minNewBet)
		document.querySelector('#bet-amount').value=minNewBet
	}else{
		document.querySelector('#min-max').innerText+='That is the mininum you can bet'
	}
	
}
function addMax()
{
	let maxNewBet=Number(document.getElementById('bet-amount').value)
	if(maxNewBet<maximumBet)
	{
		console.log(maxNewBet)
		maxNewBet+=5
		console.log(maxNewBet)
		document.querySelector('#bet-amount').value=maxNewBet
	}else{
		console.log('reach max')
		document.querySelector('#min-max').innerText+='That is the maximun you can bet'
	}
}


