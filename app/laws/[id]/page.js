import NewsCard from "@/src/components/NewsCard";
import { getData } from "@/src/utils/getData";

const page = async ({params}) => {
    const data = await getData(`https://tender-server.vercel.app/api/v1/laws/${params.id}`);

    return (
       <div>
          <title>Tender Trading Inc.</title>
      <meta
        name="description"
        content={`${data?.data?.laws.slice(0, 100)} ...`}
      />
      
      <meta property="og:title" content={data.data.title} />
      <meta
        property="og:description"
        content={`${data?.data?.laws.slice(0, 100)} ...`}
      />
      {/* <meta property="og:image" content="https://i.postimg.cc/ZqKZ1rmY/tti-logo.png" /> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://tander-trading-inc-next.vercel.app/laws/${params.id}`}
      />
         <div className="h-screen w-full flex justify-center items-center overflow-hidden bg-gradient-to-r from-[#91aadf] to-white">
            <NewsCard data={data} id={params.id} redirect={`https://www.tendertradinginc.com/law/details/${params.id}`} />
        </div>
       </div>
    );
};

export default page;