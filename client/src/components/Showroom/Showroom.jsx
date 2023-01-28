import Header from "../../common/Header/Header";
import ArtList from "../ArtList/ArtList";
import ShowroomWrapper from "../ShowroomWrapper/ShowroomWrapper";

const Showroom = () => {
  return (
    <ShowroomWrapper>
      <Header id="expo" title={"expo"} />
      <ArtList />
    </ShowroomWrapper>
  );
};

export default Showroom;
