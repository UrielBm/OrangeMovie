import React from "react"
import BannerMovies from "../components/BannerMovies"
import CarrouselDocumentales from "../components/CarrouselDocumentales"
import CarrouselMovies from "../components/CarrouselMovies"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./../css/moviesPage.scss"
const movies = () => {
  return (
    <Layout>
      <Seo title="movies" />
      <BannerMovies />
      <CarrouselMovies />
      <CarrouselDocumentales />
    </Layout>
  )
}

export default movies
