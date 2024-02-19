import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	AttributesContextProvider,
	ColorOption,
	NumberOption,
	TextOption
} from '../../../js/block';

export function edit( { attributes, isSelected, setAttributes } ) {
	return (
		<div { ...useBlockProps( {
			className: "xcicx-css-scope"
		} ) }>
			<div className="xcicx-compound-interest-calculator">
				{ attributes.xcicxTitle }
				<InspectorControls>
					<AttributesContextProvider { ...{ attributes } } { ...{ setAttributes } }>
						<PanelBody title={ __( 'General', 'xcicx' ) } >
							<TextOption name="xcicxTitle" label={ __( 'Title', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Versement initial', 'xcicx' ) } >
							<TextOption name="xcicxVersementInitialLabel" label={ __( 'Label', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementInitialInitialValue" label={ __( 'Initial Value', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementInitialMin" label={ __( 'Min', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementInitialMax" label={ __( 'Max', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementInitialStep" label={ __( 'Step', 'xcicx' ) }/>
							<ColorOption name="xcicxVersementInitialColor" label={ __( 'Color', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Versements réguliers', 'xcicx' ) } >
							<TextOption name="xcicxVersementsReguliersLabel" label={ __( 'Label', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementsReguliersInitialValue" label={ __( 'Initial Value', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementsReguliersMin" label={ __( 'Min', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementsReguliersMax" label={ __( 'Max', 'xcicx' ) }/>
							<NumberOption name="xcicxVersementsReguliersStep" label={ __( 'Step', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Rendement prévisionnel', 'xcicx' ) } >
							<TextOption name="xcicxRendementPrevisionnelLabel" label={ __( 'Label', 'xcicx' ) }/>
							<NumberOption name="xcicxRendementPrevisionnelInitialValue" label={ __( 'Initial Value', 'xcicx' ) }/>
							<NumberOption name="xcicxRendementPrevisionnelMin" label={ __( 'Min', 'xcicx' ) }/>
							<NumberOption name="xcicxRendementPrevisionnelMax" label={ __( 'Max', 'xcicx' ) }/>
							<NumberOption name="xcicxRendementPrevisionnelStep" label={ __( 'Step', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Durée', 'xcicx' ) } >
							<TextOption name="xcicxDureeLabel" label={ __( 'Label', 'xcicx' ) }/>
							<NumberOption name="xcicxDureeInitialValue" label={ __( 'Initial Value', 'xcicx' ) }/>
							<NumberOption name="xcicxDureeMin" label={ __( 'Min', 'xcicx' ) }/>
							<NumberOption name="xcicxDureeMax" label={ __( 'Max', 'xcicx' ) }/>
							<NumberOption name="xcicxDureeStep" label={ __( 'Step', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Total versements', 'xcicx' ) } >
							<TextOption name="xcicxTotalVersementsLabel" label={ __( 'Label', 'xcicx' ) }/>
							<ColorOption name="xcicxTotalVersementsColor" label={ __( 'Color', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Total intérêts', 'xcicx' ) } >
							<TextOption name="xcicxTotalInteretsLabel" label={ __( 'Label', 'xcicx' ) }/>
							<ColorOption name="xcicxTotalInteretsColor" label={ __( 'Color', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Total montant', 'xcicx' ) } >
							<TextOption name="xcicxTotalMontantLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Année', 'xcicx' ) } >
							<TextOption name="xcicxAnneeLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Intérêts', 'xcicx' ) } >
							<TextOption name="xcicxInteretsLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Montant avant intérets', 'xcicx' ) } >
							<TextOption name="xcicxMontantAvantInteretsLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Montant après intérêts', 'xcicx' ) } >
							<TextOption name="xcicxMontantApresInteretsLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
						<PanelBody title={ __( 'Ans', 'xcicx' ) } >
							<TextOption name="xcicxAnsLabel" label={ __( 'Label', 'xcicx' ) }/>
						</PanelBody>
					</AttributesContextProvider>
				</InspectorControls>
			</div>
		</div>
	);
}
