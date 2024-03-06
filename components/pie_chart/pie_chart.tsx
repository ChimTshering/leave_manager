// import tw from "tailwind-styled-components";
// interface Props {
//   bg_color: string;
// }

export const PieChart = () => {
  return (
    <div className="flex flex-col font-bold text-black/80 text-center relative p-[8px]">
      <div className="p-[20px] relative flex justify-center w-full items-center">
        <svg className="-rotate-90 size-[200px] overflow-visible">
          <circle
            cx="100"
            cy="100"
            r="100"
            className="stroke-tertiary "
            strokeWidth={40}
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="100"
            strokeWidth={40}
            fill="none"
            className="stroke-primary z-10 relative size-[200px]"
            strokeDasharray={100 * 6}
            strokeDashoffset={100 * 6 - (100 * 6 * 80) / 100}
          />
        </svg>
        <span className="absolute  ">
          <p className="text-[26px]">4/20</p>
          <p className="text-[20px] lg:hidden">used</p>
        </span>
      </div>
      <h1 className="text-[22px] py-[8px]">Annual Leave</h1>
    </div>
  );
};
