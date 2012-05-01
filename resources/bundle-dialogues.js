{
	setObject:[
		{
			object:"dialogues",
			property:"intro",
			value:{
		  		font:"big",
		  		skipkey:"a",
		  		esckey:"b",
		  		who:{
		  			narrator:{
		  				x:10,
		  				y:150
		  			}
		  		},
		  		scenes:[
		  			{
		  				slide:{
		  					image:"intro1",
		  					x:0,
		  					y:40
		  				},
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"           Arkansas Rumble         ",
		  					"            TUTORIAL TIME!         ",
		  					"         Press Z to continue.      "
		  				]
		  			},
		  			{
		  				slide:{
		  					image:"intro2",
		  					x:0,
		  					y:40
		  				},
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
							"     If you are using a browser:    ",
							"          Z = jump/continue         ",
							"      If are you using a phone:     ",
							"          A = jump/continue         " 
		  				]
		  			},
		  			{
		  				slide:{
		  					image:"intro3",
		  					x:0,
		  					y:40
		  				},
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"     Use the arrow keys to move.    ",
		  					"",
		  					"             Let's begin!           "
		  				]
		  			},
		  		]
		  	}
		  },
		  {
		  	object:"dialogues",
		  	property:"ending",
		  	value:{
		  		font:"big",
		  		skipkey:"a",
		  		esckey:"b",
		  		who:{
		  			narrator:{
		  				x:10,
		  				y:150
		  			}
		  		},
		  		scenes:[
		  			{
		  				slide:{
		  					image:"ending1",
		  					x:0,
		  					y:40
		  				},
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"\"Well done!\" Jin said. \"Now I can",
		  					"go back to my thoughts!\" And he left",
		  					"behind a big pile of sad violet",
		  					"squids."
		  				]
		  			},
		  			{
		  				slide:{
		  					image:"intro1",
		  					x:0,
		  					y:40
		  				},
		  				speed:1,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"\"My life is very very sad\" said.",
		  					"\"And I feel really lonely here\"."
		  				]
		  			},
		  			{
		  				slide:{
		  					image:"intro1",
		  					x:0,
		  					y:40
		  				},
		  				speed:2,
		  				who:"narrator",
		  				audio:"beep",
		  				talk:[
		  					"\"I will ever have a friend?\""
		  				]
		  			},
		  			{
		  				font:"small",
		  				speed:2,
		  				spacing:2,
		  				push:gbox.getScreenHH(),
		  				audiomusic:"ending",
		  				scroller:[
		  					"LEAVE ME ALONE",
		  					"A SHORT GAME BY KESIEV",
		  					"","","",
		  					"JS-CODE BY",
		  					"KESIEV",
		  					"","",
		  					"GRAPHICS BY",
		  					"KESIEV",
		  					"","",
		  					"STORY BY",
		  					"KESIEV",
		  					"","",
		  					"SOUND EFFECTS",
		  					"CREATED USING",
		  					"CFXR",
		  					"THIRDCOG.EU/APPS/CFXR",
		  					"","",
		  					"MUSIC",
							"",
		  					"NIGHT FALLS ON THE BOARDWALK",
		  					"BY GREENLEO (c)2010",
		  					"GREENLEO.BANDCAMP.COM",
		  					"",
		  					"FOAMY PIXEL WAVE",
		  					"BY GREENLEO (c)2010",
		  					"GREENLEO.BANDCAMP.COM",
		  					"",
		  					"A DREAM OF THE SEA",
		  					"BY SMILETRON (c)2009",
		  					"8BITCOLLECTIVE.COM/MEMBERS/SMILETRON",
		  					"","","",		  					
		  					"CREATED USING THE AKIHABARA ENGINE",
		  					"BY KESIEV (c)2010",
		  					"WWW.KESIEV.COM",
							"","","","","","","","","","","",
							"THANK YOU FOR PLAYING!",
							"NEVER FORGET WHO LOVES YOU.",
							"",
							"THE END"

		  				]
		  			}
		  		]
		  	}
		}
	]
}