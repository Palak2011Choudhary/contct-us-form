import styles from './App.module.scss';
import { Input } from './components/input/input';
import { FormLabel } from './components/form-label/form-label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {

    async function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>){
        event.preventDefault();
        const formValue: Record<string,string>= {}

        Array.from(event.currentTarget.elements).forEach( field =>{
            if(!field.name) return
        formValue[field.name] = field.value
          
        })

        formValue['city']='Mumbai';
        formValue['enquiry_type']= "GENERAL_ENQUIRY";
        formValue['token']="03AFcWeA56YfOot3bs6g1uPr9DH7A78k2BI3cITC8fHriF41Lq9eh4rsCgQDHwqD7N_jyw_v37TH24e52SoAI5zux-pSy5RQI2m8vU5LYU8roiZG29D8ZcsImKEltCmxzJobEoo0bd8EAZMMrAd7njHs26jgGMTGQz3-F5LqHSyzhsJwXKuGRLnDn4fIIiI_sVrUqjzK4Omiu02IGPRwQmhzixhEvx1osxRZOmc5zjcC6ryP5-RVtC6cSDv33GRy9A_chbEkQRaK7rHwTr3DvxXbAhJdZUBbNW1KaD-OmZxjo8iDiD5xTR4TmxKEcUZN8pU3DQ-DOx5Wj-pIkKwm5ht0N-tAmcWRampMx1RIDdK_PHvIjlB7SeUea1ZsV9muQMaJJAwdD42XdumlW3nG9AZKa6VuLhyTWCKuVHdH24qLXGbbWlNKYWheYSJ65d_7eY8CDQU3vTlr15Fjk6xKswEqEiAaPyGoZEq7lRXOwvxMHkyz2hSlz2PHQ8J9F5SOr1TNjcA9V7pgdQt8ZJh2YTf-TYnKVtolAwGuBNU6p9gv9-r12NlcJwgnA70TQwjmR_4pUnp9EutDqQ9Ox9YJ6t_zZvJL8R12rl9IJsWhfo_lR7O7mnVV1Iz4aa1gDIFeeaySokD1xlEQ09QW5n2pu_MkMIOFFHXpdOSn0CD5y8XPkwPd4JUBWfoTCi4J5Jk1NiQFGuJIRe3UEZT-bBClkusf6WiAAcI3wlUoG4hvd6TQOruF-Xx8082cVF0tkgmn2nPwEWmj4jV1Ra3cV9x4Zm3BFyO3cYnUVuzrHGdVRYY9HM24_DaeU_OLrd47XeT9pOOQToCp7Rl8eAotLpd8vtiGn_nsCeHT_k97z9xV2CHxT8nDZP_s9jbl1Ly8OWlo8BlSoI18F6Ftq-HIpajL95N8WqhNOnSi1EV8Zb5aRecLGAhrurT3QijG9pYcldXfvYkD03oyhMAfsZXiNhcGw8RhcZrshk716bc0Dl4aOAocv36aU6Znjk5eVgGg5mlhjEOu3WLz6caUC1qUlpFR22LU-S4LybS9dJ1wQj_r2DxO5atFXRB4zmqPn3E25UJwZ7GB9PvwbmyuV0h57QCGd3o07KQdgcDaMdvHQavN2ot8mAOG8XXvXY6SF45k5S4AHQIZ__LqXJc7FKDm5172W_m3N3w0FVpyZIV0FxL7WqRbfwlmFDdhLH8W4bwJ0C78suTlZa6cgSio689vNls2G7VrU-0Djej0nNcYPzTCPyeODyKyxJ-5xRus5drV8zaMGRTh4U3dGNsxl3strg4Znkf6NiYXQOyHVNWRvPTnADrUV8mxIBEyfvP4I3reXT-bu5zjeMHBFDys0nxh8r1wv1XQgV9N20DHwNgf6hO02PDehyFZoxcJnJR3dvECePJuSzZ3Jl4tZhIlLCDLY2bJETYj9rW8jZtl_fgdAvcVh-nny-7fL_3N8vjv1QD6gZAuqbktNhmzxIGmDmk2npi76ouhV_RKQYMFjSEW_zL7ie1RZUerYZDaiXs308ZIjzrUKoU8HLkDLJ3HR6h6FKx1TfOxNsYAhW4lerERMYjtSrRqSWK0G1V3wJZn98bKsEE1NvJHvywAdSmHiOpE7kJoWF-qFV0RpU2e0Z-alT37lXZoUgE-yt4ZUcUCGIUPHtPpnfwGjnpdNiwp0F4SyBKBpSpokMgUY5Ul6QJrxrQ0z3zLgcc_5dAkR-Jrw1v3JSsusaQkAVJqtdQKFGCpp7_FlApyvYBHOPQucFggN6cFBYfKvOU6WMW5BFW4oK6vsxd-i2vEwxcgHGhs2WL1GJ4DfnHeHvuP9fuW2LNDQYTqKoyQbcpZnq8ZVST9h0bHM1LJ-KYmiTWxeeqsxn0R4CbML0lTJIUVx_ASJjp1erKOkGmIKyNlijdKr7OrT92uiSwinjV0K0g5CnaFQLw0_UPNkeL7lXtG7mFmA2dU7XOBAhWXEb67XiXVcqGYB3UiU1okGF-qIZvTNQHIUB"
        console.log('field', formValue)

        await fetch('https://ecc-dev-api.skill-mine.com/api/v1/enquiry-request',{
            method: 'POST',
            body: JSON.stringify(formValue)
        })
       
    }
    return (
        <div className={styles.div1}>
            <h1 className={styles.header1}>Contact Us</h1>Have any question? Feel out the form below
            and we will get back to you as soon as we can.
            <form onSubmit={handleOnSubmit} className={styles.form1}>
                <FormLabel htmlFor="name" className={styles.label}>
                    Name
                </FormLabel>
                <Input id="name" name="name" className={styles.input} />
                <FormLabel htmlFor="email" className={styles.label}>
                    Email
                </FormLabel>
                <Input id="email" name="email" />
                <FormLabel htmlFor="number" className={styles.label}>
                    Contact No
                </FormLabel>
                <Input id="number" name="number" />
                <FormLabel htmlFor="enquiry_description" className={styles.label}>
                    Message
                </FormLabel>
                <Input id="enquiry_description" name="enquiry_description" />
                <SubmitButton>Submit</SubmitButton>
            </form>
            <br />
        </div>
    );
}

export default App;
