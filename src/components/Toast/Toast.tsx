import { useEffect, useState } from 'react';

export const Toast = ({
  text,
  duration = 5000,
}: {
  text: string | null;
  duration?: number;
}) => {
  const [visible, setVisible] = useState(!!text);
  useEffect(() => {
    if (text) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [text, duration]);
  return (
    <div
      className={`toast toast-top toast-center ${visible ? 'flex' : 'hidden'}`}>
      <div className="alert alert-error">
        <span>{text}</span>
      </div>
    </div>
  );
};
