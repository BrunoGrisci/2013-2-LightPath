import UnityEngine

class mouserule (MonoBehaviour): 
	
	def Start ():
		Screen.lockCursor = true
	
	def Update ():
		if (Input.GetKeyDown ("escape")):
			Screen.lockCursor = false