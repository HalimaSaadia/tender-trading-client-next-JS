import { getData } from "@/src/utils/getData";
import Link from "next/link";

const page = async () => {
  const data = await getData(`https://tender-server.vercel.app/api/v1/laws`);


  return (
    <div>
      <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.data.laws.map((item) => (
          <div key={item?._id}>
            <Link href={`laws/${item?._id}`}>
              {" "}
              <h1 className="text-2xl">{item?.title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
