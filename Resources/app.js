Ti.UI.setBackgroundColor('#fff');

var win = Ti.UI.createWindow();

var archive = {};
	archive['blob'] = Ti.Filesystem.getFile( Ti.Filesystem.resourcesDirectory, 'static/content/institucional.json' );
	archive['blob'] = archive.blob.read();
	archive['json'] = JSON.parse( 
		archive.blob.toString().replace(/\n/gi, '').replace(/\t/gi, '') 
	);

var institucional = archive['json']['institucional'].map( function ( item ) {
	return {
		title: item['titulo'],
		hasChild: true,
		path: 'show.js',
		institucional: item
	};
});
Ti.API.info( institucional );

var tableView = Ti.UI.createTableView({
	data: institucional
});
win.add( tableView );

tableView.addEventListener('touchend', function ( row ) {
	var newWindow = Ti.UI.createWindow({
		title: row.source.title,
		url: row.source.path,
		institucional: row.source.institucional,
	});
	win.close();
	newWindow.open();
});

if ( Ti.UI.currentWindow !== undefined ) {
	Ti.UI.currentWindow.hide();
}

win.open();
