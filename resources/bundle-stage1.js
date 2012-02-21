{
	_template:"leavemealone",
	setObject:[
		{
			object:"mapmeta",
			property:"stage1",
			value:{}
		},
		{
			object:"mapobjects",
			property:"stage1",
			value:{
				items:[
					{objecttype:"player", x:40, y:180, side:1},
					{objecttype:"tiger", x:80, y:40, side:0},
					{objecttype:"tiger", x:210, y:20, side:0},
					{objecttype:"tiger", x:360, y:20, side:0},
					{objecttype:"tiger", x:460, y:20, side:0},
					{objecttype:"tiger", x:600, y:10, side:0},
					{objecttype:"tiger", x:700, y:10, side:0},
					{objecttype:"tiger", x:900, y:10, side:0}
				]
			}
		},
		{
			object:"tilemaps",
			property:"stage1",
			value:help.finalizeTilemap({
				tileset:"tiles",
map:[
					[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
					[3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,4,3,4,null,null,null,null,null,null,null,null,5,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null],
					[3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,3,4,4,4,4,null,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,null,null,null,null,null],
					[3,null,null,null,null,null,null,null,null,null,null,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,5,5,null,null,null,3,1,3,null,null,null,null,null,null,1,null,1,null,null,6,5,4,5,4,3,3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,null,5,null,3,3,null,null],
					[3,4,null,null,4,5,4,5,null,null,null,4,4,null,null,null,null,null,null,null,null,null,6,6,null,null,6,null,null,null,null,null,null,1,null,1,null,null,null,null,3,null,1,null,1,null,null,null,6,6,6,6,4,4,null,null,null,null,3,5,null,null,null,null,null,null,null,3,null,null,3,null,5,null,null,4,null,null],
					[3,4,null,null,null,null,null,5,null,null,null,null,4,null,3,null,null,null,null,null,6,null,null,5,6,null,5,null,null,null,null,null,null,1,null,1,null,null,null,null,null,null,1,1,1,1,null,null,6,6,null,3,3,4,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,3,null,5,null,null,4,null,null],
					[3,null,null,4,null,null,null,5,4,null,null,null,5,null,null,null,null,null,null,null,null,null,null,5,null,null,5,null,null,null,null,3,null,1,1,1,null,1,1,1,null,null,1,null,null,1,6,null,null,6,null,4,4,4,null,3,null,null,null,2,null,null,null,2,2,2,null,null,2,null,2,null,null,3,null,3,null,null],
					[3,null,null,null,null,null,3,4,null,null,null,null,5,null,null,null,6,null,null,6,null,null,5,5,null,null,5,null,null,3,null,1,null,1,null,1,null,1,null,1,null,null,1,null,null,1,null,null,null,6,null,null,null,null,null,null,null,null,null,2,null,null,null,2,null,null,null,2,2,null,2,null,5,null,null,3,null,null],
					[3,null,null,null,4,null,5,4,5,null,null,4,4,4,null,null,null,null,null,null,null,null,5,null,5,5,5,null,null,1,null,1,6,3,6,1,3,1,1,1,1,null,1,null,null,1,null,null,null,6,null,null,null,null,5,null,null,null,3,2,3,null,null,2,2,2,3,null,2,null,2,null,5,null,null,null,null,null],
					[3,3,null,null,null,null,null,null,null,null,null,3,5,3,null,null,null,null,null,null,null,null,null,null,null,6,5,null,5,1,6,1,null,null,null,null,null,1,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,2,null,null,null,null,null,2,null,null,2,null,2,null,null,null,5,null,null,null],
					[3,null,null,null,null,null,null,null,null,null,3,3,5,3,3,null,null,null,null,null,null,null,null,5,null,5,5,null,null,1,1,1,null,null,null,null,null,1,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,3,null,null,2,2,2,null,2,2,2,null,null,2,2,2,null,null,null,5,null,null,3],
					[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
				]
			})
		}
	]
}