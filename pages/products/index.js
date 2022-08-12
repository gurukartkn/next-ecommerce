import ProductCard from "../../components/ProductCard";

const Products = ({ products }) => {
  return (
    <div>
      <h1 className="pt-5 text-center font-bold text-xl">All Products</h1>
      <div className="py-3 flex flex-col justify-evenly md:flex-row flex-wrap gap-5 items-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

export async function getServerSideProps() {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
