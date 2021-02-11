import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
import { size } from "lodash";
import { searchGifApi } from "../api/gif";

const SearchPage = () => {
  const [gifs, setGifs] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search-gif").enterKeyHint;
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchGifApi(query.query);
        console.log(response.data);
        if (size(response) > 0) {
          setGifs(response.data);
        }
      } else {
        setGifs([]);
      }
    })();
  }, [query]);

  console.log("SON LOS GIFS", gifs);

  return (
    <Layout title="Search">
      {gifs ? (
        <div>
          <ul className="pt-5">
            <li className="flex flex-wrap justify-center items-center">
              {gifs.map((gif, index) => (
                <img
                  className="p-3 w-60 h-60 object-cover "
                  src={gif.images.fixed_height.url}
                  alt=""
                />
              ))}
            </li>
          </ul>
        </div>
      ) : (
        <div>No hay gifs</div>
      )}
    </Layout>
  );
};

export default SearchPage;
