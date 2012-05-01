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
		  					"           Congratulations!         "
		  				]
		  			},
		  			{
		  				font:"small",
		  				speed:2,
		  				spacing:2,
		  				push:gbox.getScreenHH(),
		  				audiomusic:"beep",
		  				scroller:[
		  					"Arkansas Rumble",
		  					"An Awesome Game",
		  					"","",
		  					"BY",
		  					"Team 16",
		  					"","",
		  					"Jeremy Hornberger",
		  					"David Medina",
		  					"Kevin Gunn",
		  					"Araceli Yanez",
							"","",
							"THE END"

		  				]
		  			}
		  		]
		  	}
		}
	]
}