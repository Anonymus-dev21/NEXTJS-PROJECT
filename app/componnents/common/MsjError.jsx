"use client";
export const ErrorMsj = ({ msj }) => {
  return (
    <>
      <div className="w-full min-h-dvh flex items-center justify-center text-center">
        <div className="w-full text-center">
          <span className="font-[Poppins] font-bold text-[100px] text-brown-900 dark:text-brown-300">
            UPS
          </span>
          <p className="font-[Urbanist] font-medium text-gray-900 dark:text-white tracking-wide text-[23px]">
            {msj}
          </p>
        </div>
      </div>
    </>
  );
};
