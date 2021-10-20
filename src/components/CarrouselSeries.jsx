import React from "react"
import useGetSeries from "../hooks/useGetSeries"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import CardSerie from "./CardSerie"
const CarrouselSeries = () => {
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
  const { Series } = useGetSeries()
  if (Series.length === 0) return null
  return (
    <>
      <h3 className="SectionTitle">Series</h3>
      <section className="wrapperCarrousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet"]}
          className="Carousel"
        >
          {Series.map(serie => (
            <CardSerie key={serie.id} serie={serie} />
          ))}
        </Carousel>
      </section>
    </>
  )
}

export default CarrouselSeries
