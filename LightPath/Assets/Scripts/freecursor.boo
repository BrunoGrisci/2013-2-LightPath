import UnityEngine

class freecursor (MonoBehaviour): 
	
	def Start ():
		Screen.lockCursor = false
		Screen.showCursor = true
	
	def Update ():
		if (Input.GetKeyDown ("escape")):
			Screen.lockCursor = false
