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
    <section className="project-inner">
      <div className="Container">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="section-sub-title">LATEST WORK</h5>
            <h1 className="text-[30px] leading-9 font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3 md:text-5xl lg:text-4xl xl:text-5xl 2xl:w-[90%]">
              Recently Finished Projects <br/> Visit Our Works
            </h1>
          </div>
          <ul>
            <li onClick={handleFilterKeyChange("*")} className="px-6 border">All</li>
            <li onClick={handleFilterKeyChange("construction")} className="px-6 border">
              Construction
            </li>
            <li onClick={handleFilterKeyChange("building")} className="px-6 border">Building</li>
            <li onClick={handleFilterKeyChange("renovation")} className="px-6 border">Renovation</li>
          </ul>
        </div>
        <div className="filter-container">
          <div className="filter-item construction">
            <ProjectMain
              projectImg={ProjectImg1}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
          <div className="filter-item building renovatoin">
            <ProjectMain
              projectImg={ProjectImg2}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
          <div className="filter-item building construction">
            <ProjectMain
              projectImg={ProjectImg3}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
          <div className="filter-item renovation building">
            <ProjectMain
              projectImg={ProjectImg4}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
          <div className="filter-item building construction">
            <ProjectMain
              projectImg={ProjectImg5}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
          <div className="filter-item renovation construction">
            <ProjectMain
              projectImg={ProjectImg6}
              projectSubTilte={"Housing Complex"}
              projectTitle={"Building Construction Design"}
              projectIcon={<FaArrowRightLong />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInner;
