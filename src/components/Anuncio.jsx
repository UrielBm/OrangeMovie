import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "@sidarthar/gatsby-plugin-image-2"
import "./../css/anuncio.scss"
const Anuncio = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsAnuncio {
        nodes {
          title
          description
          imgAnuncio {
            gatsbyImageData(
              forceBlurhash: true
              placeholder: BLURRED
              width: 340
            )
          }
        }
      }
    }
  `)
  const { title, description, imgAnuncio } = data.nodes[0]
  const image = getImage(imgAnuncio)
  return (
    <section className="anuncio">
      <h2 className="title">Anuncio: {title}</h2>
      <p className="description">{description}</p>
      <div className="wrapperImg">
        <GatsbyImage image={image} alt="img_anuncio" className="Img" />
      </div>
    </section>
  )
}

export default Anuncio
