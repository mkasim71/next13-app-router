type DetailProductPage = { params: { slug: string } };

export default function DetailProductPage(props: DetailProductPage) {
  const { params } = props;
  console.log(params);
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
