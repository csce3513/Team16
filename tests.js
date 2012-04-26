

var gbox ={
	
	/**
  * Creates a new game object. Generally speaking you pass a fully-defined object as the parameter (including a group, id, tileset, and so on).
  * A group must be specified, or the program will crash. If no id is specified, then it will automatically provide 
  * an id of 'obj-XXXX' where 'XXXX' is an automatically incrementing integer. This is where the <i>initialize</i>, <i>first</i>, and <i>blit</i>
  * functions are defined, as well.
  * @param {Object} data The object you wish to create.
  * @returns {Object} The object you created.
  * @example
  * data = {
  *   group: 'player',
  *   id: 'player_id',
  *   tileset: 'player_tiles', 
  *   x: 0,
  *   y: 0,
  *   initialize: function() {
      this.x = 10;
      this.y = 10;
      },
  * };
  * gbox.addObject(data);
  */    
	addObject:function(data) {		
		return data;
	},
	
	groupIsEmpty:function(group){
		if(enemyCount==0)
			return true;
		return false;
	},
	
	getObject:function(){}
}

var help ={
	getTileInMap:function(){}
}

var gamecycle={
	createMaingame:function(id,group) {
		return gbox.addObject({
			id:id,
			group:group,
			counter:0,
			difficulty:0,
			state:50,
			stateFirstIteration:true,
	
			hud:{},
	
			/**
			 * This method is called whenever you load a new map. It's meant to be
			 * overridden when you create your game.
			 */
			changeLevel:function() { },
	
			/**
			 * This method is called every time a player is "reborn". This method is
			 * meant to be overridden since you have to do garbage collection.
			 */
			newLife:function() { },
	
			// level intro animation
			levelIntroAnimation:function(reset) {
				
			 },
	
			 // Life intro animation
			 newlifeIntroAnimation:function(reset) {
				
			},
	
			// gameover animation
			gameoverIntroAnimation:function(reset) {
				
			},
	
			// game title animation
			gameTitleIntroAnimation:function(reset) {
				
			},
	
			// End level animation
			endlevelIntroAnimation:function(reset) {
				 
			},
	
			// Game ending
			gameEndingIntroAnimation:function(reset) {
				
			},
	
			// PRESS START
			pressStartIntroAnimation:function(reset) {
				
			},
	
			/**
			 * This method is called when the player dies.
			 */
			gameIsOver:function() { return true; },
	
			/**
			 * Actions done during the game (i.e. stage is clear or other ending conditions)
			 */
			gameEvents:function() {
	
			},
	
			gameMenu:function(reset) {
				this.difficulty = 0;
			},
	
			// CHECK
			gameIsHold:function() { // Use this clause to check collision and kill player: if true the level is changing
				return (this.state==400)||(this.state==401);
			},
	
			isCompleted:function() {
				return (this.state==800);
			},
	
			// GAME CYCLE
			getNextLevel:function() {
				return this._nextlevel;
			},
	
			gotoLevel:function(level) {
				this._nextlevel=level;
				this.setState(400);
			},
	
			playerDied:function(data) {
				this._loselife=data;
				this.setState(500);
			},
	
			gameIsCompleted:function() {
				this.setState(800);
			},
	
			// private methods
	
			/**
			 * Changes the current game state
			 *
			 * @param	st	state number
			 */
			setState:function(st) {
				this.state=st;
				this.stateFirstIteration=true;
			},
	
			/*
			 * Removes all objects in each group except the game
			 * cycle group. Used for garbage collection when resetting the game.
			 */
			_resetGroups:function() {
				
			},
	
			stateIsReady:function() { this.stateFirstIteration=false; },
	
			blit:function() {
				}
		});
		
	}

}
