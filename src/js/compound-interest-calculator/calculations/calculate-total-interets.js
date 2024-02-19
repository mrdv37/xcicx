import { calculateTotalMontant, calculateTotalVersements} from '../';

export function calculateTotalInterets( ...rest ) {
	return calculateTotalMontant( ...rest ) - calculateTotalVersements( ...rest );
}
