import { __experimentalNumberControl as NumberControl, PanelRow } from '@wordpress/components';

import { useAttributesContext } from '../';

export function NumberOption( { name, ...rest } ) {
	const { attributes, setAttributes } = useAttributesContext();

	return (
		<PanelRow>
			<NumberControl
				value={ attributes[ name ] }
				onChange={ value => setAttributes( { [ name ]: value } ) }
				{ ...rest }
			/>
		</PanelRow>
	);
}
