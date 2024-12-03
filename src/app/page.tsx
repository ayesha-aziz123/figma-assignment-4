import ProjectCard from "@/components/ProjectCard";
import { FaArrowDownLong } from "react-icons/fa6";
import project1 from "../../public/images/project1.jpg";
import project2 from "../../public/images/adventure.jpg";
import project3 from "../../public/images/project4.jpg";

export default function Home() {
  return (
    <div className="w-[200vw] lg:w-full">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row items-center lg:px-20 h-[70vh]">
        <div className="lg:w-[45%] lg:my-0 mt-16">
          <h1 className="font-[500]  text-[60px] leading-[58.32px] ">
            Hello, I&apos;m <br /> Ayesha Aziz
          </h1>
        </div>
        <div className="mx-auto px-8 lg:px-0  md:w-[55%] text-[30px] mt-24">
          <p className="font-normal  leading-[37.44px]  text-[#606060]">
            A senior-year design student who trying to specialize in 3D modeling
            & texturing.
          </p>
        </div>
      </div>

      <div className="px-20 -mt-9  mb-36">
        <p className="text-5xl">
          <FaArrowDownLong />
        </p>
      </div>
      {/* 1st Card  */}

      <ProjectCard
        cardNo="01"
        cardTilte=" Food Website"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project"
        cardImage={project1}
      />

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] " />

      {/* 2nd card  */}

      <ProjectCard
        cardNo="02"
        cardTilte="Portfolio"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project "
        cardImage={project2}
      />
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] m-24" />
      {/* 3rd card  */}

      <ProjectCard
        cardNo="03"
        cardTilte="Facebook Clone"
        cardParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="More shots from This Project "
        cardImage={project3}
      />
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] m-24 mb-44" />
    </div>
  );
}
