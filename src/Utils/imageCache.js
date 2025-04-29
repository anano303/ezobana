const DB_NAME = 'ImageCache';
const STORE_NAME = 'images';
const DB_VERSION = 1;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
};

export const cacheImage = async (src) => {
  try {
    const db = await openDB();
    
    // Check if image exists in cache
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const existing = await new Promise(resolve => {
      const request = store.get(src);
      request.onsuccess = () => resolve(request.result);
    });

    if (existing) {
      return URL.createObjectURL(existing);
    }

    // Fetch and cache new image
    const response = await fetch(src);
    const blob = await response.blob();
    
    const writeTx = db.transaction(STORE_NAME, 'readwrite');
    const writeStore = writeTx.objectStore(STORE_NAME);
    writeStore.put(blob, src);
    
    return URL.createObjectURL(blob);
  } catch (error) {
    console.warn('Caching failed:', error);
    return src;
  }
};

export const getCachedImage = async (src) => {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    
    const blob = await new Promise(resolve => {
      const request = store.get(src);
      request.onsuccess = () => resolve(request.result);
    });

    return blob ? URL.createObjectURL(blob) : src;
  } catch (error) {
    console.warn('Cache retrieval failed:', error);
    return src;
  }
};
