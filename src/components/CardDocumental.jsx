import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

const CardDocumental = ({ documental }) => {
  const { titulo, autor, poster, originalId, time } = documental
  const image = getImage(poster)
  return (
    <Link to={`documental=${originalId}`} className="actionCard">
      <BgImage image={image} className="Card" alt="Movie-card" onStartLoad>
        <div className="wrapperData">
          <div className="aboutMovie">
            <p>
              Título: <span className="data">{titulo}</span>
            </p>
            <p>
              Autor: <span className="data">{autor}</span>
            </p>
            <p className="sinopsis">
              Duración: <span className="description">{time} mins</span>
            </p>
          </div>
        </div>
      </BgImage>
    </Link>
  )
}

export default CardDocumental
