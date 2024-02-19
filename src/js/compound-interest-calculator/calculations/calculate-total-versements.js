export function calculateTotalVersements( defaults, overrides = {} ) {
	const data = { ...defaults, ...overrides };

	return data.versementInitial + ( ( data.versementsReguliers * 12 ) * data.duree );
}
