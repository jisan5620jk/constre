import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="Container">
      <div className="py-28 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
          <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
            <CountUp
              start={-29}
              end={30}
              suffix="K+"
              className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
            />
            <h6 className="font-Archivo font-light text-[#575f66] mt-2">
              Project Completed
            </h6>
          </div>
        </div>
        <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
          <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
            <CountUp
              start={-9}
              end={10}
              suffix="K+"
              className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
            />
            <h6 className="font-Archivo font-light text-[#575f66] mt-2">
              Happy Customers
            </h6>
          </div>
        </div>
        <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
          <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
            <CountUp
              start={-97}
              end={98}
              suffix="K+"
              className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
            />
            <h6 className="font-Archivo font-light text-[#575f66] mt-2">
              Expert Engineers
            </h6>
          </div>
        </div>
        <div className="group bg-[url('/assets/images/counter/counter_shape.png')] bg-no-repeat overflow-hidden bg-cover p-4 z-10 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-0 after:border-SecondaryColor-0 after:z-10 after:transition-all after:duration-500 hover:after:border-[16px]">
          <div className="text-center py-8 z-10 relative bg-white before:absolute before:-bottom-14 before:-right-14 before:w-[34px] before:h-[34px] before:transition-all before:duration-700 before:bg-[url(/assets/images/feature/feature-shape.png)] group-hover:before:bottom-0 group-hover:before:right-0 ">
            <CountUp
              start={-9.4}
              end={9.4}
              suffix="+"
              decimals={1}
              decimal="."
              className="text-5xl font-Yantramanav font-bold text-PrimaryColor-0"
            />
            <h6 className="font-Archivo font-light text-[#575f66] mt-2">
              Avg Clients Ratings
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
