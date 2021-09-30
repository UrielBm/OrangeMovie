import React from "react"
import BannerMovies from "../components/BannerMovies"
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
    </Layout>
  )
}

export default movies
