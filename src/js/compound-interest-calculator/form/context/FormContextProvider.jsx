import { FormContext } from '../../';

export function FormContextProvider( { form, children } ) {
	return (
		<FormContext.Provider value={ { form } }>
			{ children }
		</FormContext.Provider>
	);
}
