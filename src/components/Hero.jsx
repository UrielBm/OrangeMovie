import { Link } from "gatsby"
import React from "react"

const Hero = () => {
  return (
    <main className="hero">
      <h1 className="title">Orange Movie Platform</h1>
      <p className="aboutUs">
        Hola, <span className="text">Orange Movie Platform</span> es una
        plataforma de Streaming hecha por un grupo de personas que les gustan
        las películas. La plataforma será siempre gratis mientras se puedan
        mantener los servidores. El propósito de esta plataforma es proporcionar
        películas de diferentes géneros, gratis, sin anuncios y cambiando cada
        semana. Así que{" "}
        <span className="text">
          Exprime cada segundo y ve nuestro catálogo.
        </span>
      </p>
      <section className="wrapperButtons">
        <Link to="/movies" className="buttonLink">
          ¡Nuestro catálogo!
        </Link>
      </section>
    </main>
  )
}

export default Hero
