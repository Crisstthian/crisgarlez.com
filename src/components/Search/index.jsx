import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string";
import PostListing from "../PostListing"

const Search = ({ posts, location, navigate }) => {
  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search || "");
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  );
  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Búsqueda..."
        value={query}
        className="px-4 py-4 text-xl w-full bg-secondary"
        onChange={(e) => {
          navigate(e.target.value ? `/blog/?search=${e.target.value}` : "");
          setQuery(e.target.value);
        }}
      />
      <section className=" mt-8">
        {query ? (
          results.length > 0 ? (
            <PostListing data={results} />
          ) : (
            <p className="text-secondary py-3 text-lg">Nada coincide con esa búsqueda, intenta con algo diferente.</p>
          )
        ) : (
          <PostListing data={posts} showYears />
        )}
      </section>
    </>
  );
};

export default Search;
