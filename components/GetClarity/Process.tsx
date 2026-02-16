import Steps from "./Steps";

export default function Process() {
  return (
    <div className="min-h-screen bg-[#ffffff] rounded-3xl py-20 max-[991px]:-mt-30 z-10">
      <div className="w-full mt-15 mb-10">
        <div className="flex flex-col items-center">
          <p className="text-center font-semibold opacity-60 text-[1.125rem]">
            No more wait times for your health
          </p>
          <p className="text-center font-semibold text-3xl lg:text-6xl md:text-4xl sm:text-3xl">
            Get clarity at every step
          </p>
        </div>
      </div>

      <section className="relative items-center">
        <Steps />
      </section>
    </div>
  );
}
