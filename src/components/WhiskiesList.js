import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const WhiskiesList = ({ whiskies = [] }) => {
  return (
    <div className="recipes-list">
      {whiskies.map(whisky => {
        const { id, title, image, types, price, url } = whisky
        const pathToImage = getImage(image)
        const slug = slugify(url, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              Types : {types} | Price : {price}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default WhiskiesList
