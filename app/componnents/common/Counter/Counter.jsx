import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export const Counter = ({
  sumar,
  restar,
  disabled,
  cantidad,
  stockMax,
  disabledSumar,
}) => {
  return (
    <>
      <div className="GeneralCounterContainer flex items-center justify-between w-[100px] select-none">
        <div
          className={`${
            disabled
              ? "bg-slate-400 cursor-default dark:bg-slate-300 dark:text-slate-900"
              : "cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900"
          }  py-2 px-2  rounded-full `}
          onClick={restar}
        >
          <FaMinus />
        </div>
        <div className="font-[Poppins]">{cantidad}</div>
        <div
          onClick={sumar}
          className={`${
            disabledSumar
              ? "bg-slate-400 cursor-default dark:bg-slate-300 dark:text-slate-900"
              : "cursor-pointer bg-yellow-300 dark:bg-brown-300 dark:text-slate-900"
          }  py-2 px-2  rounded-full `}
        >
          <FaPlus />
        </div>
      </div>
    </>
  );
};
