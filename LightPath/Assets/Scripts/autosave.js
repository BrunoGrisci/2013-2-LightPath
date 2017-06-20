import System;
import System.IO;

var level : String;

function OnTriggerEnter (myTrigger : Collider) {
	if(myTrigger.gameObject.tag == "Player"){
		//DO STUFF
		//grava cena em que o jogador se encontra em um arquivo txt
		//Escrita dos pesos atualizados em um arquivo texto (apenas para debugar)
		PlayerPrefs.SetString("lastlevel", level);
	}	
}