import {
	BaseControl,
	ColorPalette,
	PanelRow,
	useBaseControlProps
} from '@wordpress/components';

import { useAttributesContext } from '../';

export function ColorOption( { name, ...baseProps } ) {
	const { attributes, setAttributes } = useAttributesContext();
	const { baseControlProps, controlProps } = useBaseControlProps( baseProps );

	return (
		<PanelRow>
			<BaseControl { ...baseControlProps } __nextHasNoMarginBottom>
				<ColorPalette
					value={ attributes[ name ] }
					onChange={ value => setAttributes( { [ name ]: value } ) }
					{ ...controlProps }
				/>
			</BaseControl>
		</PanelRow>
	);
}
