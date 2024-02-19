import { useContext } from '@wordpress/element';

import { FormContext } from '../../';

export function useFormContext() {
	return useContext( FormContext );
}
