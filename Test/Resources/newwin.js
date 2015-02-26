//when click button1, this window will come out.

var win = Titanium.UI.currentWindow({
	backgroundColor:'#C0C0C0'	
});

//Force the landscape to flip.
win.orientationModes =[Ti.UI.LANDSCAPE_LEFT];
