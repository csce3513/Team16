{
	_template:"leavemealone",
	setObject:[
		{
			object:"mapmeta",
			property:"stage2",
			value:{nextLevel:"stage2boss",mapType:"normal"}
		},
		{
			object:"mapobjects",
			property:"stage2",
			value:{
				items:[
					{objecttype:"player", x:0, y:594, side:1},
					{objecttype:"crimson-tide", x:180, y:200}
				]
			}
		},
		{
			object:"tilemaps",
			property:"stage2",
			value:help.finalizeTilemap({
				tileset:"tiles",
				map:[
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[7,8,11,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[3,null,9,null,null,null,null,null,null,null,null,null,null,3,null,null],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null],
					[0,0,0,0,0,0,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0],
					[null,null,null,null,null,null,null,null,null,0,0,0,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,0,0,0,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,1,1,1,1,null,1,1,1,1,1,1,1,1,1],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[6,6,null,null,6,6,null,null,6,null,null,6,6,6,6,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,3],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,3,3,3],
					[null,null,6,6,6,6,null,null,3,3,3,3,3,3,3,3],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[6,6,6,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,4,5,4,5,4,5,4,5,4,0,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,0],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,0],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			})
		}
	]
}