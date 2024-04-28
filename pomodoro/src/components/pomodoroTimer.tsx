import React from 'react';
import { useInterval } from '../hooks/setInterval';

interface IPomodoroTimer {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer({
  defaultPomodoroTimer,
  ...rest
}: IPomodoroTimer) {
  const [mainTime, setMainTime] = React.useState(defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);
  return <div>Olá Mundo {mainTime}</div>;
}
