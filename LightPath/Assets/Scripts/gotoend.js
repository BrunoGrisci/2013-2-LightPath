#pragma strict

var smooth = 2.0;
var DoorOpenAngle = -90.0;
var open : boolean;
var myClip : AudioClip; 
private var defaultRot : Vector3;
private var openRot : Vector3;
var closed : boolean;

function Start(){
	defaultRot = transform.eulerAngles;
	openRot = new Vector3 (defaultRot.x, defaultRot.y + DoorOpenAngle, defaultRot.z);
	open = false;
	closed = true;
}

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "LightSource" && !open){
		//DO STUFF
		open = true;
		if (closed == true){
			closed = false;
			audio.PlayOneShot(myClip);
		}       
	}
}
	
function Update (){
	if(open){
		//Open door
		transform.eulerAngles = Vector3.Slerp(transform.eulerAngles, openRot, Time.deltaTime * smooth);
		Application.LoadLevel("room6");
	}
}