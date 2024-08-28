import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"

import ContactClass from "../../models/Contact"
import { add } from "../../store/reducers/contacts"
import * as S from "./styles"

import sum from '../../assets/sum.png'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [contact, setContact] = useState(new ContactClass('', '', '', '', ''))

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact({
      ...contact,
    [name]: value
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (Object.values(contact).some(value => value === '')) {
      alert('Please, enter all the contact information.')
    } else {
      dispatch(add(contact))
      setContact(new ContactClass("", "", "", "", ""))
    }
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <h2>Add new contact</h2>
      {Object.keys(contact).map((item) => (
        <S.Inputs key={item}>
          <label htmlFor={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
          <input
            type="text"
            name={item}
            value={(contact as any)[item]}
            id={item}
            onChange={onChangeInput}
            placeholder={
              item === 'name' ? 'Enter your full name' :
              item === 'phone' ? 'Ex.: +00 0000-0000' :
              item === 'avatar' ? 'Enter your photo URL' : ''
            }
          />
        </S.Inputs>
      ))}
      <S.BtnContainer>
        <S.SubmitBtn type="submit">
          <img src={sum} alt="Add" />
        </S.SubmitBtn>
      </S.BtnContainer>
    </S.Form>
  )
}

export default FormAdd
