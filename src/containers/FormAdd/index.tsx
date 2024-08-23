import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import ContactClass from "../../models/Contact"
import { add } from "../../store/reducers/contacts"
import { BtnContainer, FormStyle, Inputs, SubmitBtn } from "./styles"

import sum from '../../assets/sum.png'

const FormAdd = () => {
  const dispatch = useDispatch()
  const [contact, setContact] = useState(new ContactClass("", "", "", "", ""))

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
    <FormStyle onSubmit={handleSubmit}>
      <h2>Add new contact</h2>
      {Object.keys(contact).map((item) => (
        <Inputs key={item}>
          <label htmlFor={item}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </label>
          <input
            type="text"
            name={item}
            value={(contact as any)[item]}
            id={item}
            onChange={onChangeInput}
          />
        </Inputs>
      ))}
      <BtnContainer>
        <SubmitBtn type="submit">
          <img src={sum} alt="Add" />
        </SubmitBtn>
      </BtnContainer>
    </FormStyle>
  )
}

export default FormAdd
