var currentWindow = Ti.UI.currentWindow;

var profile = {};
	
	profile.title = Ti.UI.createLabel({
		text: currentWindow.institucional.titulo,
		top: '5%',
	});
	currentWindow.add( profile.title );
	
	profile.img = Ti.UI.createImageView({
		image: currentWindow.institucional.foto,
		top: '10%',
		width: '100%',
		height: '25%',
	});
	currentWindow.add( profile.img );
	
	profile.description = Ti.UI.createLabel({
		text: currentWindow.institucional.texto,
		top: '35%',
		width: '95%',
		height: '40%',
		font: {
			fontSize: 14
		}
	});
	currentWindow.add( profile.description );
	
	profile.goBack = Ti.UI.createButton({
		title: 'Voltar',
		path: 'app.js',
		top: '50%',
	});
	currentWindow.add( profile.goBack );
	
	profile.goBack.addEventListener('click', function ( e ) {
		var newWindow = Ti.UI.createWindow({
			url: e.source.path,
		});
		
		newWindow.open();
	});
	
