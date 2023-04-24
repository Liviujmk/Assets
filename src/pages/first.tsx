import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { FormFields } from '../features/form/components/form-fields';

export const First = () => {

    const RABBIT_MQ_URL = 'http://localhost:15672/api/queues/%2F/first-service';

    return (
        <>
            <h1>First Service</h1>
            <FormFields url={RABBIT_MQ_URL} />
        </>
    )
}
