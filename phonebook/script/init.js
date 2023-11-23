import { createRow } from "./modules/createElements.js";
import * as data from "./modules/data.js";
import { renderPhoneBook, renderContacts, } from "./modules/render.js";
import { getStorage } from "./modules/serviceStorange.js";

{
	const init = (selectorApp, title) => {
		const app = document.querySelector(selectorApp);
		const {
			list,
			logo,
			btnAdd,
			formOverlay,
			form,
			btnDel,
		} = renderPhoneBook(app, title);
		// Функционал

		const allRow = renderContacts(list, data, getStorage('contacts'));
		const { closeModal } = modalControl(btnAdd, formOverlay);

		hoverRow(allRow, logo);
		deleteControl(btnDel, list);
		formControl(form, list, closeModal);

		setTimeout(() => {
			const contact = createRow({
				name: 'Антон',
				surname: 'Кузнецов',
				phone: '0004',
			});
			list.append(contact)
		}, 2000)
	};
	window.phoneBookInit = init;
}