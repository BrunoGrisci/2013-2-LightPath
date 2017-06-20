import UnityEngine

class NewBehaviourScript (MonoBehaviour): 
	lighton = false

	def Start ():
		lighton = true
		Screen.lockCursor = true
	
	def Update ():
#		if(Input.GetMouseButtonDown(1)):
#			lighton = not lighton
#			if lighton:
#				light.intensity = 0.51
#				Screen.lockCursor = true
#			else:
#				light.intensity = 0.0
#				Screen.lockCursor = false
		if lighton:
			if (Random.Range(0, 100) < 10):
				light.intensity = light.intensity + (Random.Range(-10, 10)/10)
			if (light.intensity < 1.0):
			    light.intensity = 1.0
			else:
				if (light.intensity > 2):
				    light.intensity = 2			    
		if (Input.GetKeyDown ("escape")):
			Screen.lockCursor = false
			