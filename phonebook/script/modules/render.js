import {
	createHeader, createLogo, createMain, renderFooter, createButtonsGroup,
	createTable, creatForm, createRow
} from "./createElements.js";



export const renderPhoneBook = (app, title) => {
	const header = createHeader();
	const logo = createLogo(title);
	const main = createMain();
	const footer = renderFooter();
	const buttonGroup = createButtonsGroup([
		{
			className: 'btn btn-primary mr-3',
			type: 'button',
			text: 'Добавить',
		},
		{
			className: 'btn btn-danger',
			type: 'button',
			text: 'Удалить',
		},
	]);
	const table = createTable();
	const { form, overlay } = creatForm();

	header.headerContainer.append(logo);
	main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
	app.append(header, main, footer);

	return {
		list: table.tbody,
		logo,
		btnAdd: buttonGroup.btns[0],
		btnDel: buttonGroup.btns[1],
		formOverlay: overlay,
		form,
	}
};


export const renderContacts = (elem, data) => {
	const allRow = data.data.map(createRow);
	elem.append(...allRow);
	return allRow;
};