import { createBoard } from '@wixc3/react-board';
import { FormLabel } from '../../../components/form-label/form-label';
import styles from './form-label.board.module.scss';

export default createBoard({
    name: 'FormLabel',
    Board: () => <FormLabel className={styles.label}>Label</FormLabel>,
    isSnippet: true,
});
