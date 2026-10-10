export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div>
      <h1>Detail Produk</h1>
      <p>Kamu sedang melihat produk dengan ID:100 {productId}</p>
    </div>
  );
}