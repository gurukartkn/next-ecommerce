import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Counter from "../../components/Counter";
import ProductCard from "../../components/ProductCard";
import { useHorizontalScroll } from "../../hooks/useSideScroll";

const Product = ({ product, similarProducts }) => {
  const scrollRef = useHorizontalScroll();
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col p-5 lg:p-10">
      <div className="flex flex-col md:flex-row md:gap-10 shadow-lg rounded-lg p-5 bg-white">
        <div className="md:w-1/2 lg:w-2/3 flex flex-row lg:gap-2">
          <div className="w-full lg:w-2/3">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={640}
              height={480}
              layout="responsive"
              className="rounded-md"
            />
          </div>
          <div className="hidden lg:w-1/3 lg:flex lg:flex-col">
            <div className="hidden lg:block">
              <Image
                src={product.images[1]}
                alt={product.name}
                width={640}
                height={480}
                layout="responsive"
                className="rounded-md scale-95"
              />
            </div>
            <div className="hidden lg:block">
              <Image
                src={product.images[2]}
                alt={product.name}
                width={640}
                height={480}
                layout="responsive"
                className="rounded-md scale-95"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/3 flex flex-col gap-3 lg:gap-5">
          <div className="flex justify-between border-b border-slate-200">
            <h1 className="flex-auto text-lg xl:text-2xl font-semibold lg:font-bold text-slate-900 w-2/3">
              {product.title}
            </h1>
            <div className="text-lg xl:text-2xl font-semibold lg:font-bold text-slate-500">
              $ {product.price}
            </div>
          </div>
          <p className="font-light xl:font-normal text-sm xl:text-lg">
            {product.description}
          </p>
          <p className="xl:text-lg">
            Category:{" "}
            <Link href={`/products/${product.category.id}`}>
              <a className="p-1 px-2 rounded-md border-2 font-bold">
                {product.category.name}
              </a>
            </Link>
          </p>
          <Counter count={count} setCount={setCount} />
          <div className="flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-lg bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-lg border border-slate-200 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold">Similar Products</h2>
        <div
          ref={scrollRef}
          className="py-3 flex gap-5 overflow-x-scroll scrollbar-hide"
        >
          {similarProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const id = context.query.id;

  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const product = await res.json();

  const sres = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${product.category.id}/products?offset=0&limit=10`
  );
  const similarProducts = await sres.json();

  return {
    props: {
      product,
      similarProducts,
    },
  };
}
