import { Link } from "react-router-dom";
import styled from "styled-components";
import assetsPath from "../../data/assets-path";

const QuitGame = styled.object`
  position: fixed;
  top: 1em;
  right: 2em;
  width: 1em;
  z-index: 1000;
`

function QuitGameLink(){

  const handleClick = (e: React.MouseEvent<HTMLObjectElement>) => {
    e.stopPropagation();
  };

  return (
    <Link to="/">
      <QuitGame data={assetsPath.cross} onClick={handleClick}/>
    </Link>
  );
}

export default QuitGameLink