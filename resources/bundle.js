{
	// Graphic resources.
	addImage:[
		["sprites","resources/sprites.png"],
		["sprites2","resources/sprites2.png"],
		["bg","resources/bg1.png"],	
		["bg2","resources/bg2.png"],
		["bg3","resources/bg3.png"],
		["bg4","resources/bg4.png"],
		["bg4Boss","resources/bg1.png"],
		["intro1","resources/bg1.png"],
		["intro2","resources/bg1.png"],
		["intro3","resources/bg1.png"],
		["ending1","resources/bg1.png"],
		["font","resources/font.png"],	
		["fontbig","resources/fontbig.png"],		
		["logo","resources/logo.png"]
	],	
	addAudio:[
		["default-music",["resources/audio/fightsong.mp3","resources/audio/fightsong.ogg"],{channel:"bgmusic",loop:true}],
		["ingame",["resources/audio/testaudio.mp3","resources/audio/testaudio.ogg"],{channel:"bgmusic",loop:true}],
		["die-sound",["resources/audio/die.mp3","resources/audio/die.ogg"],{channel:"sfx"}],
		["jump-sound",["resources/audio/jump.mp3","resources/audio/jump.ogg"],{channel:"sfx"}],
		["hit-sound",["resources/audio/hit.mp3","resources/audio/hit.ogg"],{channel:"sfx"}]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:35,tilew:20,tilerow:3,gapx:0,gapy:40},
		{id:"tiles",image:"sprites",tileh:20,tilew:20,tilerow:12,gapx:0,gapy:0},
		{id:"lsu-tiger",image:"sprites",tileh:20,tilew:20,tilerow:3,gapx:0,gapy:20},
		{id:"tiger-boss",image:"sprites",tileh:55,tilew:30,tilerow:3,gapx:0,gapy:111},
		{id:"crimson-tide",image:"sprites",tileh:25,tilew:40,tilerow:3,gapx:0,gapy:75},
		{id:"crimson-boss",image:"sprites",tileh:56,tilew:31,tilerow:3,gapx:0,gapy:166},
		{id:"florida-gator",image:"sprites",tileh:13,tilew:48,tilerow:3,gapx:0,gapy:100},
		{id:"florida-boss",image:"sprites",tileh:54,tilew:30,tilerow:3,gapx:0,gapy:221},
		{id:"georgia-dog",image:"sprites2",tileh:19,tilew:34,tilerow:3,gapx:0,gapy:332},
		{id:"georgia-boss",image:"sprites2",tileh:54,tilew:28,tilerow:3,gapx:0,gapy:278},
		{id:"tiledfont",image:"font",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:8}
	],
	addBundle:[
		{file:"resources/bundle-dialogues.js"},
		{file:"resources/bundle-stage1.js"},
		{file:"resources/bundle-stage1boss.js"},
		{file:"resources/bundle-stage2.js"},
		{file:"resources/bundle-stage2boss.js"},
		{file:"resources/bundle-stage3.js"},
		{file:"resources/bundle-stage3boss.js"},
		{file:"resources/bundle-stage4.js"},
		{file:"resources/bundle-stage4boss.js"}
	]
}
