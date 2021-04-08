import joplin from 'api';

joplin.plugins.register({
	onStart: async function() {
		console.info('Task Helper plugin started!');
	},
});
