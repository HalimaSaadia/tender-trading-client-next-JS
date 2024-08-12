"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/tti_logo.png";

const NewsCard = ({ data, id, redirect }) => {
  console.log(data.data.thumbnail)
  const router = useRouter();
  router.push(redirect);
  return (
   
    <div className="">
      <Image
        height={120}
        width={120}
        className="animate-pulse bg-white rounded-full"
        src={data.data.thumbnail}
        alt="TTI Logo"
      />
    </div>
  );
};

export default NewsCard;
