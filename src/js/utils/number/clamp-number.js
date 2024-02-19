export function clampNumber( number, min, max ) {
	return Math.min( max, Math.max( min, number ) );
}
