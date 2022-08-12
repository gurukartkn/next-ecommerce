import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg bg-white shadow-md min-w-[304px] max-w-[320px] h-[380px]">
      <Link href={`/product/${product.id}`} key={product.id}>
        <a className="flex flex-col justify-center">
          <Image
            src={
              product.images == "null"
                ? `https://api.lorem.space/image/any?w=640&h=480&r=${Math.random()}`
                : product.images[0]
            }
            alt={product.title}
            className="rounded-t-lg"
            width={640}
            height={480}
          />
        </a>
      </Link>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex justify-between border-b border-slate-200">
          <h1 className="flex-auto text-lg font-semibold text-slate-900 w-2/3">
            {product.title}
          </h1>
          <div className="text-lg font-semibold text-slate-500">
            $ {product.price}
          </div>
        </div>

        <div className="flex justify-between space-x-4">
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
  );
};

export default ProductCard;
