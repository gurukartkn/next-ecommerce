import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import ProductCard from "../components/ProductCard";

export default function Home({ categories, products }) {
  return (
    <div className="px-2 md:px-4">
      <Head>
        <title>Dollar Smart</title>
        <meta
          name="description"
          content="Dollar Smart is a fake e-commerce website created using Platzi Fake Store API"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className="pt-5 text-center font-bold text-xl">Shop by Category</h3>
      <div className="mb-5 py-3 flex flex-row gap-7 items-center max-w-[100vw] overflow-x-scroll md:overflow-hidden md:justify-center border-b">
        {categories.map((category) => (
          <Link href={`/products/${category.id}`} key={category.id}>
            <a className="relative flex flex-col gap-2 justify-center items-center w-11 md:w-auto">
              <Image
                src={category.image}
                alt={category.name}
                className="rounded-full md:rounded-lg"
                width={480}
                height={480}
              />
              <p className="text-xs md:absolute md:w-full md:text-center md:bg-black md:bg-opacity-40 md:text-white md:py-5 font-extralight md:font-medium lg:text-md xl:text-lg">
                {category.name}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <h3 className="text-center font-bold text-xl">Trending</h3>
      <div className="py-3 flex flex-col justify-evenly md:flex-row flex-wrap gap-5 items-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="text-center py-5">
        <Link href="/products">
          <a className="p-2 border border-black rounded-md font-semibold">
            View all products
          </a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories = await res.json();

  const pres = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=10"
  );
  const products = await pres.json();

  return {
    props: {
      categories,
      products,
    },
  };
}
