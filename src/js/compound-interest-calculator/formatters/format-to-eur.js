export function formatToEur( number ) {
	return new Intl.NumberFormat( "fr-FR", {
		notation: "standard",
		style: "currency",
		currencyDisplay: "narrowSymbol",
		currency: "EUR",
		maximumFractionDigits: 0
	}).format( number );
}
