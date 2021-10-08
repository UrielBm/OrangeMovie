import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "./seo"
import BannerItem from "./BannerItem"
import "./../css/movieItem.scss"
import Video from "./Video"
import Load from "./Load"
import ErrorMessage from "./ErrorMessage"
export const query = graphql`
  query ($originalId: String) {
    allDatoCmsMovie(filter: { originalId: { eq: $originalId } }) {
      nodes {
        description
        category
        movieTime
        title
        source
        poster {
          gatsbyImageData(
            placeholder: BLURRED
            forceBlurhash: true
            layout: FIXED
          )
        }
      }
    }
  }
`
const Movie = ({ data }) => {
  const movie = data.allDatoCmsMovie.nodes[0]
  const { title, category, description, movieTime, poster, source } = movie
  const [loading, setloading] = useState(true)
  const [error, setError] = useState(false)
  const handleLoading = () => {
    setloading(false)
  }
  const handleError = () => {
    setError(true)
  }
  return (
    <Layout>
      <Seo title="movie" />
      <section className="wrapperBanner">
        <BannerItem
          title={title}
          category={category}
          description={description}
          movieTime={movieTime}
          poster={poster}
        />
      </section>
      <section className="wrapperVideo">
        {!error ? (
          <>
            <div className={loading ? "noReady" : "ready"}>
              <Load />
            </div>
            <div className={loading ? "loading" : "noLoading"}>
              <Video
                data={source}
                loading={handleLoading}
                error={handleError}
              />
            </div>
          </>
        ) : (
          <ErrorMessage />
        )}
      </section>
    </Layout>
  )
}

export default Movie
