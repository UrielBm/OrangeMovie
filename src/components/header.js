import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./../css/header.scss"
const Header = () => (
  <header>
    <div className="wrapperHeader">
      <Link to="/" className="wrapperlogo">
        <StaticImage
          src="../images/icon.png"
          alt="logo"
          placeholder="blurred"
          className="logo"
          loading="eager"
        />
        <p className="textLogo">Orange Movie</p>
      </Link>
      {/* <section>
        <StaticImage
          src="../images/christmas_tree.svg"
          alt="aboutMouth"
          placeholder="blurred"
          className="tematic"
          loading="lazy"
        />
      </section> */}
      <nav className="nav">
        <Link to="/movies" className="Link" activeClassName="active">
          películas
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
