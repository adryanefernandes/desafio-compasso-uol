import {Card, Name, Description} from "./CardStarredStyled"

function CardStarred(props) {

  return <Card>
    <Name>{props.name}</Name>
    <p>{props.nameCreator}</p>
    <Description>{props.description}</Description>
    <p>{props.lenguage}</p>
  </Card>
}

export default CardStarred