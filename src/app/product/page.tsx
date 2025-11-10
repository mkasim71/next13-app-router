import { getData } from "@/services/products";
import Link from "next/link";

type ProductPageProps = { params: { slug: string } };

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:4000/products");
  // console.log(products);
  return (
    <div className="grid gap-5 px-5 pt-28 xl:grid-cols-4 lg:grid-cols-3 place-items-center md:grid-cols-2">
      {/* <h1>Product Page</h1> */}
      {products.map((product) => (
        <Link
          href={`/product/detail/${product.id}`}
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-600 dark:border-gray-700"
        >
          <img
            className="object-cover w-full p-8 rounded-t-lg h-96"
            src={product.image}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate dark:text-white">
              {product.title}
            </h5>

            <div className="flex items-center justify-between">
              <span className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                Rp.{product.price}
              </span>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
              >
                Add to cart
              </button>
            </div>
          </div>
        </Link>
      ))}
      {params.slug && (
        <>
          <p>Segment 1 : {params.slug[0]}</p>
          <p>Segment 2 : {params.slug[1]}</p>
          <p>Segment 3 : {params.slug[2]}</p>
        </>
      )}
    </div>
  );
}
