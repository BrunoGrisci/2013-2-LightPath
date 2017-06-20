#pragma strict

var Spotlight : GameObject = new GameObject("The Light");
var point : GameObject = new GameObject("The Light");
var contact : GameObject;
var value : int;
var fred : boolean;
var fblue : boolean;
var fgreen: boolean;

function Start(){
	contact.active = false;
	//Spotlight.active = false;
	Spotlight.light.intensity = 0;
	point.light.intensity = 0;
	active = true;
	fred = true;
	fblue = true;
	fgreen = true;
	
}

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "prelightred" && fred == true){
		//DO STUFF
		fred = false;
		audio.Play();
		if (fred == false && fgreen == false && fblue == false){
			Spotlight.active = true;
			Spotlight.light.intensity = 8;
			point.light.intensity = 0.32;
			contact.active = true;
			yield WaitForSeconds(1);
			contact.active = false;
			value = 666;
		}   }    
	if(myTrigger.gameObject.tag == "prelightblue" && fblue == true){
		//DO STUFF
		fblue = false;
		audio.Play();
		if (fred == false && fgreen == false && fblue == false){
			Spotlight.active = true;
			Spotlight.light.intensity = 8;
			point.light.intensity = 0.32;
			contact.active = true;
			yield WaitForSeconds(1);
			contact.active = false;
			value = 666;
		}}  
	if(myTrigger.gameObject.tag == "prelightgreen" && fgreen == true){
		//DO STUFF
		fgreen = false;
		audio.Play();
		if (fred == false && fgreen == false && fblue == false){
			Spotlight.active = true;
			Spotlight.light.intensity = 8;
			point.light.intensity = 0.32;
			contact.active = true;
			yield WaitForSeconds(1);
			contact.active = false;
			value = 666;
		}  }
	}
	

	