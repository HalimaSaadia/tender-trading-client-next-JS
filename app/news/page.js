import Image from "next/image";
import Link from 'next/link'

async function getData() {
  const res = await fetch("https://tender-server.vercel.app/api/v1/latestnews");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const data = await getData();
  const news = data.data.news;

  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

    {news.map(item => (
      <div key={item?._id}>
        <Image src={item?.thumbnail} alt="Picture of the author" width={400} height={300} />
        <h1 className="text-2xl">{item?.headline}</h1>
        <Link href={`news/${item?._id}`}>Details</Link>
      </div>
    ))}
  </div>
  );
};

export default page;
