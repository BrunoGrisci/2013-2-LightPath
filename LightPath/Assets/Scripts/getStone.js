#pragma strict
		
var stone : GameObject;
var counter : int;
		
function Start(){
	counter = 0;
}

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "breaker"){
		//DO STUFF
		counter = counter + 1;
		audio.Play();
		if (counter == 9){
			stone.transform.position = Vector3(myTrigger.gameObject.transform.position.x, myTrigger.gameObject.transform.position.y, myTrigger.gameObject.transform.position.z);
			stone.audio.Play();
		}
	}
}