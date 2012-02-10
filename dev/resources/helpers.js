

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
	}
}