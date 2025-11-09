type ProductPageProps = { params: { slug: string } };

async function getData() {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
    tags: ["products"],
    // next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData();
  // console.log(products.data);
  return (
    <div className="grid gap-5 p-5 xl:grid-cols-4 lg:grid-cols-3 place-items-center md:grid-cols-2 ">
      {/* <h1>Product Page</h1> */}
      {products.data.map((product: any) => (
        <div
          key={product.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-600 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="object-cover w-full p-8 rounded-t-lg h-96"
              src={product.image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate dark:text-white">
                {product.title}
              </h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
                Rp.{product.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
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
