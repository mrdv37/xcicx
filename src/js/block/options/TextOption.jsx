import { PanelRow, TextControl } from '@wordpress/components';

import { useAttributesContext } from '../';

export function TextOption( { name, ...rest } ) {
	const { attributes, setAttributes } = useAttributesContext();

	return (
		<PanelRow>
			<TextControl
				value={ attributes[ name ] }
				onChange={ value => setAttributes( { [ name ]: value } ) }
				{ ...rest }
			/>
		</PanelRow>
	);
}
