import React from "react";
import Isotope from "isotope-layout";
import ProjectMain from "../../../Component1/Project/ProjectMain";
import ProjectImg1 from "/assets/images/project/projects01.png";
import ProjectImg2 from "/assets/images/project/projects02.png";
import ProjectImg3 from "/assets/images/project/projects03.png";
import ProjectImg4 from "/assets/images/project/projects04.png";
import ProjectImg5 from "/assets/images/project/projects05.png";
import ProjectImg6 from "/assets/images/project/projects06.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const ProjectInner = () => {
  const isotope = React.useRef(null);
  const [filterKey, setFilterKey] = React.useState("*");

  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current?.destroy();
  }, []);

  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <Breadcamp
        breadCampTitle={"Project"}
        url={"/projectinner"}
        breadCampLink={"Project"}
      />
      <section className="project-inner py-28">
        <div className="Container">
          <div className="flex justify-between flex-col lg:flex-row lg:items-center">
            <div>
              <h5 className="section-sub-title">LATEST WORK</h5>
              <h1 className="text-[26px] sm:text-[32px] leading-9 font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3 md:text-5xl lg:text-4xl xl:text-5xl 2xl:w-[90%]">
                Recently Finished Projects <br /> Visit Our Works
              </h1>
            </div>
            <ul className="flex items-center gap-1 sm:gap-3">
              <li
                onClick={handleFilterKeyChange("*")}
                className="px-2 sm:px-6 py-2 border"
              >
                All
              </li>
              <li
                onClick={handleFilterKeyChange("construction")}
                className="px-2 sm:px-6 py-2 border"
              >
                Construction
              </li>
              <li
                onClick={handleFilterKeyChange("building")}
                className="px-2 sm:px-6 py-2 border"
              >
                Building
              </li>
              <li
                onClick={handleFilterKeyChange("renovation")}
                className="px-2 sm:px-6 py-2 border"
              >
                Renovation
              </li>
            </ul>
          </div>
          <div className="filter-container">
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto construction">
              <ProjectMain
                projectImg={ProjectImg1}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto building renovatoin">
              <ProjectMain
                projectImg={ProjectImg2}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto building construction">
              <ProjectMain
                projectImg={ProjectImg3}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto renovation building">
              <ProjectMain
                projectImg={ProjectImg4}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto building construction">
              <ProjectMain
                projectImg={ProjectImg5}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
            <div className="filter-item md:w-[314px] lg:w-[280px] xl:w-[334px] 2xl:w-auto renovation construction">
              <ProjectMain
                projectImg={ProjectImg6}
                projectSubTilte={"Housing Complex"}
                projectTitle={"Building Construction Design"}
                projectIcon={<FaArrowRightLong />}
              />
            </div>
          </div>
          <div className="text-center pt-16">
            <Link to={"/"}>
              <button className="group primary-button bg-SecondaryColor-0 text-white inline-block font-Yantramanav px-9 py-4 font-medium">
                Load More
                <FaArrowRightLong className="inline-block ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInner;
