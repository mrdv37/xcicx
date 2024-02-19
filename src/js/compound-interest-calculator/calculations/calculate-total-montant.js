export function calculateTotalMontant( defaults, overrides = {} ) {
	const data = { ...defaults, ...overrides };

	const total = ( () => {
		let total = data.versementInitial;
		for ( let i = 1; i <= data.duree; i++ ) {
			total = ( total + ( data.versementsReguliers * 12 ) ) * ( data.rendementPrevisionnel / 100 + 1 );
		}
		return total;
	} )();

	return total;
}
