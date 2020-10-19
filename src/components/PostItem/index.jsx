import React from "react";
import { Link } from "gatsby";

const PostItem = ({ node }) => {
  const date = new Date(node.date);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  let isNew = false;
  if (date > oneMonthAgo) {
    isNew = true;
  }

  const isPopular = node.categories && node.categories.includes("Popular");

  const formattedDate = node.date;

  return (
    <div className="py-4" key={node.id}>
      <Link
        className="flex items-center justify-between"
        to={node.slug}
      >
        <div className="flex items-center">
          <time className="mr-8 text-base">{formattedDate}</time>
          <h3 className="text-xl font-semibold">{node.title}</h3>
        </div>
        <div className="flex items-center">
          {isNew && <div className="bg-secondary text-directory px-2 py-2 rounded">Nuevo!</div>}
          {isPopular && <div className="bg-secondary text-accent px-2 py-2 rounded ml-2">Popular</div>}
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
