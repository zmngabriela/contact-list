import { useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import Header from "../../components/Header"
import Contacts from "../../containers/Contacts"

const Home = () => {
  const [ filter, setFilter ] = useState('all')
  const contactsList = useSelector((state: RootReducer) => state.contacts.contactsList)
  const favoritesList = useSelector((state: RootReducer) => state.favorites.favoritesList)

  const onFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const filteredContacts = (filter === 'favorites') ? contactsList.filter(c => favoritesList.some(fav => fav.name === c.name)) : contactsList

  return (
    <>
      <Header isHome={true} filterChange={onFilterChange}/>
      <Contacts filteredContacts={filteredContacts}/>
    </>
  )
}

export default Home
