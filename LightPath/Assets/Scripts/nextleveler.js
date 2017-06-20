#pragma strict

var room : String;

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "Player"){
		//DO STUFF
		Application.LoadLevel(room);;       
	}
}