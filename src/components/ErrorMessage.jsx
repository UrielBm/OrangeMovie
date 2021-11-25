import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./../css/error.scss"
const ErrorMessage = () => {
  return (
    <section className="error">
      <h3>Upps... película no disponible</h3>
      <p>
        la película no se encuentra disponible por el momento,favor de
        comunicarlo a Orange movie platform.
      </p>
      <StaticImage
        src="../images/bauble_christmas.svg"
        alt="aboutMouth-Error"
        placeholder="blurred"
        className="errorPicture"
        loading="lazy"
      />
    </section>
  )
}

export default ErrorMessage
