export function formatToUnitSymbol( number ) {
	return new Intl.NumberFormat( "fr-FR", {
		notation: "compact",
		compactDisplay: "short",
		maximumFractionDigits: 0
	}).format( number );
}
