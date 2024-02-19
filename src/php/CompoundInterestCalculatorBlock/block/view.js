import { default as domReady } from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

import { AttributesContextProvider } from '../../../js/block';
import { CompoundInterestCalculator } from '../../../js/compound-interest-calculator';

domReady( () => {
	const roots = [ ...document.querySelectorAll( '.wp-block-xcicx-compound-interest-calculator' ) ];
	roots.map( root => {
		const attributes = JSON.parse( root.getAttribute( 'data-wp-block-attributes' ) );
		createRoot( root ).render(
			<React.StrictMode>
				<AttributesContextProvider { ...{ attributes } }>
					<CompoundInterestCalculator/>
				</AttributesContextProvider>
			</React.StrictMode>
		);
	} );
} );
