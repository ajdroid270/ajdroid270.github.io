import { useState, useEffect } from "react";
import dayjs from "dayjs";

const format = "ddd DD MMM h:mm A";

const TimeDisplay = ({ className }) => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className={className}>{dayjs(time).format(format)}</div>;
};
export default TimeDisplay;
