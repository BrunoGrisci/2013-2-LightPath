#pragma strict
//Main Menu Script

function Start () {

}

function Update () {

}

function OnGUI (){
	//Main Box
		
	if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) +150,100,30),"Back"))
	{
		Application.LoadLevel("menu");
	}
	
	//Load any saved game level
	//if(GUI.Button(Rect((Screen.width/2) -45,(Screen.height/2) -40,100,30),"Continue game"))
	//{
		//switch(SavedLevel)
		//...
	//}
			
}