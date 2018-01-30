


var cards=[]; 
var cardNumber=24;
var cardDown=24;
var clickTime=0;

var openCard1=-1;
var openCard2=-1;
var cardImage=[];
var countD=0;//確保兩張牌都蓋回去
var countU=0;
for (var i = 0; i < cardNumber/2; i++) {
	cardImage.push(i);
	cardImage.push(i);
}
//console.log(random);
for (var i = 0; i < cardNumber; i++) {
	var random1=Math.floor(Math.random()*cardNumber);
	var random2=Math.floor(Math.random()*cardNumber);

	var tmp=cardImage[random1];
	cardImage[random1]=cardImage[random2];
	cardImage[random2]=tmp;
}



for (var i = 0; i <cardNumber; i++) {
	//console.log(cardImage[i]);
	var tmp =new card(cardImage[i]);
	cards.push(tmp);


	tmp.c.addEventListener("click", function(){
		
		if (openCard1==-1&&cards[this.id].direction=="down") {
			openCard1=this.id;
			cards[openCard1].r=setInterval("cards[openCard1].rotate()",1);
		//	console.log(cards[openCard1].number);
			clickTime++;
			document.getElementById("footer").innerHTML="Click Times : "+clickTime+" ";
		}else if (openCard2==-1&&cards[this.id].direction=="down"&&this.id!=openCard1) {
			openCard2=this.id;
			cards[openCard2].r=setInterval("cards[openCard2].rotate()",1);
		//	console.log(cards[openCard2].number);
		clickTime++;
		document.getElementById("footer").innerHTML="Click Times : "+clickTime+" ";
			
		}

		
		
	 });
	
}
  

 function compare(){

 	if (cards[openCard1].number!=cards[openCard2].number) {

 		cards[openCard1].r=setInterval("cards[openCard1].rotate()",1);
 		cards[openCard2].r=setInterval("cards[openCard2].rotate()",1);
 		
 	}else{
 		cards[openCard1].c.className=cards[openCard1].c.className+" same";
 		cards[openCard2].c.className=cards[openCard2].c.className+" same";
 		cardDown-=2;
 		if (cardDown!=0) {
 			openCard1=-1;
 			openCard2=-1;
		}else if (cardDown==0) {

			document.getElementById('try').style.display="block";
		}

		
 	}
 };

document.getElementById('try').onclick=function(){
	document.location.reload();
}

