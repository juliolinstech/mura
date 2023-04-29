
import { Button, Spinner } from 'react-bootstrap';

function Loading() {
  return (
    <Button className="submitButton" variant="primary" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </Button>
  );
}
export default Loading;