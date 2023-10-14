import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>Please check your e-Mail</p>
    </div>
  );
};

export default ConfirmedBooking;
