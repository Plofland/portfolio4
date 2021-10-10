import facepaint from 'facepaint';

export const breakpoints = {
	mobile: '750px',
	tablet: '1025px',
	desktop: '1200px'
};

export const mq = facepaint(
	Object.values(breakpoints).map(
		(bp) => `@media (min-width: ${bp})`
	)
);

export const colors = {
	forrestGreen: '#3A5953',
	midnightBlue: '#172c4a',
	ivory: '#E0DDE1',
	cyanBlue: '#3A5673',
	transCyanBlue: '#3A5673ba',
	turquoise: '#51B9CD',
	darkText: '#222222',
	lightText: '#E7FEFE',
	rockPool: '#364355'
};
