
import { FormFields } from "../features/form/components/form-fields";

export const Second = () => {

    const KAFKA_URL = 'http://localhost:15672/api/queues/%2F/second-service';

    return (
        <>
            <h1>Second Service</h1>
            <FormFields
                url={KAFKA_URL}
            />
        </>
    )
}