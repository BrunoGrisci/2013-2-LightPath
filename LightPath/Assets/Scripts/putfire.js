#pragma strict

var lightGameObject : GameObject = new GameObject("The Light");
// Add the light component
lightGameObject.AddComponent(Light);
// Set color and position
lightGameObject.light.color = Color.yellow;
		// Set the position (or any transform property) after
		// adding the light component.
		
//var graveto : GameObject;

var fogo : ParticleSystem = new ParticleSystem();
		
function Start(){
	lightGameObject.light.enabled = false;
	fogo.enableEmission = false;
}

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "inflammable"){
		//DO STUFF
		myTrigger.gameObject.tag = "LightSource";
		// Make a game object	
		lightGameObject.light.enabled = true;
		lightGameObject.transform.position =Vector3(myTrigger.gameObject.transform.position.x, myTrigger.gameObject.transform.position.y, myTrigger.gameObject.transform.position.z);
		fogo.enableEmission = true;      
	}
	if(myTrigger.gameObject.tag == "Player"){
		//DO STUFF
		audio.Play();
		}
	if(myTrigger.gameObject.tag == "breaker"){
		//DO STUFF
			myTrigger.gameObject.audio.Play();
		}
		

}
	
function Update (){
	var graveto = GameObject.FindGameObjectsWithTag("LightSource")[GameObject.FindGameObjectsWithTag("LightSource").length-1];
	if (lightGameObject.light.enabled == true){
		lightGameObject.transform.position =Vector3(graveto.transform.position.x, graveto.transform.position.y, graveto.transform.position.z);
		fogo.transform.position = Vector3(graveto.transform.position.x, graveto.transform.position.y, graveto.transform.position.z);
		
	}
	}
	
//function OnGUI(){
//	if(open){
//		GUI.Label(new Rect(Screen.width/2 - 75, Screen.height - 100, 150, 30), "RECONHECENDO A LUZ");
//	}
//}