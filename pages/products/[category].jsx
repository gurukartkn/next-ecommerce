import ProductCard from "../../components/ProductCard";

const CategoryProducts = ({ category, products }) => {
  return (
    <div>
      <h1 className="pt-5 text-center font-bold text-xl">{category.name}</h1>
      <div className="py-3 flex flex-col justify-evenly md:flex-row flex-wrap gap-5 items-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

export async function getServerSideProps(context) {
  const cat = context.query.category;

  const cres = await fetch(`https://api.escuelajs.co/api/v1/categories/${cat}`);
  const category = await cres.json();

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${cat}/products`
  );
  const products = await res.json();

  return {
    props: {
      category,
      products,
    },
  };
}
