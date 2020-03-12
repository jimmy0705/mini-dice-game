


var scores = [0,0];
var roundScore = 0;
var activePlayer = 0;



document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.querySelector('.dice').style.display="none";



document.querySelector('.btn-roll').addEventListener('click',()=>{
    // alert("clicked");
    var dice = Math.floor(Math.random()*6)+1;
    console.log(dice);

    var diceDom = document.querySelector('.dice');
    diceDom.style.display="block";
    diceDom.src = 'dice-'+dice+'.png';

    if(dice !== 1){
      
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
       //console.log(roundScore);


    }else{
        nextPlayer();
       
    //     (activePlayer === 0) ? activePlayer=1 : activePlayer=0;
    //     roundScore = 0;

    //    document.getElementById('current-0').textContent = "0";
    //    document.getElementById('current-1').textContent = "0";
    //    document.querySelector('.player-0-panel').classList.toggle('active');
    //    document.querySelector('.player-1-panel').classList.toggle('active');

    //    document.querySelector('.dice').style.display="none";


    }

})

//console.log(activePlayer);

document.querySelector('.btn-hold').addEventListener('click',()=>{
    //alert("hold button clicked");
    scores[activePlayer] += roundScore;
    console.log(scores);
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
   
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-'+activePlayer).textContent = "Winner :)";
        document.querySelector('.dice').style.display="none";
    }

    nextPlayer();
})



function nextPlayer(){

    (activePlayer === 0) ? activePlayer=1 : activePlayer=0;
    roundScore = 0;

   document.getElementById('current-0').textContent = "0";
   document.getElementById('current-1').textContent = "0";
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display="none";

}




//=====practice ===========//

//var dice = Math.floor(Math.random()*6)+1;
//console.log(dice);

// var p1 = document.querySelector('#current-0');
// //console.log(p1);
// //p1.innerHTML = dice;
// p1.textContent = dice;

// var dicePic=document.querySelectorAll('.dice');
//console.log(dicePic);
//dicePic.style.display= "none";
// dicePic.forEach(dice =>{
//     //console.log(dice);
//     dice.style.display= "none";

// })

//===========//