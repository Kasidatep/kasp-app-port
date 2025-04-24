import Content from "@/components/Content";
import HeaderProfile from "@/components/HeaderProfile";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full contents lg:fixed lg:top-0 lg:left-0 lg:w-1/2 h-auto lg:h-screen p-4">
        <div>
          <HeaderProfile />
          <Nav />
        </div>
      </div>

      <div className="ml-auto w-full lg:w-1/2  lg:h-screen lg:overflow-y-scroll p-4">
        <Content />
      </div>
    </div>
  );
}
