import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";

export const CardComponent = ({
  todo: { title, description, todo_at, status, _id },
  toggleDeletedTask,
}) => {
  return (
    <Card style={{ width: "300px", minHeight: "300px" }}>
      <div>
        <input type="checkbox" onClick={() => toggleDeletedTask(_id)} />
      </div>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/318/180"
        top
        width="100%"
      />
      <CardBody>
        <Link to={`/project/${_id}`}>
          <CardTitle tag="h5">{title}</CardTitle>
        </Link>
        <CardText>{description}</CardText>
        <Button>Done</Button>
      </CardBody>
    </Card>
  );
};
