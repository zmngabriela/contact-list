import Header from "../../components/Header"
import Contacts from "../../containers/Contacts"

const Home = () => {
  return (
    <>
      <Header isHome={true}/>
      <Contacts />
    </>
  )
}

export default Home
