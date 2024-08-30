import styles from './App.module.scss';
import { Input } from './components/input/input';
import { FormLabel } from './components/form-label/form-label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div>
            <form>
                <FormLabel className={styles['text-center']} htmlFor="name">
                    Name
                </FormLabel>
                <Input id="name" name="name" />
                <br />
                <FormLabel className={styles['text-center']} htmlFor="email">
                    Email
                </FormLabel>
                <Input id="email" name="email" />
                <br />
                <FormLabel className={styles['text-center']} htmlFor="contact_no">
                    Contact No
                </FormLabel>
                <Input id="contact_no" name="contact_no" />
                <br />
                <FormLabel className={styles['text-center']} htmlFor="message">
                    Message
                </FormLabel>
            </form>
            <Input id="message" name="message" />
            <br />
            <SubmitButton>Submit</SubmitButton>
        </div>
    );
}

export default App;
