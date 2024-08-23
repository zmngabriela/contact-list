import { ChangeEvent, FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { BtnContainer, FormStyle, Inputs, SubmitBtn } from "../FormAdd/styles"

import save from '../../assets/save.png'
import { useNavigate, useParams } from "react-router-dom"
import { RootReducer } from "../../store"

const FormEdit = () => {
  const navigate = useNavigate()

  const { name } = useParams<{name: string}>()
  const contactsList = useSelector((state: RootReducer) => state.contacts.contactsList)
  const formatName = (name: string) => name.replace(/-/g, ' ').toLowerCase()
  const contact = contactsList.find(x => formatName(x.name) === formatName(name || ''))

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // setContact({
    //   ...contact,
    // [name]: value
    // })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (contact && Object.values(contact).some(value => value === '')) {
      alert('Please, enter all the contact information.')
    } else {
      navigate(-1)
      console.log(contact) // aqui vou adicionar uma funcao de edit que vai vir la do store, e vai ser despachada com dispatch
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h2>Edit contact</h2>
        {contact ? (
          <>
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
          </>
        ) : <p>This contact does not exist.</p>}
      <BtnContainer>
        <SubmitBtn type="submit">
          <img src={save} alt="Save" />
        </SubmitBtn>
      </BtnContainer>
    </FormStyle>
  )
}

export default FormEdit
