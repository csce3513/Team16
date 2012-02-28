{
	// Graphic resources.
	addImage:[
		["sprites","resources/sprites.png"],
		["bg","resources/bg1.png"],	
		["font","resources/font.png"],		
		["logo","resources/logo.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0}
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:35,tilew:20,tilerow:3,gapx:0,gapy:40},
		{id:"tiles",image:"sprites",tileh:20,tilew:20,tilerow:9,gapx:0,gapy:0},
		{id:"lsu-tiger",image:"sprites",tileh:20,tilew:20,tilerow:3,gapx:0,gapy:20},
		{id:"crimson-tide",image:"sprites",tileh:25,tilew:40,tilerow:3,gapx:0,gapy:75}
	],
	addBundle:[
		{file:"resources/bundle-stage1.js"},
		{file:"resources/bundle-stage2.js"}
	]
}
