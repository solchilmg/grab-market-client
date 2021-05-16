import React from "react";

function TimerComponet() {
  const [time, settime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  function updateTime() {
    settime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponet;
