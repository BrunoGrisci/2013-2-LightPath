#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown("w")){
		audio.Play();
	}
	if(Input.GetKeyDown("s")){
		audio.Play();
	}
	if(Input.GetKeyDown("d")){
		audio.Play();
	}
	if(Input.GetKeyDown("a")){
		audio.Play();
	}
	audio.Stop();
}