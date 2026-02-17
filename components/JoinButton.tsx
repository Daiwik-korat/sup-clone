import Link from "next/link";
export default function Join() {
  return (
    <Link
      href="https://superpower.com/checkout"
      className="cursor-pointer items-center justify-center whitespace-nowrap bg-[#fc5f2b] rounded-full px-6 py-3 text-sm md:text-base font-medium tracking-tight transition-transform hover:scale-110 inline-block"
    >
      Join Today
    </Link>
  );
}
