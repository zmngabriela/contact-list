import ContactClass from "../../models/Contact"
import Contact from "../../components/Contact"

type Props = {
  filteredContacts: ContactClass[]
}

const Contacts = ({ filteredContacts }: Props) => {
  return (
    <ul>
      {filteredContacts.map((x) => (
        <li key={x.name}>
          <Contact name={x.name} email={x.email} phone={x.phone} avatar={x.avatar} description={x.description}/>
        </li>
      ))}
    </ul>
  )
}

export default Contacts
