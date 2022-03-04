export class IndexedDB {
  constructor(dbName, dbVersion) {
    return new Promise((resolve, reject) => {
      const storeName = 'messages';

      this.db = null;
      this.dbName = dbName;
      this.dbVersion = dbVersion;
      this.storeName = storeName;
      this.indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB;

      if (!('indexedDB' in window)) reject('not supported');

      const dbOpen = indexedDB.open(dbName, dbVersion);

      dbOpen.onupgradeneeded = () => {
        this.db = dbOpen.result;
        if (!this.db.objectStoreNames.contains(this.storeName)) {
          this.db.createObjectStore(this.storeName, { keyPath: 'created' });
        }
      };

      dbOpen.onsuccess = () => {
        this.db = dbOpen.result;
        resolve(this);
      };

      dbOpen.onerror = e => {
        reject(`IndexedDB error: ${e.target.errorCode}`);
      };
    });
  }

  set(value) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);

      store.put(value);

      transaction.oncomplete = () => {
        resolve(true);
        this.db.close();
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  }

  delete(value) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);

      store.delete(value);

      transaction.oncomplete = () => {
        resolve(true);
        this.db.close();
      };

      transaction.onerror = () => {
        reject(transaction.error);
      };
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}
