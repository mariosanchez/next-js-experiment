import React from "react";
import styled from "react-emotion";

const ClockWrapper = styled.div`
  margin: 2rem 0;
  padding: 15px;
  display: inline-block;
  color: #82fa58;
  font: 50px menlo, monaco, monospace;
  background-color: #000;

  &.light {
    background-color: #999;
  }
`;

const pad = n => (n < 10 ? `0${n}` : n);

const format = t => {
  const hours = t.getUTCHours();
  const minutes = t.getUTCMinutes();
  const seconds = t.getUTCSeconds();
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

function Clock({ lastUpdate, light }) {
  return (
    <ClockWrapper className={light ? "light" : ""}>
      {format(new Date(lastUpdate))}
    </ClockWrapper>
  );
}

export default Clock;
