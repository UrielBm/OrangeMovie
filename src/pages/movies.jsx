import React from "react"
import BannerMovies from "../components/BannerMovies"
import CarrouselDocumentales from "../components/CarrouselDocumentales"
import CarrouselMovies from "../components/CarrouselMovies"
import CarrouselSeries from "../components/CarrouselSeries"
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
      <CarrouselSeries />
    </Layout>
  )
}

export default movies
