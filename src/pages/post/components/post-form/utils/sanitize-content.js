export const sanitizeContent = (content) =>
	content
		.replaceAll('&nbsp', '')
		.replace(/ +/g, ' ')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '')
		.replaceAll('<br>', '')
		.replaceAll(';', '');
