defineDescribe('Basic Theme', ['./Basic'], (BasicTheme) => {
	'use strict';

	const theme = new BasicTheme();

	it('has a name', () => {
		expect(theme.name).toEqual('basic');
	});

	it('contains settings for the theme', () => {
		expect(theme.outerMargin).toEqual(5);
	});
});
