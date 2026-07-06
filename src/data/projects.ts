export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "simaggot",
    title: "SiMaggot",
    description:
      "Smart Vertical Biopond IoT System — ESP32-based data acquisition + Laravel/MySQL dashboard for real-time monitoring and aquaculture management.",
    longDescription:
      "An integrated IoT system for vertical biopond aquaculture. Uses ESP32 microcontrollers for real-time data acquisition (water quality sensors, temperature, pH), connected via MQTT to a Laravel/MySQL dashboard. Features include real-time monitoring, data visualization, digital logbook, and full aquaculture cycle management.",
    techStack: ["ESP32", "Arduino Mega", "Laravel", "MySQL", "IoT", "PHP"],
    image: "/projects/simaggot.png",
    link: "https://simaggot.undip.us",
    github: "https://github.com/frhnHanif/TA-SiMaggot",
    featured: true,
  },
  {
    id: "ecoscale",
    title: "EcoScale",
    description:
      "IoT Waste Monitoring System — ESP32 + MQTT + load-cell sensors with Laravel dashboard for data visualization.",
    longDescription:
      "A waste monitoring system powered by ESP32 microcontrollers with load-cell sensors. Data is transmitted via MQTT protocol to a Laravel-based dashboard for real-time visualization and analytics of waste levels.",
    techStack: ["ESP32", "MQTT", "Laravel", "Sensors", "IoT"],
    image: "/projects/ecoscale.png",
    link: "https://ecoscale.undip.us/dashboard",
    github: "https://github.com/frhnHanif/smart_scale_project",
    featured: false,
  },
  {
    id: "ngudia-wilujeng",
    title: "Ngudia Wilujeng",
    description:
      "Waste Bank Management System — Laravel-based platform for inventory tracking and financial transaction management.",
    longDescription:
      "A comprehensive waste bank platform built with Laravel for managing waste inventory, tracking financial transactions, and facilitating community-based waste management operations.",
    techStack: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    image: "/projects/ngudia-wilujeng2.png",
    link: "#",
    github: "https://github.com/frhnHanif/bank-sampah",
    featured: false,
  },
];
