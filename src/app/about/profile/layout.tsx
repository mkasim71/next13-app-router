export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-5xl font-bold text-center text-indigo-600">Title</h1>
      <div>{children}</div>
    </>
  );
}
