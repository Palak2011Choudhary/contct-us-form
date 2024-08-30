import classNames from 'classnames';
import styles from './form-label.module.scss';

export interface FormLabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
    htmlFor?: string
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormLabel = ({ className, children, htmlFor }: FormLabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor}>{children}</label>
        </div>
    );
};
