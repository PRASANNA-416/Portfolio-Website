
import nitk from "./assets/nitk.png";
import Samsung from "./assets/Samsung.avif";
import Fastenal from "./assets/Fastenal.png";
import { DiJava } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiApacheairflow,
  SiJsonwebtokens,
  SiAwslambda,
  SiApachekafka,
  SiAmazondynamodb,
  SiAmazonec2,
  SiAmazoneks,
  SiAmazonredshift,
  SiAmazons3,
  SiApachespark,
  SiSpringboot,
  SiFlask,
  SiSpringsecurity,
  SiDocker,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiSnowflake,
  SiExpress,
  SiNodedotjs
} from "react-icons/si";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

export const resumeLink = "https://drive.google.com/file/d/1EWuacP2jjQvt_XcbCGO3p0ps8VpWCjiq/view?usp=sharing";
export const repoLink = "https://github.com/PRASANNA-416";

export const callToAction = "https://www.linkedin.com/in/prasanna-pm/";

export const navLinks  = [
    {
      id: "skills",
      title: "Skills & Experience",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contactMe",
      title: "Contact Me",
    }
  ];

  export const educationList = [
    {
      id: "education-1",
      icon: nitk,
      title: "National Institute of Technology Karnataka, Surathkal",
      degree: "Bachelor of Technology",
      duration: "December 2020 - April 2024",
      content1: "Major: Electronics And Communication Engineering (CGPA - 9.11/10)",
      content2: "Minor: Computer Science And Engineering (CGPA - 8.0/10)",
    }
  ];

  export const skills  = [
    {
      title: "Programming Languages",
      items: [
        {
          id: "pl-1",
          icon: SiCplusplus,
          name: "C++",
        },
        {
          id: "pl-2",
          icon: SiJavascript ,
          name: "Javascript",
        },
        {
          id: "pl-3",
          icon: SiPython ,
          name: "Python",
        },
        {
          id: "pl-4",
          icon: DiJava,
          name: "Java",
        }
      ]
    },
    {
      title: "Frameworks/ Libraries",
      items: [
        {
          id: "f-1",
          icon: SiReact,
          name: "ReactJS",
        },
        {
          id: "f-2",
          icon:SiNodedotjs ,
          name: "NodeJS"  ,
        },
        {
          id: "f-3",
          icon:SiExpress,
          name: "ExpressJS" ,
        },
        {
          id: "f-4",
          icon: SiMongodb,
          name: "MongoDB",
        },
        {
          id: "f-5",
          icon: SiSpringboot ,
          name: "Springboot",
        },
        {
          id: "f-6",
          icon: SiSpringsecurity,
          name: "Spring Security",
        },
        {
          id: "f-7",
          icon: SiTensorflow,
          name: "Tensorflow",
        },
        {
          id: "f-8",
          icon: SiKeras,
          name: "Keras",
        },
        {
          id: "f-9",
          icon: SiPandas,
          name: "Pandas",
        },
        {
          id: "f-9",
          icon: SiNumpy,
          name: "Numpy",
        },
        {
          id: "f-10",
          icon: SiMysql,
          name: "MySQL",
        },
        {
          id: "f-11",
          icon: SiApacheairflow,
          name: "Airflow",
        },
        {
          id: "f-12",
          icon: SiApachekafka,
          name: "Kafka",
        },
        {
          id: "f-13",
          icon: SiApachespark,
          name: "PySpark",
        },
        {
          id: "f-14",
          icon: SiHtml5,
          name: "HTML",
        },
        {
          id: "f-15",
          icon: SiCss3,
          name: "CSS",
        }
      ]
    },
    {
      title: "Cloud, Platform & Tools",
      items: [
        {
          id: "t-1",
          icon: SiAmazonec2,
          name: "AWS EC",
        },
        {
          id: "t-2",
          icon: SiAmazonredshift,
          name: "AWS RedShift",
        },
        {
          id: "t-3",
          icon: SiAmazoneks,
          name: "AWS EKS",
        },
        {
          id: "t-4",
          icon: SiAmazondynamodb,
          name: "AWS DynamoDB",
        },
        {
          id: "t-5",
          icon: SiAmazons3,
          name: "AWS S3",
        },
        {
          id: "t-6",
          icon: SiAwslambda,
          name: "AWS Lambda",
        },
        {
          id: "t-7",
          icon: SiDocker,
          name: "Docker",
        },
        {
          id: "t-8",
          icon: SiSnowflake,
          name: "Snowflake",
        }
      ]
    }
  ];

  export const experiences = [
    {
      organisation: "Fastenal India",
      logo: Fastenal,
      link: "https://www.fastenal.com/",
      positions: [
        {
          title: "Software Developer",
          duration: "July 2024 - Present",
          content: [
            {
              text: "Letssgo",
              link: "",
            }
          ],
        },
      ],
    },
    {
      organisation: "Samsung R&D Institute India Bangalore",
      logo: Samsung,
      link: "https://research.samsung.com/sri-b",
      positions: [
        {
          title: "Machine Learning Intern",
          duration: "May-July 2023",
          content: [
            {
              text: "Worked in the OnDevice AI team and spearheaded the development of a project to detect Human Activity using images and body Landmarks. Implemented lightweight model architectures like MobileNet and seamlessly integrated modifications to the base architecture of EfficientNet Lite resulting in an improved test accuracy 87 % and a reduced model size to 8 MB. This accomplishment outperformed the SOTA EfficientNet (82 %) from Tensorflow Hub.",
              link: "",
            }
          ],
        },
      ],
    }
  ];

  export const projects = [
    {
      id: "project-100",
      title: "Namma Bengaluru Thindi",
      github: "https://github.com/PRASANNA-416/Namma-Bengaluru-Thindi",
      link: "",
      image: nitk,
      content: "A comprehensive full stack web application for food ordering and management using ReactJS, Springboot and MySQL",
      stack: [
        {
          id: "icon-1",
          icon: SiReact,
          name: "ReactJS"
        },
        {
          id: "icon-2",
          icon: SiSpringboot,
          name: "Springboot"
        },
        {
          id: "icon-3",
          icon: SiSpringsecurity,
          name: "Spring Security"
        },
        {
          id: "icon-4",
          icon: SiMysql,
          name: "MySQL"
        },
        {
          id: "icon-5",
          icon: SiHtml5,
          name: "HTML"
        },
        {
          id: "icon-6",
          icon: SiCss3,
          name: "CSS"
        },
        {
          id: "icon-7",
          icon: SiJsonwebtokens,
          name: "JWT"
        }
      ],
    },
    {
      id: "project-101",
      title: "Object Monitoring Intelligent Video Streaming Surveillance Application",
      github: "https://github.com/Aditya-1208/SurveilHub",
      link: "",
      image: nitk,
      content: "Developed a centralized server-based intelligent video streaming surveillance application for object monitoring",
      stack: [
        {
          id: "icon-1",
          icon: SiFlask ,
          name: "Flask"
        },
        {
          id: "icon-2",
          icon: SiApachekafka ,
          name: "Kafka"
        },
        {
          id: "icon-3",
          icon: SiMysql ,
          name: "MySQL"
        },
        {
          id: "icon-4",
          icon: SiDocker ,
          name: "Docker"
        }
      ],
    },
  ];





export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/prasanna-pm/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/PRASANNA-416",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:prasannapm416@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/pmp8446/",
  },
];

export const aboutMe = {
  name: "P M Prasanna",
  tagLine: "Upcoming Developer @ Fastenal India | Ex SWE Intern @Samsung Research | NITK'24 ",
  intro: "Aspiring software engineer with a strong background in web development, AI, and data engineering. Adept at problem-solving, excellent at teamwork and communication, and committed to continuous learning, with a keen interest in Generative AI and emerging technologies."
};










