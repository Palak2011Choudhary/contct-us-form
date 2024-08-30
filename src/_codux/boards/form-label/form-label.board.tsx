import { createBoard } from '@wixc3/react-board';
import { FormLabel } from '../../../components/form-label/form-label';

export default createBoard({
    name: 'FormLabel',
    Board: () => <FormLabel>Label</FormLabel>,
    isSnippet: true,
});
