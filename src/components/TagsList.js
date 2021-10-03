import { Link } from "gatsby"
import React from "react"
import setupTags from "../utils/setupTags"

const TagsList = ({ whiskies }) => {
  const newTags = setupTags(whiskies)
  return (
    <div className="tag-cotainer">
      <h4>whiskies</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/tags/${text}`} key={index}>
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
