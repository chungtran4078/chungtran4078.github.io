import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

type TagProps = {
  tags: string[],
}

class Tags extends Component<TagProps> {
  render() {
    const { tags } = this.props;
    return (
      <div className="post-tag-container">
        <span>Tags: </span>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              <button>{tag}</button>
            </Link>
          ))}
      </div>
    );
  }
}

export default Tags;