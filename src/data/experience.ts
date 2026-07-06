export interface Experience {
  id: string;
  type: "work" | "organization";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
}

export const workExperience: Experience[] = [
  {
    id: "lab-assistant-se",
    type: "work",
    title: "Software Engineering Lab Assistant",
    organization: "Universitas Diponegoro",
    logo: "/logo-undip.svg",
    startDate: "Feb 2026",
    endDate: "Present",
    description:
      "Assisting students in software engineering practical sessions, grading assignments, and providing guidance on software development best practices.",
  },
  {
    id: "lab-assistant-db",
    type: "work",
    title: "Database Systems Lab Assistant",
    organization: "Universitas Diponegoro",
    logo: "/logo-undip.svg",
    startDate: "Aug 2025",
    endDate: "Dec 2025",
    description:
      "Guided students through database design, SQL queries, and normalization concepts. Evaluated practical assignments and projects.",
  },
  {
    id: "intern-formulatrix",
    type: "work",
    title: "General Software Engineer Intern",
    organization: "Formulatrix Indonesia",
    logo: "/logo-formulatrix.svg",
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    description:
      "Contributed to software development projects, gaining hands-on experience in professional engineering workflows and best practices.",
  },
];

export const organizationExperience: Experience[] = [
  {
    id: "bkti-chair",
    type: "organization",
    title: "Chairman",
    organization: "Biro Konsentrasi Teknologi Informasi",
    logo: "/logo-bkti.svg",
    startDate: "Jun 2025",
    endDate: "Apr 2026",
  },
  {
    id: "documentation-head",
    type: "organization",
    title: "Head of Documentation Division",
    organization: "HME Universitas Diponegoro",
    logo: "/logo-hme.svg",
    startDate: "2024",
    endDate: "2025",
  },
  {
    id: "communication-head",
    type: "organization",
    title: "Head of KOMINFO Division",
    organization: "MAHADISA",
    logo: "/logo-mahadisa.svg",
    startDate: "2024",
    endDate: "2025",
    description: "Best Division Award 2024/2025",
  },
  {
    id: "fst-staff",
    type: "organization",
    title: "Staff of Internal Champion Team",
    organization: "Forum Studi Teknik",
    logo: "/logo-fst.svg",
    startDate: "2023",
    endDate: "2024",
  },
];

export interface Honor {
  title: string;
  event: string;
  year: number;
}

export const honors: Honor[] = [
  {
    title: "Mentor Research Champion Academy",
    event: "Universitas Diponegoro",
    year: 2025,
  },
  {
    title: "Mentor Research Champion Academy",
    event: "Universitas Diponegoro",
    year: 2024,
  },
  {
    title: "3rd Winner Diponegoro Science Competition",
    event: "Universitas Diponegoro",
    year: 2023,
  },
  {
    title: "3rd Champion KTI Forum Studi Teknik",
    event: "Universitas Diponegoro",
    year: 2023,
  },
  {
    title: "Honorable Mention LKTIN Udayana Education Festival",
    event: "Universitas Udayana",
    year: 2023,
  },
];
