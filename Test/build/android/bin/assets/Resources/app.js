// this sets the background color of the master UIView (when there are no windows/tab groups on it)
//This app is pretend to create a interface for study buddy.

Titanium.UI.setBackgroundColor('#f3cbb9');


//Create a win1, which is a homepage.
var win1 = Titanium.UI.createWindow({
	title: 'Home',
	backgroundColor:'#003333'	
});

//create a win2, which is a page that lists your friends. 
var win2 = Titanium.UI.createWindow({
	title:'Friends',
	backgroundColor: '#C0C0C0'
	
});

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

// create base UI tab and root window

//create the home tab for win1.
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Home',
    backgroundColor:'#f6d180',
    window:win1
});

//Create a view for windows1, which I will add buttons and other stuff inside.
var view1 = Titanium.UI.createView({
	layout: 'vertical',
	top: 10,
	bottom: 10,
	left: 10,
	right: 10,
	backgroundColor: '#fe6c38'
});


var label1 = Titanium.UI.createLabel({
	color:'#003333',
	text:'Start to create your study group now!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

// Create a Button that are allowed user go to another window to create a group.
var button1 = Ti.UI.createButton({
	title : 'Creat a Group',
	color: '#7a7012',
	backgroundColor:'#f2f1f2',
	font: {fontSize:30,fontFamily:'Aharoni'},
	height : 60,
	width : 'auto',
	top : 200,
	left:'500'
});

/*
// Listen for click events.
button1.addEventListener('click', function(e) {
	var newWin = Ti.UI.createWindow({
		title: 'Group',
		url:'newwin.js'
	});
	
	newWin.open({animation:true});
	
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
});



*/
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Friends',
    backgroundColor:'#f5cc70',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#fe6c38',
	text:'Find your friends!',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});



// Add to the parent view.
view1.add(button1);
view1.add(label1);


win1.add(view1);
win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();


