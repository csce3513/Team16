

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
	isSolidCeil:function(t){
		
					// Apply some common tilemap handlers to the map. Are the same for all the stages.
			  //  tilemaps[currentstage].tileIsSolidCeil=function(obj,t){
				
				 if(t==0 || t==1 || t==2 || t==3 || t==4 ||  t==5 || t==6)
				    return true;
				return false;
	},
	/*isSolidFloor:function(t){

	
			    
			//    tilemaps[currentstage].tileIsSolidFloor=function(obj,t){
				if(t==0 || t==1 || t==2 || t==3 || t==4 ||  t==5 || t==6)
				    return true;
				return false;
			    
	},*/
	
}