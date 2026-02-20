"use client";
interface Props {
  star: number;
  title: string;
  customerName: string;
  content: string;
  isVerified?: boolean;
}

function TestimonialCard({
  star,
  title,
  customerName,
  content,
  isVerified,
}: Props) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < star ? "text-green-500" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="w-75 sm:w-[320px] md:w-87.5 lg:w-95 shrink-0 select-none bg-white p-6 rounded-lg border border-transparent hover:border-gray-100 transition-colors h-full">
      <div className="flex flex-col h-full justify-between gap-6">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">{renderStars()}</div>
          <div className="flex items-center gap-1.5 opacity-80">
            <svg
              className={`w-5 h-5 fill-current ${isVerified ? "text-gray-800" : "text-gray-400"}`}
              viewBox="0 0 24 24"
            >
              {isVerified ? (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              ) : (
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
              )}
            </svg>
            <span className={`text-sm font-medium ${isVerified ? "text-gray-500" : "text-gray-400"}`}>
              {isVerified ? "Verified" : "Unverified"}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-base font-semibold text-gray-900 leading-tight"
          />
          <p
            dangerouslySetInnerHTML={{ __html: content }}
            className="text-[0.925rem] text-gray-700 leading-relaxed"
          />
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-400 font-medium">{customerName}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;