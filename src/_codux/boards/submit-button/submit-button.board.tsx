import { createBoard } from '@wixc3/react-board';
import { SubmitButton } from '../../../components/submit-button/submit-button';
import styles from './submit-button.board.module.scss';

export default createBoard({
    name: 'SubmitButton',
    Board: () => <SubmitButton className={styles.submitButton}>Button</SubmitButton>,
    isSnippet: true,
});
