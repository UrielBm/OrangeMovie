import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
const BannerItem = ({ title, description, category, movieTime, poster }) => {
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
        <p>
          Categoria:<span className="category">{category}</span>
        </p>
        <p className="duration">
          Duración:<span className="time">{movieTime} mins.</span>
        </p>
      </section>
    </section>
  )
}

export default BannerItem
