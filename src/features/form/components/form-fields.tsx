import { useEffect, useReducer, useState } from 'react'
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
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
    const [data, setData] = useState<any>()
    const [formData, setFormData] = useState({
        id: 2000,
        version: '',
        entityType: '',
        startDate: '',
        endDate: '',
        count: '',
        enabled: false,
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
    
    const [form, setForm] = useState({
        logType: 'orderInfo',
        message: {}
    })
    
    const saveData = () => {
        setFormData({
            id: 2000,
            version: version,
            entityType: entityType,
            startDate: startDate,
            endDate: endDate,
            count: count,
            enabled: checked,
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
        
        setForm({
            logType: 'orderInfo',
            message: formData
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
        setForm({
            logType: 'orderInfo',
            message: {}
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)
        saveData();
        sendData();
        // clearData();
    }
    
    const show = async() => {
        console.log(form)
        const res = fetch(`http://localhost:3900/orders/calc/${formData.id}`).then(res => res.json()).then(data => {
        console.log('data', data)    
        setData(data)
        })
    }
            
    const sendData = () => {
        fetch(`http://localhost:3500/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
    }
    console.log('formData', formData)
    console.log('form', form)

    return (

        <div className='fields'>

            <InputText

                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder='Version'
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
                    onChange={(e:any) => setStartDate(e.value)}
                    showTime
                    hourFormat="24"
                />


                <Calendar
                    inputId="end_date"
                    placeholder='End Date'
                    value={endDate}
                    onChange={(e:any) => setEndDate(e.value)}
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
                    onChange={(e:any) => setChecked(e.checked)}
                />
            </div>

            <Button
                label="Submit"
                onClick={handleSubmit}
            />
            
            <Card>
                Nice
                <Button 
                    label="Show results"
                    onClick={show}
                />
                <p>{data?.unit?.value ? data.unit.value : 'Order not found'}</p>
            </Card>

        </div>

    )

}
