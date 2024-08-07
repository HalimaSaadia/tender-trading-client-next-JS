import { formatDate } from "@/src/utils/formetDate";
import Image from "next/image";
import Link from "next/link";

import { FaRegCalendar } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";

export const generateStaticParams = async () => {
  const res = await fetch(
    `https://test-server.tendertradinginc.com/api/v1/latestnews`
  );
  const blogs = await res.json();

  const result = blogs?.data?.news?.map((blog) => ({
    id: blog._id,
  }));
  return result;
};

async function getSingleNews(id) {
  const res = await fetch(
    `https://test-server.tendertradinginc.com/api/v1/latestnews/${id}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const data = await getSingleNews(params.id);

  return (
    <div>
      <title>TTI</title>
      <meta
        name="description"
        content="Tender Trading Incorporation With Create@Next App"
      />
      <meta property="og:title" content="Tender Trading Incorporation" />
      <meta
        property="og:description"
        content="Tender Trading Incorporation With Create@Next App"
      />
      <meta property="og:image" content={data.data.thumbnail} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://sadia.tendertradinginc.com/news/${params.id}`}
      />
      <div className=" max-w-6xl mx-auto px-2.5 py-10 md:px-10 xl:px-0 text-justify min-h-[90vh] pt-28">
        <Image
          src={data.data.thumbnail}
          alt="thumbnail"
          height={400}
          width={500}
          className=" rounded-lg w-full lg:w-1/2 max-h-[320px] mb-5 float-left mr-10 shadow-2xl border-2"
        />
        <div className="flex-1">
          <h2
            style={{ lineHeight: "1.3" }}
            className="text-3xl  font-semibold text-[#001955] leading-7"
          >
            {data.data.headline}
          </h2>

          <div className="mt-5 flex items-center gap-10">
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-950">
              <MdOutlinePerson size={25} className="text-blue-950" />
              {data.data.author}
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-blue-950">
              <FaRegCalendar size={20} className="text-blue-950" />
              {formatDate(data.data.createdAt, true)}
            </div>
          </div>

          <div className="space-y-10 mt-5">
            <p className="whitespace-pre-line"> {data.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
