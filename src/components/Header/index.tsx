import magnifyingGlass from '../../assets/magnifying-glass.png'
import plus from '../../assets/plus.png'
import { HeaderActions, HeaderContainer, LinkToAdd } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Contacts</h1>
      <HeaderActions>
        <select>
          <option value="all">All</option>
          <option value="favorites">Favorites</option>
        </select>
        <img src={magnifyingGlass} alt="Search" />
        <LinkToAdd to="/add">
          <img src={plus} alt="Add" />
        </LinkToAdd>
      </HeaderActions>
    </HeaderContainer>
  )
}

export default Header
