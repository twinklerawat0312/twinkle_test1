class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('CLICK ON ME!!');
    this.greeting = createElement('h1');
  this.title = createElement('h1')
  this.title1 = createElement('h4')
    this.image = loadImage('images/treasure 2.png')
   //  this.image1 = loadImage('images/bg.jpg')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
   
  }

  display(){
    image (this.image,-displayWidth/2 +700,-displayHeight/25,displayWidth,displayHeight)
    
    //title.font('Impact')
    this.title.html("MY FIRST GAME");
    this.title.position(displayWidth/2 -450, 50);

    this.input.position(displayWidth/2 + 380, displayHeight/2 +80);
    this.button.position(displayWidth/2 + 500, displayHeight/2 +110 );
    
    this.title1.html("FOR INSTRUCTIONS =>");
    this.title1.position(displayWidth/2 + 310, displayHeight/2 +90);

    this.button.mousePressed(()=>{
     this.input.hide();
     this.button.hide();
     this.title.hide()
     this.title1.hide()
    gameState = 1
    
     // form.hide()
   // image (this.image1,-displayWidth/2 +700,-displayHeight/25,displayWidth,displayHeight)
//  var form1=new Instructions()
  //form1.display()
     
    });

  }
}
