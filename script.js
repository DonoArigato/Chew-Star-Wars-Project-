const friendly = prompt("On a Scale of one to ten how friendly are you?");
const flight   = prompt("On a Scale of one to ten how well can you fly?")
const game     = prompt("On a Scale of one to ten how well can you play Dejarik?")
const fear     = prompt("On a Scale of one to ten how afraid of you of the Galaltic Empire are you?")
let total = Number(friendly) + Number(flight) + Number(game) + Number(fear);

 if(total >=35 ){
     console.log(`Your score is ${total}, you would make a great friend!`);
 } else if (total <=34 && total > 10 ){
     console.log(`Your score is ${total}, you would make a decent friend.`);
 }  else {
     console.log(`Your score is ${total}, you would make a terrible friend!`);
 } 

 