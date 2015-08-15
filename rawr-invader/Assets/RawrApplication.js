#pragma strict


class RawrApplication extends MonoBehaviour {
	var model;
	var view;
	var controller_list = new Array();
	
	
   function notify(event, target, data) {
      for (var c:RawrController in controller_list) {
         c.onNotification(event, target, data);
      }
   }
   
   function addController(controller) {
		controller_list.push(controller);
   }

}

var rawrApplication;
function Start () {
	rawrApplication = RawrApplication();
}

function Update () {

}


