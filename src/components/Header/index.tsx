import search from '../../assets/search.png'
import plus from '../../assets/plus.png'
import home from '../../assets/home.png'
import { HeaderActions, HeaderContainer, LinkToAdd } from './styles'

type Props = {
  isHome: boolean
}

const Header = ({ isHome }: Props) => {
  return (
    <>
      <HeaderContainer>
        <h1>Contacts</h1>
        <HeaderActions>
          <select>
            <option value="all">All</option>
            <option value="favorites">Favorites</option>
          </select>
          <img src={search} alt="Search" />
          {isHome ? (
            <LinkToAdd to="/add">
              <img src={plus} alt="Add" />
            </LinkToAdd>
          ) : (
            <LinkToAdd to="/">
              <img src={home} alt="Add" />
            </LinkToAdd>
          )}
        </HeaderActions>
      </HeaderContainer>
    </>
  )
}

export default Header
