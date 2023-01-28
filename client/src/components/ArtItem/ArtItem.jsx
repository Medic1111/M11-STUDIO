import { Slide } from "react-awesome-reveal";
import ArtItemBtn from "../ArtItemBtn/ArtItemBtn";
import ArtItemImg from "../ArtItemImg/ArtItemImg";
import ArtItemDes from "../ArtItemDes/ArtItemDes";
import ArtItemWrapper from "../ArtItemWrapper/ArtItemWrapper";

const ArtItem = ({ obj, index }) => {
  return (
    <ArtItemWrapper>
      <ArtItemImg index={index} obj={obj} />
      <Slide direction={index % 2 ? "left" : "right"}>
        <ArtItemDes description={obj.description} index={index} />
        <ArtItemBtn content={obj.price} index={index} id={obj.id} />
      </Slide>
    </ArtItemWrapper>
  );
};

export default ArtItem;
