function show(url) {
  startCopperLichtFromFile('3darea', url, 'Loading $PROGRESS$...', 'Error: This browser does not support WebGL (or it is disabled).<br/>See <a href=\"http://www.ambiera.com/copperlicht/browsersupport.html\">here</a> for details.');	
}

function execute() {
  ccbSetCopperCubeVariable("execute",1);
}

function mute() {
  ccbSetCopperCubeVariable("mute",0);
}
mute();