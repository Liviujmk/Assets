
import { FormFields } from "../features/form/components/form-fields";

export const Second = () => {

    const API_URL = 'http://localhost:3500';

    return (
        <>
            <h1>Second Service</h1>
            <FormFields
                url={API_URL}
            />
        </>
    )
}