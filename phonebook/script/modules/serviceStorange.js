
// функционал работы с localStorage и sessionStorage
export const getStorage = (key) => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : [];
};

export const setStorage = (key, obj) => {
	const data = getStorage(key);
	data.push(obj);
	localStorage.setItem(key, JSON.stringify(data));
};

export const removeStorage = (key, phone) => {
	const data = getStorage(key);
	const newData = data.filter((contact) => contact.phone !== phone);
	localStorage.setItem(key, JSON.stringify(newData));
};

