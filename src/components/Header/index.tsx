import { ChangeEvent } from 'react'
import * as S from './styles'

import search from '../../assets/search.png'
import plus from '../../assets/plus.png'
import home from '../../assets/home.png'

type Props = {
  isHome: boolean,
  filterChange?: (filter: string) => void
}

const Header = ({ isHome, filterChange }: Props) => {
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (filterChange) {
      filterChange(e.target.value)
    }
  }

  return (
    <>
      <S.Container>
        <h1>Contacts</h1>
        <S.Actions>
          <select onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="favorites">Favorites</option>
          </select>
          <img src={search} alt="Search" />
          {isHome ? (
            <S.LinkTo to="/add">
              <img src={plus} alt="Add" />
            </S.LinkTo>
          ) : (
            <S.LinkTo to="/">
              <img src={home} alt="Add" />
            </S.LinkTo>
          )}
        </S.Actions>
      </S.Container>
    </>
  )
}

export default Header
