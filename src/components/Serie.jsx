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
    allDatoCmsSerie(filter: { originalId: { eq: $originalId } }) {
      nodes {
        title
        seasons
        description
        id
        originalId
        poster {
          gatsbyImageData(
            placeholder: BLURRED
            forceBlurhash: true
            layout: FIXED
          )
        }
        episodios {
          title
          description
          timeEpisode
          source
        }
      }
    }
  }
`
const Serie = ({ data }) => {
  const serie = data.allDatoCmsSerie.nodes[0]
  const { title, seasons, description, poster, episodios } = serie
  console.log(episodios)
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
          seasons={seasons}
          description={description}
          poster={poster}
        />
      </section>
      <section className="wrapperEpisodes">
        {episodios.map(episodio => (
          <>
            <section className="wrapperVideo">
              {!error ? (
                <>
                  <div className={loading ? "noReady" : "ready"}>
                    <Load />
                  </div>
                  <div className={loading ? "loading" : "noLoading"}>
                    <Video
                      data={episodio.source}
                      loading={handleLoading}
                      error={handleError}
                    />
                  </div>
                </>
              ) : (
                <ErrorMessage />
              )}
            </section>
            <section className="wrapperDataEpisodio">
              <p>
                Titulo: <span>{episodio.title}</span>
              </p>
              <p>
                Sinopsis: <span>{episodio.description}</span>
              </p>
              <p>
                Duración: <span>{episodio.timeEpisode} mins.</span>
              </p>
            </section>
          </>
        ))}
      </section>
    </Layout>
  )
}

export default Serie
