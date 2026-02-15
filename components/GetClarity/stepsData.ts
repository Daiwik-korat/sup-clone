export interface DataLayout {
  url: string;
  title: string;
  description: string;
  points: {
    point1: string;
    point2: string;
    point3: string;
  };
  day: string;
}

const Data: DataLayout[] = [
  {
    url: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68f1118730505995cc94b69e_Frame%201597885600%20(1).avif",
    title: "Book your lab test",
    description:
      "Schedule your annual blood draw through the app. Take it in the comfort of your home or at one of 2,000 Quest Diagnostics lab locations.",
    points: {
      point1: "100+ biomarkers in 1 blood draw",
      point2: "Test completed in 15 min",
      point3: "HSA/FSA eligible",
    },
    day: "Today",
  },
  {
    url: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df1a0132ce434cf3c4c4a4_Frame%201597885626-p-500.avif",
    title: "Understand your results",
    description:
      "Your results in a clear, easy-to-read dashboard with each biomarker explained. Easily track your health across tests, to see the impact of your choices.",
    points: {
      point1: "No medical jargon or PDFs",
      point2: "Understand your results",
      point3: "Upload past medical records",
    },
    day: "Day 5",
  },
  {
    url: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df1a2cc8140ea958b0a37c_Frame%201597885625-p-500.avif",
    title: "Take action",
    description:
      "Your personalized health plan gives you step-by-step how to improve your health, through changes in your diet, fitness and lifestyle.",
    points: {
      point1: "Custom supplement plan",
      point2: "Actionable recommendations",
      point3: "Clear next steps",
    },
    day: "Day 10",
  },
];

export default Data;
