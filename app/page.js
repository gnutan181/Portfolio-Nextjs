import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
export default function Home() {
  return (
<section className="h-full">
  <div className="container mx-auto h-full ">
<div className="flex flex-col xl:flex-row items-center justify-evenly xl:pt-8 xl:pb-24">
  {/* text */}
  <div className="text-center xl:text-left order-2 xl:order-none">
    <span className="text-xl">Software developer</span>
    <h1 className="text-[48px] md:text-[80px] leading-[1.1] font-semibold">hello I'm <br /><span className="text-accent" >Nutan Gupta</span>
    </h1>
    <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in varios pro gramming languages and technologies.</p>

    <div className="flex flex-col xl:flex-row items-center gap-8">
      <Button variant="outline" size="lg" 
      className='uppercase flex items-center gap-2'
      >
        <span>Download Cv</span>
        <FiDownload className="text-xl" />
      </Button>
      <div className="mb-8 xl:mb-0">
        <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
      </div>
    </div>
  </div>
  {/* photo */}
  <div>
    <div className="order-1 xl:order-none mb-8 xl:mb-0"></div>
    <Photo />
  </div>

</div>
    </div>
    <Stats />
</section>

  );
}
