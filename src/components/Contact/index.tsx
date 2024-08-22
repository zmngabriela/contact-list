import { useState } from "react"
import { useDispatch } from "react-redux"
import { ContactType } from "../../App"
import { remove } from "../../store/reducers/contacts"
import * as S from "./styles"

import fav from '../../assets/fav.png'
import nofav from '../../assets/fav.png'
import minus from '../../assets/minus.png'

const Contact = ({ name, avatar, description }: ContactType) => {
  const dispatch = useDispatch()

  const [isFav, setIsFav] = useState(false)

  function toggleFavorite() {
    setIsFav(!isFav)
  }

  return (
    <S.ContactContainer>
      <S.ContactStart>
        <img src={avatar} alt="Profile picture" id="avatar" />
        <S.ContactInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </S.ContactInfo>
      </S.ContactStart>
      <S.ContactEnd>
        <img onClick={toggleFavorite} src={isFav ? fav : nofav} alt={isFav ? "Favorited" : "Not favorited"} />
        <img onClick={() => dispatch(remove(name))} src={minus} alt="Remove" />
      </S.ContactEnd>
    </S.ContactContainer>
  )
}

export default Contact
