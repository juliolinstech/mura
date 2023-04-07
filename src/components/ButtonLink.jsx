import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
  return (
    <div className={props.className ? props.className : ''}>
      <Link to={props.to}>
        <Button className="submitButton" variant="primary" type="submit">{props.children}</Button>
      </Link>
    </div>
  );
}
export default ButtonLink;