import React from 'react';
import './App.css';
import { PomodoroTimer } from './components/pomodoroTimer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTimer={10} />
    </div>
  );
}

export default App;
