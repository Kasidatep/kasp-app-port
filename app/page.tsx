import Content from "@/components/Content";
import HeaderProfile from "@/components/HeaderProfile";
import Nav from "@/components/Nav";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full contents lg:fixed lg:top-0 lg:left-0 lg:w-1/2 h-auto lg:h-screen p-4">
        <div className="lg:pl-24 lg:py-24 flex flex-col justify-between">
          <HeaderProfile />
          <Nav />
          <SocialMedia />
        </div>
      </div>

      <div className="lg:pr-24 lg:py-14 ml-auto w-full lg:w-1/2  lg:h-screen lg:overflow-y-scroll p-4">
        <Content />
      </div>
    </div>
  );
}
