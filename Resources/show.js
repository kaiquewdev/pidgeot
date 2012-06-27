var currentWindow = Ti.UI.currentWindow;

var win = Ti.UI.createWindow({
	title: currentWindow.title,
	institucional: currentWindow.institucional,
});

var profile = {};
	
	profile.title = Ti.UI.createLabel({
		text: win.institucional.titulo,
		top: '5%',
	});
	win.add( profile.title );
	
	profile.img = Ti.UI.createImageView({
		image: win.institucional.foto,
		top: '10%',
		width: '100%',
		height: '25%',
	});
	win.add( profile.img );
	
	profile.description = Ti.UI.createLabel({
		text: win.institucional.texto,
		top: '35%',
		width: '95%',
		height: '40%',
		font: {
			fontSize: 14
		}
	});
	win.add( profile.description );
	
	profile.goBack = Ti.UI.createButton({
		title: 'Voltar',
		path: 'app.js',
		bottom: '5%',
	});
	win.add( profile.goBack );
	
	profile.goBack.addEventListener('click', function ( e ) {
		var newWindow = Ti.UI.createWindow({
			url: e.source.path,
		});
		
		win.close();
		newWindow.open();
	});

currentWindow.hide();
win.open();
	
