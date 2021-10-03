import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "./seo"
import BannerItem from "./BannerItem"
import "./../css/movieItem.scss"
import Video from "./Video"
import Load from "./Load"
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
  const handleLoading = () => {
    setloading(false)
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
        {/* <video className="video" controls preload="auto" src={source}>
          <track
            src="captions_es.vtt"
            kind="captions"
            srcLang="es"
            label="spanish_captions"
          />
        </video> */}
        <div className={loading ? "noReady" : "ready"}>
          <Load />
        </div>
        <div className={loading ? "loading" : "noLoading"}>
          <Video data={source} loading={handleLoading} />
        </div>
      </section>
    </Layout>
  )
}

export default Movie
