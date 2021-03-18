class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      //this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Just Get Home");
      this.title.position(800/2 - 40, 0);
  
      this.input.position(800/2 - 40 , 700/2 - 80);
      this.button.position(800/2 + 30, 700/2);
      //this.reset.position(800-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(800/2 - 70, 700/4);
      });
  
      /*this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });*/
  
    }
  }
  