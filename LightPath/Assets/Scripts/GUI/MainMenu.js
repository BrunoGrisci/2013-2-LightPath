#pragma strict
//Main Menu Script

function Start () {

}

function Update () {

}

function OnGUI (){
	//Main Box
	GUI.Box(Rect((Screen.width/2)-140,(Screen.height/2)-150,300,350),"");
		//GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -90,100,30),"Start game");
		//GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -40,100,30),"Continue game");
		//GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +10,100,30),"How to play");
		//GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +60,100,30),"Credits");
		//GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +110,100,30),"Exit");
		
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -90,100,30),"Start game"))
	{
		Application.LoadLevel("intro");
	}
	
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +60,100,30),"Credits"))
	{
		Application.LoadLevel("about");
	}
	
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +110,100,30),"Exit"))
	{
		Application.Quit();
	}
	
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +10,100,30),"How to play"))
	{
		Application.LoadLevel("howtoplay");
	}
	
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -40,100,30),"Continue game"))
	{
		Application.LoadLevel(PlayerPrefs.GetString("lastlevel"));
	}
	
	//Load any saved game level
	//if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -40,100,30),"Continue game"))
	//{
		//switch(SavedLevel)
		//...
	//}
			
}