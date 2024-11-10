import NewsCard from "@/src/components/NewsCard";
import { getData } from "@/src/utils/getData";

async function getSingleNews(id) {
  const res = await fetch(
    `https://tender-server.vercel.app/api/v1/services/service-details/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  // const res = await fetch(`https://tender-server.vercel.app/api/v1/services/service-details/${params.id}`, { cache: 'no-store'})
  // const data = await res.json()
  // console.log(data)

  const data = await getSingleNews(params.id);
  return (
    <div>
      <title>Tender Trading Inc</title>
      {/* <meta name="description" content="Tender Trading Inc." /> */}
      <meta
        name="description"
        content={`${data?.data?.description.slice(0, 100)}`}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta property="og:title" content={` ${data?.data?.title}`} />
      <meta
        property="og:description"
        content={`${data?.data?.description?.slice(0, 100)} ...`}
      />
      <meta property="og:image" content={data?.data?.thumbnail} />
      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content={`https://tander-trading-inc-next.vercel.app/services/${params.id}`}
      />
      <div className="h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-r from-[#91aadf] to-white">
        <NewsCard
          id={params.id}
          data={data}
          redirect={`https://www.tendertradinginc.com/service-details/${params.id}`}
        />
      </div>
    </div>
  );
};

export default page;
