import { Button, Card, Col } from "react-bootstrap";
import { cardFix, columnFix } from '../tasklist.module.css';

export const CreateButtonCard = ({ setCreateStatus }) => {
  return (
    <Col lg={4} xs={12}  className={columnFix}>
      <Card className={cardFix}>
        <Card.Body>
          <Button variant="success" onClick={() => setCreateStatus(true)}>
            Create
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
