const DB_NAME = 'timetableDB';
const DB_VERSION = 1;
let DB;

export default {

	async getDb() {
		return new Promise((resolve, reject) => {

			if(DB) { return resolve(DB); }
			console.log('OPENING DB', DB);
			let request = window.indexedDB.open(DB_NAME, DB_VERSION);
			
			request.onerror = e => {
				console.log('Error opening db', e);
				reject('Error');
			};
	
			request.onsuccess = e => {
				DB = e.target.result;
				resolve(DB);
			};
			
			request.onupgradeneeded = e => {
				console.log('onupgradeneeded');
				let db = e.target.result;
				db.createObjectStore("timetable");
			};
		});
	},
	async deleteTimetable() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['timetable'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('timetable');
			store.delete(1);
		});	
	},
	async getTimetable() {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['timetable'],'readonly');
			
			let store = trans.objectStore('timetable');
			let timetable = store.get(1);
			
			trans.oncomplete = () => {
				resolve(timetable);
			};
		});
	},

	async saveTimetable(timetable) {

		let db = await this.getDb();

		return new Promise(resolve => {

			let trans = db.transaction(['timetable'],'readwrite');
			trans.oncomplete = () => {
				resolve();
			};

			let store = trans.objectStore('timetable');
			store.put(timetable,1);

		});
	
	}

}