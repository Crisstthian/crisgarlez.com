import React, {useMemo} from "react";
import PostItem from "../PostItem"

const PostListing = ({data, showYears}) => {
  const postsByYear = {};
  data.forEach((post) => {
    const year = post.date.split("-")[0];

    postsByYear[year] = [...(postsByYear[year] || []), post];
  });

  const years = useMemo(() => Object.keys(postsByYear).reverse(), [postsByYear])

  if (showYears) {
    return years.map((year) => (
      <section key={year}>
        <h2 className="text-3xl font-semibold border-b">{year}</h2>
        <div className="my-4">
          {postsByYear[year].map((node) => (
            <PostItem key={node.id} node={node} />
          ))}
        </div>
      </section>
    ))
  }

  return (
    <div className="posts">
      {data.map((node) => (
        <PostItem key={node.id} node={node} />
      ))}
    </div>
  )

};

export default PostListing;
