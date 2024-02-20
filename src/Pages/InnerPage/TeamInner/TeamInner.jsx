import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import TeamMain from "../../../Component1/TeamMember/TeamMain";


const TeamInner = () => {
  const teamData = [
    {
      id: 1,
      teamBoxImg: "/assets/images/team/team01.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
    {
      id: 2,
      projectImg: "/assets/images/team/team02.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
    {
      id: 3,
      projectImg: "/assets/images/team/team03.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
    {
      id: 4,
      projectImg: "/assets/images/team/team03.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
    {
      id: 5,
      projectImg: "/assets/images/team/team03.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
    {
      id: 6,
      projectImg: "/assets/images/team/team03.jpg",
      teamBoxTitle: "John D. Alexon",
      teamBoxDesignation: "Enteriar Designer",
      teamBoxIcon: <FaLinkedinIn />,
      teamBoxIcon2: <FaPinterestP />,
      teamBoxIcon3: <FaXTwitter />,
    },
  ];

  return (
    <section className="py-28 bg-[url('/assets/images/team/team-bg.jpg')] bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="section-sub-title">OUR EXPERTS</h5>
          <h1 className="text-[30px] leading-9 md:text-5xl font-bold mb-4 font-Yantramanav text-PrimaryColor-0 pt-3">
            Meet Our Expert Enginears
          </h1>
        </div>
        {teamData.map(
          ({
            id,
            teamBoxImg,
            teamBoxTitle,
            teamBoxDesignation,
            teamBoxIcon,
            teamBoxIcon2,
            teamBoxIcon3,
          }) => {
            return (
              <div key={id} className="grid grid-cols-3 gap-7">
                <TeamMain
                  teamBoxImg={teamBoxImg}
                  teamBoxTitle={teamBoxTitle}
                  teamBoxDesignation={teamBoxDesignation}
                  teamBoxIcon={teamBoxIcon}
                  teamBoxIcon2={teamBoxIcon2}
                  teamBoxIcon3={teamBoxIcon3}
                />
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default TeamInner;
