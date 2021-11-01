import React from "react"
import getRandomMovie from "../hooks/useGetRandomMovie"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const BannerMovies = () => {
  const { movie } = getRandomMovie()
  const { category, description, title, movieTime, poster, originalId } = movie
  const image = getImage(poster)
  return (
    <main className="wrapperBanner">
      <BgImage image={image} className="Poster" alt="poster" />
      <section className="wrapperData">
        <h2>
          Título: <span className="movieTitle">{title}</span>
          {/* <StaticImage
            src="../images/tomb.svg"
            alt="aboutMouth"
            placeholder="blurred"
            className="tematic"
            loading="lazy"
          /> */}
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
        <section className="wrapperButton">
          <Link to={`movie=${originalId}`} className="actionButton">
            ¡Ver ahora!
          </Link>
        </section>
      </section>
    </main>
  )
}

export default BannerMovies
