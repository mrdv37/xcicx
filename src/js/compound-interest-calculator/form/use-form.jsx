import { useForm as useMantineForm } from '@mantine/form';

import { useAttributesContext } from '../../block';

export function useForm() {
	const { attributes } = useAttributesContext();
	const form = useMantineForm( {
		initialValues: {
			versementInitial: attributes.xcicxVersementInitialInitialValue,
			versementsReguliers: attributes.xcicxVersementsReguliersInitialValue,
			rendementPrevisionnel: attributes.xcicxRendementPrevisionnelInitialValue,
			duree: attributes.xcicxDureeInitialValue
		}
	} );
	return { form };
};
