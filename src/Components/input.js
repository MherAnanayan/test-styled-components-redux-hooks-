import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addInputData, deleteInputData, editInputData} from '../Redux/action/action'
import styled from 'styled-components';

import Inputlist from '../Components/inputList';

const Inputdiv = styled.div `
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 20px;
`
const Inputarea = styled.div `
  display: flex;
flex-direction: row;

`

const Input = () => {
    const [value, setValue] = useState('')
    const [listValues, setListValues] = useState([])
    const [toChange, setToChange] = useState(false)
    const [idForChange, setIdForChange] = useState('')

    const dispatch = useDispatch()
    const ValuesInRedux = useSelector(state => state.input ? state.input.map(el => el) : [])

    useEffect(() => {
        dispatch(addInputData(listValues))
    }, [listValues])

    const deleteItemHandler = (id) => {
        setListValues(listValues.filter(el => el.id !== id))
        dispatch(deleteInputData(listValues))
    }

    const changeItemHandler = (id) => {
        const chanageItemValue = listValues.filter(el => el.id === id)[0]
        setValue(chanageItemValue.title)
        setToChange(true)
        setIdForChange(chanageItemValue.id)
    }

    const addChangeListValues = () => {

        dispatch(editInputData(idForChange, value, listValues))
        setToChange(false)
        setValue('')
    }
    const iputChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const ListValuesHandler = () => {
        if (value) {
            setListValues(prev => [
                ...prev, {
                    id: Math.random().toString(),
                    title: value
                }
            ])
            setValue('')
        } else 
            return
    }

    return (
        <Inputdiv >
            <Inputarea>
                <input plechholder='add' onChange={iputChangeHandler} value={value}/>
                <button
                    onClick={toChange
                    ? addChangeListValues
                    : ListValuesHandler}>{toChange
                        ? 'changeTo'
                        : 'Add'}</button>
            </Inputarea>

            {ValuesInRedux.map(el => <Inputlist
                deleted={deleteItemHandler}
                changed={changeItemHandler}
                id={el.id}
                key={el.id}
                title={el.title}/>)}
        </Inputdiv>

    )
}

export default Input;