class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      batter1 = createSprite(400,680);
      batter1.scale = 0.5
      batter1.addImage("batter1",batter1img);
      batter2 = createSprite(400,200);
      batter2.scale = 0.5
      batter2.addImage("batter2",batter2img);
      batters = [batter1, batter2];

      cp1 = createSprite(20,350, 40, 40); 
      cp1.addImage('cp', cpimg); cp1.scale = 0.05;
      cp2 = createSprite(780,350, 40, 40);
      cp2.addImage('cp', cpimg);
      cp2.scale = 0.05;
      cp3 = createSprite(400,50, 40, 40);
      cp3.addImage('cp', cpimg);
      cp3.scale = 0.05;
      
      ob1 = createSprite(200,200, 20, 20);
      ob1.addImage('ob', obimg); 
      ob1.scale = 0.05;
      ob2 = createSprite(600,200, 20, 20);
      ob2.addImage('ob', obimg);
      ob2.scale = 0.05;
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        //background(rgb(198,135,103));
        //image(baseballfield, 0,-displayHeight*4,displayWidth, displayHeight*5);
        background("green");
        fill(rgb(198,135,103)); 
        shape(20,350,400,50,780,350,400,680);

        }
        if(keyDown(RIGHT_ARROW)){
           batter1.x = batter1.x + 3
        }
        if(keyDown(LEFT_ARROW)){
          batter1.x = batter1.x - 3
       }
       if(keyDown(UP_ARROW)){
        batter1.y = batter1.y - 3
       }
       if(keyDown(DOWN_ARROW)){
        batter1.y = batter1.y + 3
     } 
     if(batter1.isTouching(cp1) || batter1.isTouching(cp2) || batter1.isTouching(cp3)){
       player.score = player.score + 1
       player.update();
     }
     if(batter1.isTouching(ob1) || batter1.isTouching(ob2)){
      player.outs = player.outs + 1 
      player.update();
      batter1.x = 400 
      batter1.y = 680
     }
     if(player.outs == 3){
      player.lifes = player.lifes - 1
      player.outs = 0
      player.update();
     }
      if(player.lives === 0){
        gameState = 2;
        //player.rank +=1
        //Player.updateCarsAtEnd(player.rank)
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      strokeWeight(10)
      text('GAME OVER', 400, 400)
      //console.log(player.rank);
      //window.alert('GAME OVER!  \n RANK IS:', player.rank)
      //alert('OVERRRRRRRRRR')
  
    }
     /* swal({
        title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
        text: "You reached the end line successfully",
        //imageUrl:
        //imageSize: "100x100",
        confirmButtonText: "Ok",
      }); */
}
  