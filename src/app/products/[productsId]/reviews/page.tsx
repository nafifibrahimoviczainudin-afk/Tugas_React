export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h1>Detail Review</h1>
      <p>Review #{reviewId} untuk produk #{productId}</p>
    </div>
  );
}