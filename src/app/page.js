import Banner from "@/components/Banner";
import Image from "next/image";
import AllRoomsPage from "./rooms/page";
import Features from "@/components/WhyChoose";



export default function Home() {
  return (
    <div>
      <Banner />
      <AllRoomsPage />
      <Features />
     
    </div>
  );
}
