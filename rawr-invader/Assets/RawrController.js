#pragma strict


class RawrController extends MonoBehaviour {
	
	
   function onNotification(event, target, data) {
      
   }
}

function Start () {
	var rawrController = RawrController();
	rawrApplication.addController(rawrController);
}

function Update () {

}