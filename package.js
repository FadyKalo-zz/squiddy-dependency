Package.describe({
	summary: "Meteorite package containing third party libraries required by Squiddy app."
});

Package.on_use(function (api, where) {
	api.use('', 'client');
	/* TODO */
	api.add_files(['TODO' ], 'client');
});