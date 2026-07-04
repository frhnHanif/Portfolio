export interface SkillCategory {
  category: string;
  items: string[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Technical Expertise",
    items: [
      "Software Engineering",
      "IoT Systems",
      "Embedded Systems",
      "Computer Networking",
      "Linux Administration",
      "Database Management",
    ],
  },
];

export const toolsAndLanguages: SkillCategory[] = [
  {
    category: "Languages & Tools",
    items: [
      "PHP",
      "Python",
      "C/C++",
      "SQL",
      "Laravel",
      "MySQL",
      "MQTT",
      "Git",
      "Figma",
      "UML",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { name: "Red Hat System Administration I", issuer: "Red Hat" },
  { name: "Cisco Industrial Networking Essentials", issuer: "Cisco" },
  { name: "Cisco Python Essentials", issuer: "Cisco" },
  { name: "Cisco C Essentials", issuer: "Cisco" },
  { name: "Laravel Framework & PHP", issuer: "Coding Studio" },
  { name: "MySQL Database Fundamentals", issuer: "Coding Studio" },
];
