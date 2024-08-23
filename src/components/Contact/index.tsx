import { useState } from "react"
import { useDispatch } from "react-redux"
import { remove } from "../../store/reducers/contacts"
import ContactClass from "../../models/Contact"
import * as S from "./styles"

import dots from '../../assets/dots.png'
import fav from '../../assets/fav.png'
import nofav from '../../assets/fav.png'
import minus from '../../assets/minus.png'

type Props = ContactClass

const Contact = ({ name, avatar, description }: Props) => {
  const dispatch = useDispatch()

  const [isFav, setIsFav] = useState(false)

  function toggleFavorite() {
    setIsFav(!isFav)
  }

  return (
    <S.ContactContainer>
      <S.ContactStart to={`/contact/${name.replace(/\s+/g, '-').toLowerCase()}`}>
        <img src={dots} alt="More" id="dots" />
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
