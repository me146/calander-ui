import React, { useEffect, useState } from "react";
import Image from "next/image";
import moment from "moment";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

interface CourtHeaderProps {
  id?: number;
}

export default function DateRange(props: CourtHeaderProps) {
  const [startDate, setStartDate] = useState<moment.Moment>(moment());
  const [selectedDate, setSelectedDate] = useState<moment.Moment>(startDate);
  const [displayedRange, setDisplayedRange] = useState<moment.Moment[]>([]);

  const createDisplayRange = (stamp:moment.Moment) => {
    const array: Array<moment.Moment> = [];
    for (let i = 0; i < 6; i++) {
      array.push(moment(stamp).add(i, "days"));
    }
    setDisplayedRange(array);
  };

  const onDateClick = (moment: moment.Moment) => {
    setSelectedDate(moment);
  };

  const onRangeChange = (val: number) => {
    let updatedMoment = startDate.add(val, 'days');
    setStartDate(updatedMoment);
    createDisplayRange(updatedMoment);
    setSelectedDate(updatedMoment);
  };

  useEffect(() => {
    createDisplayRange(startDate);
  }, []);


  return (
    <div className="flex py-[30px] px-[80px] bg-[#889ab633] items-center gap-2">
      <div className="min-w-[130px] text-black">{selectedDate.format("MMMM, YYYY")}</div>
      <div
        className="flex flex-col px-[10px] justify-center text-center cursor-pointer"
        onClick={() => {
          onRangeChange(-6);
        }}
      >
        <SlArrowLeft></SlArrowLeft>
      </div>
      {displayedRange.map((moment) => {
        const isSelected =
          moment.format("MMMM Do YYYY") === selectedDate.format("MMMM Do YYYY");
        return (
          <div
            className={`flex flex-col min-w-[60px] px-[10px] justify-center text-center cursor-pointer text-black rounded-md ${
              isSelected ? "bg-white" : null
            }`}
            onClick={() => {
              onDateClick(moment);
            }}
          >
            <div className="text-black">{moment.format("ddd")}</div>
            <div className="text-black">{moment.format("DD")}</div>
          </div>
        );
      })}
      <div
        className="flex flex-col px-[10px] justify-center text-center cursor-pointer"
        onClick={() => {
          onRangeChange(6);
        }}
      >
        <SlArrowRight></SlArrowRight>
      </div>
    </div>
  );
}
