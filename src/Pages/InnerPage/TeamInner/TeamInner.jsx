import TeamInnerMain from "./TeamInnerMain";
import Breadcamp from "../../../Shared/Breadcamp/Breadcamp";

const TeamInner = () => {
  return (
    <>
      <Breadcamp
        breadCampTitle={"Team Member"}
        url={"/teaminner"}
        breadCampLink={"Team Member"}
      />
      <TeamInnerMain />
    </>
  );
};

export default TeamInner;
