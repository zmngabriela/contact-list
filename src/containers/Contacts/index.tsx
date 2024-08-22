import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Contact from "../../components/Contact"

const Contacts = () => {
  const { contactsList } = useSelector((state: RootReducer) => state.contacts)

  return (
    <>
      <ul>
        {contactsList.map((x) => (
          <Contact key={x.name} name={x.name} email={x.email} phone={x.phone} avatar={x.avatar} description={x.description}/>
        ))}
      </ul>
    </>
  )
}

export default Contacts
