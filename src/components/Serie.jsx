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
        episodes
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
          description
          title
          timeEpisode
          source
          originalId
        }
      }
    }
  }
`
const Serie = ({ data, location }) => {
  const id = location.pathname.split("=")
  const serie = data.allDatoCmsSerie.nodes.filter(
    serie => serie.originalId === id[1]
  )
  const { title, episodes, description, poster, episodios } = serie[0]
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
          episodes={episodes}
          description={description}
          poster={poster}
        />
      </section>
      <div>
        {episodios.map(episodio => (
          <div className="wrapperEpisodes" key={episodio.originalId}>
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
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Serie