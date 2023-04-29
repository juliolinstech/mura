import { Alert } from 'react-bootstrap';

function CustomAlert(props) {
  return props.customAlert.show ? (
    <Alert
      variant={props.customAlert.success ? 'success' : 'danger'}
      className="text-center"
      onClose={() =>
        props.setCustomAlert({ ...props.customAlert, show: false })
      }
      dismissible
    >
      {props.customAlert.success ? (
        <Alert.Heading>{props.customAlert.message} Read more on the <a className='reply' target='_blank' href={props.customAlert.address}>Solana Explorer</a>.</Alert.Heading>
      ) : (
        <Alert.Heading>{props.customAlert.message}</Alert.Heading>
      )}
      {props.customAlert.component}
    </Alert>
  ) : (
    <div />
  );
}
export default CustomAlert;