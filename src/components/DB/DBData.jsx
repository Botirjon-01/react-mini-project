const DBData = [
  {
    id: 1,
    title: "Html Darslar",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F36T4JDuzTpeUtdsuh8cC&w=1920&q=75",
    pagelink: "/lessonhtml",
  },

  {
    id: 2,
    title: "Css Darslar",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F36T4JDuzTpeUtdsuh8cC&w=1920&q=75",

    pagelink: "/lessoncss",
  },
  {
    id: 3,
    title: "JavaScript darslari",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3gf746AKRbWNjB8OCoEB&w=1920&q=75",

    pagelink: "/lessonjs",
  },
  {
    id: 4,
    title: "ReactJS darslari ",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F65rcPxsLT9ysJDisXF80&w=1920&q=75",
    pagelink: "/lessonreact",
  },
  {
    id: 5,
    title: "english Darslar",
    link: "data:image/jpeg;base64,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",
    pagelink: "/lessonenglish",
  },
  { id: 6, title: "sass Darslar", link: "yotube", pagelink: "/cours" },
  {
    id: 7,
    title: "NodeJS darslari ",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmDcwhbguQpyM74jb18M5&w=1920&q=75",
    pagelink: "/lessonengnode",
  },
  {
    id: 8,
    title: "ExpressJS darslari",
    link: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FVoWU1Ks6RiycwcnZe8LZ&w=1920&q=75",
    pagelink: "/lessonengexpress",
  },
];




export default DBData;
