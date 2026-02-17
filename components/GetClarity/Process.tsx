import Steps from "./Steps";

export default function Process() {
  return (
    <section className="w-full min-h-screen bg-white py-20">
      <div className="w-full mb-16 px-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-center font-semibold opacity-60 text-lg md:text-xl">
            No more wait times for your health
          </p>
          <p className="text-center font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Get clarity at every step
          </p>
        </div>
      </div>

      <Steps />
    </section>
  );
}