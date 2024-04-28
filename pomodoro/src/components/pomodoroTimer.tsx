import React from "react";

interface IPomodoroTimer{
  defaultPomodoroTimer : number ;
}

export function pomodoroTimer({defaultPomodoroTimer ,...rest}:IPomodoroTimer){

  return <div>Olá Mundo</div>

}
