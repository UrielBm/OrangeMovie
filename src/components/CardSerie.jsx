import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

const CardSerie = ({ serie }) => {
  const { title, seasons, poster, originalId } = serie
  const image = getImage(poster)
  return (
    <Link to={`serie=${originalId}`} className="actionCard">
      <BgImage image={image} className="Card" alt="Movie-card" onStartLoad>
        <div className="wrapperData">
          <div className="aboutMovie">
            <p>
              Título: <span className="data">{title}</span>
            </p>
            <p>
              Temporadas: <span className="data">{seasons} temps.</span>
            </p>
          </div>
        </div>
      </BgImage>
    </Link>
  )
}

export default CardSerie
