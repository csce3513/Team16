{
	_template:"leavemealone",
	setObject:[
		{
			object:"mapmeta",
			property:"stage1boss",
			value:{nextLevel:"stage2",mapType:"boss"}
		},
		{
			object:"mapobjects",
			property:"stage1boss",
			value:{
				items:[
					{objecttype:"player", x:0, y:240, side:1},
					{objecttype:"tiger-boss", x:280, y:180}
				]
			}
		},
		{
			object:"tilemaps",
			property:"stage1boss",
			value:help.finalizeTilemap({
				tileset:"tiles",
				map:[
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,2,2,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,2,2,null,null,null,null,null,null,2,2,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,6,6,6,6],
					[null,null,null,null,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,1,1,1],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			})
		}
	]
}