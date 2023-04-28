import { Alert } from 'react-bootstrap';

function CustomAlertCollection(props) {
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
        <Alert.Heading>Success! Click <a className='reply' target='_blank' href={props.customAlert.message}>here</a> to access the report</Alert.Heading>
      ) : (
        <Alert.Heading>{props.customAlert.message}</Alert.Heading>
      )}
      {props.customAlert.component}
    </Alert>
  ) : (
    <div />
  );
}
export default CustomAlertCollection;