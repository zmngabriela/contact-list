import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useParams } from "react-router-dom"
import { EditContactContainer, EditContactInfo, Icons, LinkToEdit } from "./styles"

import call from '../../assets/call.png'
import chat from '../../assets/chat.png'
import edit from '../../assets/edit.png'

const ContactInfo = () => {
  const { name } = useParams<{ name: string }>()
  const contactsList = useSelector((state: RootReducer) => state.contacts.contactsList)
  const formatName = (name: string) => name.replace(/-/g, ' ').toLowerCase()
  const contact = contactsList.find(x => formatName(x.name) === formatName(name || ''))

  return (
    <>
      {contact ? (
          <EditContactContainer>
            <EditContactContainer>
              <img src={contact.avatar} alt="Avatar" id="avatar" />
              <h2>{contact.name}</h2>
              <p id="description">{contact.description}</p>
            </EditContactContainer>
            <EditContactInfo>
              <p>{contact.phone}</p>
              <p>{contact.email}</p>
            </EditContactInfo>
            <Icons>
              <img src={call} alt="Call" />
              <img src={chat} alt="Chat" />
              <LinkToEdit to={`/contact/${contact.name.replace(/\s+/g, '-').toLowerCase()}/edit`}>
                <img src={edit} alt="Edit" />
              </LinkToEdit>
            </Icons>
          </EditContactContainer>
        ) : (
          <h2>Contact was not found or was removed.</h2>
      )}
    </>
  )
}

export default ContactInfo

