export default function Page({ params }: { params: { name: string } }) {
  return <div>hello {params.name}!</div>;
}
