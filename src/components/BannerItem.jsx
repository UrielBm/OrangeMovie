import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
const BannerItem = ({
  title,
  description,
  category,
  movieTime,
  poster,
  autor,
  seasons,
}) => {
  const image = getImage(poster)
  return (
    <section className="Banner">
      <BgImage image={image} className="Poster" alt="poster" />
      <section className="wrapperData">
        <h2>
          Título: <span className="movieTitle">{title}</span>
        </h2>
        <p className="sinopsis">
          Sinopsis: <span className="description">{description}</span>
        </p>
        {autor && (
          <p>
            Autor: <span className="category">{autor}</span>
          </p>
        )}
        {category && (
          <p>
            Categoria:
            <span
              className={
                category === "estreno" ? "category-estreno" : "category"
              }
            >
              {category}
            </span>
          </p>
        )}
        {seasons && (
          <p>
            Temporadas: <span className="time">{seasons} temporadas</span>
          </p>
        )}
        {movieTime && (
          <p className="duration">
            Duración:<span className="time">{movieTime} mins.</span>
          </p>
        )}
      </section>
    </section>
  )
}

export default BannerItem
