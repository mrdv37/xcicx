import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import metadata from './block.json';
import { edit } from './edit';

import './index.scss';

registerBlockType( { ...metadata }, {
	edit,
	save: () => null
} );
