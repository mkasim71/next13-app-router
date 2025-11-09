type ProductPageProps = { params: { slug: string } };

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

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
  const data = getData();
  console.log("Data:", data);
  return (
    <>
      <h1>Detai Product Page</h1>
      {params.slug && (
        <>
          <p>Segment 1 : {params.slug[0]}</p>
          <p>Segment 2 : {params.slug[1]}</p>
          <p>Segment 3 : {params.slug[2]}</p>
        </>
      )}
    </>
  );
}
