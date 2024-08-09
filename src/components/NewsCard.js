"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/tti_logo.png";

const NewsCard = ({ data, id, redirect }) => {
  const router = useRouter();
  router.push(redirect);
  return (
    <div className="">
      <Image
        height={120}
        width={120}
        className="animate-pulse bg-white rounded-full"
        src={logo}
        alt="TTI Logo"
      />
    </div>
  );
};

export default NewsCard;
