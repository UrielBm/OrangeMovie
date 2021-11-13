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
    allDatoCmsDocumental(filter: { originalId: { eq: $originalId } }) {
      nodes {
        description
        time
        titulo
        autor
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
const Documental = ({ data,location }) => {
  const id = location.pathname.split("=")
  const documental = data.allDatoCmsDocumental.nodes.filter(
    documental => documental.originalId === id[1]
  )
  // const documental = data.allDatoCmsDocumental.nodes[0]
  const { titulo, autor, description, time, poster, source } = documental[0]
  const [loading, setloading] = useState(true)
  const handleLoading = () => {
    setloading(false)
  }
  return (
    <Layout>
      <Seo title="movie" />
      <section className="wrapperBanner">
        <BannerItem
          title={titulo}
          autor={autor}
          description={description}
          movieTime={time}
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

export default Documental
