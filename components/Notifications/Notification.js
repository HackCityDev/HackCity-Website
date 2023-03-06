import { useEffect, useReducer } from "react";
import styles from "./Notification.module.css";
import { IoIosClose } from "react-icons/io";

const notificationReducer = (state) => {
  state = "Please make a selection";
  return state;
};

const Notification = ({ close, action }) => {
  const [state, dispatch] = useReducer(notificationReducer, "");
  useEffect(() => {
    dispatch(state);
  }, [action]);

  return (
    <div className={styles.notification}>
      <div className={styles.notifyModal}>
        <p>{state}</p>
        <span onClick={() => close(false)}>
          <IoIosClose />
        </span>
      </div>
    </div>
  );
};

export default Notification;
