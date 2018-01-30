
function card(n){
	this.r;
	this.flip=0;
	this.number=n;
	
	this.direction="down";
	var newDiv=document.createElement("div");
		newDiv.className="card";
		newDiv.id=i;
	document.body.appendChild(newDiv);
	this.c=newDiv;
 
	this.rotate=function(){ 
			
			this.c.style.transform="rotateY("+this.flip+"deg)";
			if (this.flip<90) 
			{
				this.flip+=2;
			}else if (this.flip<180)
			{
				if (this.direction=="down") {
					this.c.style.backgroundImage="url(src/img/up"+this.number+".jpg)";
				}else{
					this.c.style.backgroundImage="url(src/img/down.jpg)";
				}

				this.flip+=2;
			}else{
				
				clearInterval(this.r);

				this.flip=0;
				//console.log(this.number);

				if (this.direction=="down") {
					this.direction="up";
					countU++;
					if (countU==2) {
						countU=0;
						setTimeout(compare,400);
					}

				}else{
					this.direction="down"
					countD++;
					if (countD==2) {
					openCard1=-1;
 					openCard2=-1;
 					countD=0;

					}
				}
			}
		};
	 
	return this;

};