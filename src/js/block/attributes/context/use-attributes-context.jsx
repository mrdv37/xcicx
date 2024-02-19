import { useContext } from '@wordpress/element';

import { AttributesContext } from '../../';

export function useAttributesContext() {
	return useContext( AttributesContext );
}
