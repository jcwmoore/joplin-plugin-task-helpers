import joplin from 'api';
import { MenuItemLocation, ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		console.log('Task Helper plugin started!');

		
		await joplin.commands.register({
			name: 'taskHelper',
			label: 'Cleanup Todos',
			iconName: 'fas fa-archive',
			execute: async function () {
				const notes = [];
				var results = await joplin.data.get(['search'], {
					 query:'iscompleted:1' 
					});
				for (const note of results.items) {
					//alert(JSON.stringify(note.id));
					notes.push(note);
				}
				const noteTitles = notes.map((note:any) => note.title);
				alert('The following notes will be processed:\n\n' + noteTitles.join(', '));
			}
		});

		await joplin.views.menuItems.create('Clear Todos', 'taskHelper', MenuItemLocation.Tools, { accelerator: 'CmdOrCtrl+Shift+C' });

	},
});
