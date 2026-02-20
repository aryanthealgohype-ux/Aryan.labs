import quizApp from "@/assets/quiz-app.jpeg";
import bankMgmt from "@/assets/bank-management.jpeg";
import fitness from "@/assets/fitness.png";
import faceAttend from "@/assets/face-attend.jpeg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  image: string;
  details: {
    overview: string;
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "online-quiz-application",
    title: "Online Quiz Application",
    category: "Interactive Web App",
    desc:
      "A fast and interactive online quiz application with real-time questions, scoring, and a clean, user-friendly interface for learning and assessment.",
    tags: ["#ReactJS", "#TailwindCSS", "#Quiz-API"],
    image: quizApp,
    details: {
      overview:
        "This project focuses on delivering a smooth quiz experience with real-time question flow, instant scoring, and a clean interface that helps users stay focused.",
      highlights: [
        "Dynamic quiz flow with timed questions and score tracking",
        "Responsive UI optimized for mobile and desktop",
        "Simple, distraction-free layout for better focus",
      ],
    },
  },
  {
    slug: "banking-management-system",
    title: "Banking Management System",
    category: "Python Application",
    desc:
      "A full-stack banking management system built with Python and Django. Features secure user authentication, account management, transaction history, and real-time notifications.",
    tags: ["#Python", "#Django", "#MySQL", "#Authentication", "#Transactions"],
    image: bankMgmt,
    details: {
      overview:
        "A secure system for managing user accounts, transactions, and notifications with a clean admin interface and clear data flow.",
      highlights: [
        "Authentication, account creation, and transaction history",
        "Structured admin dashboard with role-based management",
        "Clean UI for fast daily banking operations",
      ],
    },
  },
  {
    slug: "fitness-mobile-app-design",
    title: "Fitness Mobile App Design",
    category: "UI/UX Design Concept",
    desc:
      "A clean and modern fitness app UI designed in Figma, featuring workout tracking, heart rate, calories, and progress analytics with a premium dark interface.",
    tags: ["#UI/UX", "#Figma", "#Mobile App", "#Mobile Design"],
    image: fitness,
    details: {
      overview:
        "A mobile-first UI concept designed for fitness tracking, with clear visual hierarchy and a premium dark aesthetic.",
      highlights: [
        "Workout, heart rate, and calorie tracking screens",
        "High-contrast typography for quick scanning",
        "Component-based layout for design scalability",
      ],
    },
  },
  {
    slug: "web-based-face-recognition-system",
    title: "Web-Based Face Recognition System",
    category: "AI & Computer Vision",
    desc:
      "A smart web-based face recognition attendance system for Students, Teachers, and Admin, featuring real-time face scanning, automatic attendance marking, and dashboard analytics.",
    tags: ["#Javascript", "#ReactJS", "#Nodejs", "#Face-API.js", "#Supabase"],
    image: faceAttend,
    details: {
      overview:
        "An attendance solution using face recognition to automate daily check-ins with live scanning and dashboard reporting.",
      highlights: [
        "Real-time face scanning and auto attendance",
        "Role-based dashboards for admin and teachers",
        "Analytics view for attendance summaries",
      ],
    },
  },
];
