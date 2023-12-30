"use client";
import HourEventByCourt from "@/components/CourtEvent";
import CourtHeader from "@/components/CourtHeader";
import DateRange from "@/components/DateRange";
import { useEffect, useState } from "react";

export default function Home() {
  const dayHours = 24;
  const hours = Array(dayHours).fill(0);
  const [topOffset, setTopOffset] = useState<number>(0);
  const [currTime, setCurrTime] = useState<string>("");

  useEffect(() => {
    const ele = document.getElementById("hour-1");
    let timeInterval: NodeJS.Timeout;
    if (ele) {
      timeInterval = setInterval(() => {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const height = ele?.offsetHeight || 0;
        const leaveOffset = height * hour + (height / 60) * minute - 14; // fix slider height
        setCurrTime(
          `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`
        );
        setTopOffset(leaveOffset);
      }, 1000);
    }
    return () => {
      !!timeInterval && clearInterval(timeInterval);
    };
  }, []);
  return (
    <main className="flex h-full w-full flex-1">
      <div className="flex h-full w-full flex-1 flex-col">
        <DateRange></DateRange>
        <CourtHeader></CourtHeader>
        <div className="flex w-full flex-1 overflow-auto flex-col relative">
          {!!currTime && (
            <div
              className={`absolute flex w-full items-center text-red-400 pl-[40px] overflow-hidden z-1000`}
              style={{ top: topOffset }}
            >
              {currTime}{" "}
              <div className="border-b-2 border-[red] w-full h-[4px]"></div>
            </div>
          )}
          {hours.map((e, index) => {
            return (
              <HourEventByCourt
                hour={index + 1}
                eventShow={index + 1 < 2}
              ></HourEventByCourt>
            );
          })}
        </div>
      </div>
    </main>
  );
}
