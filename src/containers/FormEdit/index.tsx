import { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BtnContainer, FormStyle, Inputs, SubmitBtn } from "../FormAdd/styles"

import save from '../../assets/save.png'
import { useNavigate, useParams } from "react-router-dom"
import { RootReducer } from "../../store"
import { edit } from "../../store/reducers/contacts"
import ContactClass from "../../models/Contact"

const FormEdit = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name } = useParams<{name: string}>()
  const contactsList = useSelector((state: RootReducer) => state.contacts.contactsList)
  const formatUrl = (name: string) => name.replace(/-/g, ' ').toLowerCase()
  const contactFound = contactsList.find(x => formatUrl(x.name) === formatUrl(name || ''))
  const [contact, setContact] = useState<ContactClass | undefined>(contactFound)

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContact(prevContact => {
      if (prevContact) {
        return {
          ...prevContact,
          [name]: value
        }
      } else {
        return prevContact
      }
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (contact && Object.values(contact).some(value => value === '')) {
      alert('Please, enter all the contact information.')
    } else if (contact && contactFound) {
      dispatch(edit({ oldName: contactFound.name, newContact: contact }))
      navigate(-2)
    } else {
      alert('Contact was not found or has been deleted.')
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
                  placeholder={
                    item === 'name' ? 'Enter your full name' :
                    item === 'phone' ? 'Ex.: +00 0000-0000' :
                    item === 'avatar' ? 'Enter your photo URL' : ''
                  }
                />
              </Inputs>
            ))}
          </>
        ) : <p>Contact was not found or has been removed.</p>}
      <BtnContainer>
        <SubmitBtn type="submit">
          <img src={save} alt="Save" />
        </SubmitBtn>
      </BtnContainer>
    </FormStyle>
  )
}

export default FormEdit
