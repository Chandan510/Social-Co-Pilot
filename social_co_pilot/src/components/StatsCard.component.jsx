
import React from "react";

function StatsCard({ color,  heading, message, figures, icon }) {
  

  return (
    <div className="w-1/5 h-fit rounded-md min-h-14 flex flex-col gap-2  items-start p-4 mb-5 " style={{backgroundColor: color}}>
        <div className="w-full text-lg font-semibold flex justify-between  " >
          <div>{heading}</div>
          <div>
            <img src={icon} width={40} />
          </div>
          </div>
        <div className="text-sm font-medium">{message}</div>
        <div className="text-xl font-bold">{(figures/1000).toFixed(2)} k </div>
    </div>
  );
}

export default StatsCard;
