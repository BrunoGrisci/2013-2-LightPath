#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown("m")){
		Application.LoadLevel("menu");
}
}