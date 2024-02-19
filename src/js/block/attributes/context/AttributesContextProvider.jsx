import { AttributesContext } from '../../';

export function AttributesContextProvider( { attributes, setAttributes = null, children } ) {
	return (
		<AttributesContext.Provider value={ { attributes, setAttributes } }>
			{ children }
		</AttributesContext.Provider>
	);
}
