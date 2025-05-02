import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Text*/}
          <div className="text-center xl:text-left">
            <span>Software Developer</span>
            <h1 className="h1"> 
              Hello I'm <br /> <span className="text-teal-500"> Nabil Adib </span>
            </h1>
            <h1 className="bg-red-500">Test Heading</h1>
          </div>
          {/*Button*/}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
