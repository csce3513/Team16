var helpers={

	// CONSTANTS
	getNumberOfLives:function(levelDifficulty){
		if(levelDifficulty == 0)
			return 10;
		if(levelDifficulty == 1)
			return 5;
		return 1;
	},	
	isGameOver:function(numberOfLives){
		if(numberOfLives == 0)
			return true;
		return false;
	},
	isGameWon:function(level){
		if(level == 10)
			return true; 
		return false;
	},
	isPlayerDead:function(isPlayerTouchingEnemyWithFeet){
		if(isPlayerTouchingEnemyWithFeet)
			return false;
		return true;
	},
	kill:function(){
		maingame.playerDied({wait:1});
		var player = gbox.getObject("player","player");
		player.killed=true;
		
	},
	didCollide:function(o1,o2,t) {//Checks to see if 2 objects collied based on their x and w location 
		if (!t) t=0;
		return !((o1.y+o1.h-1-t<o2.y+t) || (o1.y+t> o2.y+o2.h-1-t) || (o1.x+o1.w-1-t<o2.x+t) || (o1.x+t>o2.x+o2.w-1-t));
	},
	isSolidCeil:function(t){
		// Apply some common tilemap handlers to the map. Are the same for all the stages.
			
		if(t==0 || t==1 || t==2 || t==3 || t==4 ||  t==5 || t==6)
		   return true;
	       return false;
	},
	isSolidFloor:function(t){
		if(t==0 || t==1 || t==2 || t==3 || t==4 ||  t==5 || t==6)
		    return true;
		return false;    
	},
	setStage:function(level){
		// If level is null then return 'stage1' else return the level passed in
		if (level == null)
			return "stage1";
		return level;
	},
	checkIfGameIsCompleted:function(maingame, mapmeta, currentstage){
		if (this.areEnemiesDead())
		{			
			if(mapmeta[currentstage].nextLevel != null)
				maingame.gotoLevel(mapmeta[currentstage].nextLevel);
			else
				maingame.gameIsCompleted();
		}
	},
	areEnemiesDead:function(){		
		return gbox.groupIsEmpty("enemies")
	}
	
}

