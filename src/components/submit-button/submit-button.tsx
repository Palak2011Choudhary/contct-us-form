import classNames from 'classnames';
import styles from './submit-button.module.scss';
import appStyles from '../../App.module.scss';

export interface SubmitButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
    return (
        <div className={classNames(styles.root, className, appStyles['text-center'])}>
            <button>{children}</button>
        </div>
    );
};
