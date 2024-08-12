import NewsCard from "@/src/components/NewsCard";
import { getData } from "@/src/utils/getData";



const page = async ({ params }) => {
  const data = await getData(
    `https://tender-server.vercel.app/api/v1/services/service-details/${params.id}`, {
     cache: 'no-store'
    }
  )
console.log(data?.data?.thumbnail)

  return (
    <div>
      <title>Tender Trading Inc</title>
      {/* <meta name="description" content="Tender Trading Inc." /> */}
      <meta name="description" content={`${data?.data?.description.slice(0, 100)}`} />
      <meta property="og:image" content={data?.data?.thumbnail} />
      <meta property="og:title" content={` ${data?.data?.title}`} />
      <meta
        property="og:description"
        content={`${data?.data?.description?.slice(
          0,
          100
        )} ...`}
      />

      <meta
        property="og:url"
        content={`https://tander-trading-inc-next.vercel.app/services/${params.id}`}
      />
      <meta property="og:type" content="website" />
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
