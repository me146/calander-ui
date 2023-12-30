import React from "react";
import Image from "next/image";
import EventCard from "./EventCard";

interface CourtEventProps {
  hour: number;
  eventShow: boolean;
}

export default function HourEventByCourt(props: CourtEventProps) {
  const totalCourts = 8;
  let courts = Array(totalCourts + 1).fill({ id: 0, isVisible: false });
  return (
    <div className="flex h-full w-full flex-1">
      {courts.map((e, index) => {
        if (index === 0) {
          return (
            <div
              id={`hour-${props.hour}`}
              className="flex min-h-[50px] min-w-[80px] flex-col bg-[#889ab633] justify-end text-center"
            >
              {props.hour} : 00
            </div>
          );
        } else {
          return (
            <div className="flex w-full min-h-[50px] flex-col border-r-2 border-l-2 justify-center text-center">
              {props.eventShow && index == 1 ? (
                <div className="flex flex-1 h-full w-full border-b-2"><EventCard /></div>
              ) : (
                <>
                  <div className="flex flex-1 h-full w-full border-b-2 border-[#f6f4f4]"></div>
                  <div className="flex flex-1 h-full w-full border-b-2"></div>
                </>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
