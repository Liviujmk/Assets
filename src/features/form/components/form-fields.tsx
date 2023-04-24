import { useEffect, useReducer, useState } from 'react'
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import './form-fields.css'

export const FormFields = (url: any) => {

    const [version, setVersion] = useState('');
    const [entityType, setEntityType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checked, setChecked] = useState(false);
    const [count, setCount] = useState('');
    const [type, setType] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [totalUnit, setTotalUnit] = useState('');
    const [distanceValue, setDistanceValue] = useState('');
    const [distanceUnit, setDistanceUnit] = useState('');

    const [formData, setFormData] = useState({
        version: '',
        entityType: '',
        startDate: '',
        endDate: '',
        count: '',
        checked: false,
        type: '',
        total: {
            totalValue: '',
            totalUnit: '',
        },
        distance: {
            distanceValue: '',
            distanceUnit: ''
        }
    })

    const saveData = () => {
        setFormData({
            version: version,
            entityType: entityType,
            startDate: startDate,
            endDate: endDate,
            count: count,
            checked: checked,
            type: type,
            total: {
                totalValue: totalValue,
                totalUnit: totalUnit,
            },

            distance: {
                distanceValue: distanceValue,
                distanceUnit: distanceUnit
            }
        })
    }

    const clearData = () => {
        setVersion('');
        setEntityType('');
        setStartDate('');
        setEndDate('');
        setChecked(false);
        setCount('');
        setType('');
        setTotalValue('');
        setTotalUnit('');
        setDistanceValue('');
        setDistanceUnit('');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)
        saveData();
        sendData();
        clearData();
    }

    const sendData = () => {
        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    }


    return (

        <div className='fields'>

            <InputText

                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder='Label'
            />
            <InputText

                placeholder='Entity Type'
                value={entityType}
                onChange={(e) => setEntityType(e.target.value)}
            />
            <div className="flex-auto">

                <Calendar
                    inputId="start_date"
                    placeholder='Start Date'
                    value={startDate}
                    onChange={(e) => setStartDate(e.value)}
                    showTime
                    hourFormat="24"
                />


                <Calendar
                    inputId="end_date"
                    placeholder='End Date'
                    value={endDate}
                    onChange={(e) => setEndDate(e.value)}
                    showTime
                    hourFormat="24"
                />
            </div>

            <InputText
                placeholder='Count'
                type='number'
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />

            <InputText
                placeholder='Type'
                value={type}
                onChange={(e) => setType(e.target.value)}

            />

            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">Total</span>
                <InputText
                    placeholder='Value'
                    type='number'
                    value={totalValue}
                    onChange={(e) => setTotalValue(e.target.value)}
                />
                <InputText
                    placeholder='Unit'
                    value={totalUnit}
                    onChange={(e) => setTotalUnit(e.target.value)}
                />
            </div>

            <div className='p-inputgroup'>
                <span className="p-inputgroup-addon">Distance</span>
                <InputText
                    placeholder='Distance'
                    type='number'
                    value={distanceValue}
                    onChange={(e) => setDistanceValue(e.target.value)}
                />
                <InputText
                    placeholder='Unit'
                    value={distanceUnit}
                    onChange={(e) => setDistanceUnit(e.target.value)}
                />
            </div>

            <div className='checkbox'>
                <label htmlFor="enabled"> Enabled </label>
                <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.checked)}
                />
            </div>

            <Button
                label="Submit"
                onClick={handleSubmit}
            />

        </div>

    )

}
