var randNum1 = Math.floor((Math.random() * 6) + 1);
var playerOneDice1 = 'Images/dice' + randNum1 + '.png';
var randNum2= Math.floor((Math.random() * 6) + 1);
var playerTwoDice2 = 'Images/dice' + randNum2 + '.png';


document.querySelector('.img1').setAttribute('src',playerOneDice1);
document.querySelector('.img2').setAttribute('src',playerTwoDice2);






