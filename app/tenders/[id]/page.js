import NewsCard from "@/src/components/NewsCard";
import { getData } from "@/src/utils/getData";

const page = async ({ params }) => {
  const data = await getData(
    `https://tender-trading-server.vercel.app/api/v1/tenders/${params?.id}`
  );

  return (
    <div>
      <title>Tender Trading Inc</title>
      <meta name="description" content="Tender Trading Inc." />

      <meta property="og:title" content={` ${data?.data?.description}`} />
      <meta
        property="og:description"
        content={`Organization Name: ${data?.data?.organizationName.slice(
          0,
          100
        )} ...`}
      />

      <meta
        property="og:url"
        content={`https://tander-trading-inc-next.vercel.app/tenders/${params?.id}`}
      />
      <meta property="og:type" content="website" />
      <div className="h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-r from-[#91aadf] to-white">
        <NewsCard
          id={params.id}
          data={data}
          redirect={`https://www.tendertradinginc.com/tenders/${params?.id}`}
        />
      </div>
    </div>
  );
};

export default page;
