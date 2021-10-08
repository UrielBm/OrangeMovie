import React from "react"
import useGetDocumental from "../hooks/useGetDocumental"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CardDocumental from "./CardDocumental"
const CarrouselDocumentales = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const { Documentales } = useGetDocumental()

  return (
    <>
      <h3 className="SectionTitle">Documentales</h3>
      <section className="wrapperCarrousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
          className="Carousel"
        >
          {Documentales.map(documental => (
            <CardDocumental key={documental.id} documental={documental} />
          ))}
        </Carousel>
      </section>
    </>
  )
}

export default CarrouselDocumentales
