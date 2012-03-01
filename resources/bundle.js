{
	// Graphic resources.
	addImage:[
		["sprites","resources/cels.png"],
		["bg","resources/bg1.png"],	
		["player_sprite","resources/player_sprite.png"],
		["font","resources/font.png"],		
		["logo","resources/logo.png"],
		["enemysprites","resources/enemysprites.png"],
		["tiger_boss","resources/tiger_boss.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"player_sprite",tileh:35,tilew:20,tilerow:3,gapx:0,gapy:0},
		{id:"tiles",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:40},
		{id:"lsu-tiger",image:"enemysprites",tileh:20,tilew:20,tilerow:3,gapx:0,gapy:0},
		{id:"tiger-boss",image:"tiger_boss",tileh:50,tilew:30,tilerow:3,gapx:0,gapy:0},
		{id:"enemy-goo",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:60},
		{id:"enemy-sad",image:"sprites",tileh:40,tilew:20,tilerow:9,gapx:0,gapy:80}
	],
	addBundle:[
		{file:"resources/bundle-stage1.js"}
	]
}
