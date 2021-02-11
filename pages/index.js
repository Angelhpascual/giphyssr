import Layout from "../layouts/Layout";

export default function Home({ results }) {
  const { data } = results;
  return (
    <Layout title="Giphy | Home">
      <div className="flex-col justify-center">
        <span className="block text-xl text-center leading-tight mb-3 ">
          Welcome to
        </span>
        <h1 className="block font-bold text-6xl text-center mx-auto text-purple-800 pb-4 font-mono">
          Giphy API SSR
        </h1>
      </div>
      <ul className="pt-5">
        <li className="flex flex-wrap justify-center items-center">
          {data.map((img, index) => (
            <div key={index}>
              <img
                className="p-3 w-60 h-60 object-cover "
                src={img.images.fixed_height.url}
                alt=""
              />
            </div>
          ))}
        </li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const api_key = "tnCO31SacELsJ7fvsv8YkXeSHW8nTEuV";
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=vandamme&limit=25&offset=0&rating=g&lang=en`
    );
    const results = await res.json();
    return {
      props: {
        results,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
