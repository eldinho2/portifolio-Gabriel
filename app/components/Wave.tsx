import React from 'react';

type WaveProps = {
  height: number;
};

const Wave = ({ height }: WaveProps) => {
  return (
    <div className="bg-[#b6b853] w-[100px] rounded-b-full select-none pointer-events-none" style={{ height }} />
  );
};

export default Wave;