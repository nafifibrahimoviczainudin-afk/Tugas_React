export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  return (
    <div>
      <h1>Detail Blog</h1>
      <p>Kamu sedang membaca blog: {blogId}</p>
    </div>
  );
}