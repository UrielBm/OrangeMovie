import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Link } from "gatsby"

const CardMovie = ({ movie }) => {
  const { title, category, poster, originalId, movieTime } = movie
  const image = getImage(poster)
  return (
    <Link to={`movie=${originalId}`} className="actionCard">
      <BgImage image={image} className="Card" alt="Movie-card" onStartLoad>
        <div className="wrapperData">
          <div className="aboutMovie">
            <p>
              Título: <span className="data">{title}</span>
            </p>
            <p>
              Categoria: <span className="data">{category}</span>
            </p>
            <p className="sinopsis">
              Duración: <span className="description">{movieTime}mins</span>
            </p>
          </div>
        </div>
      </BgImage>
    </Link>
  )
}

export default CardMovie
