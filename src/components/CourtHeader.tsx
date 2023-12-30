import React from "react";
import Image from "next/image";

interface CourtHeaderProps {
  id?: number;
}

export default function CourtHeader(props: CourtHeaderProps) {
  const totalCourts = 8;
  const courts = Array(totalCourts + 1).fill(0);
  return (
    <div className="flex pr-[15px]">
      {courts.map((e, index) => {
        if (index === 0) {
          return (
            <div className="flex min-h-[50px] w-[80px] bg-[#889ab633] flex-col justify-end text-center">
              {/* Not to remove */}
            </div>
          );
        } else {
          return (
            <div className="flex w-full min-h-[50px] flex-col flex-1 border-2 justify-center text-center">
              Court {index}
            </div>
          );
        }
      })}
    </div>
  );
}
