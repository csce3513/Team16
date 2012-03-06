{
	// Graphic resources.
	addImage:[
		["sprites","resources/sprites.png"],
		["bg","resources/bg1.png"],	
		["font","resources/font.png"],		
		["logo","resources/logo.png"],
		["tiger-boss", "resources/tiger_boss.png"],
		["enemysprites","resources/enemysprites.png"]
	],	
	addAudio:[
		["default-music",["resources/audio/fightsong.mp3","resources/audio/fightsong.ogg"],{channel:"bgmusic",loop:true}],
		["ingame",["resources/audio/testaudio.mp3","resources/audio/testaudio.ogg"],{channel:"bgmusic",loop:true}]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:35,tilew:20,tilerow:3,gapx:0,gapy:40},
		{id:"tiles",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:0},
		{id:"lsu-tiger",image:"sprites",tileh:20,tilew:20,tilerow:3,gapx:0,gapy:20},
		{id:"tiger-boss",image:"tiger-boss",tileh:55,tilew:30,tilerow:3,gapx:0,gapy:0},
		{id:"crimson-tide",image:"sprites",tileh:25,tilew:40,tilerow:3,gapx:0,gapy:75}
	],
	addBundle:[
		{file:"resources/bundle-stage1.js"},
		{file:"resources/bundle-stage2.js"}
	]
}
