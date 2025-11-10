export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div className="mt-16">{children}</div>
      <div className="mt-5 flex gap-5">
        {products}
        {analytics}
      </div>
      <div className="mt-5">{payments}</div>
    </div>
  );
}
