import React from "react";
import employeeMSImage from "../assets/Hobby1.jpg";
import bookMSImage from "../assets/Hobby2.jpg";
import Hobby3 from "../assets/Mobile legends.jpeg"
import Hobby4 from "../assets/download.jpeg"
import sertif1 from "../assets/sertif1.jpg"
import sertif2 from "../assets/sertif2.jpg"
import { useTheme } from '../ThemeContext';
const projects = [
  {
    id: 1,
    name: "Bermain Musik",
    technologies: "Musik salah satu Penenang pikiran",
    image: employeeMSImage,
    info: "https://youtu.be/nXOfv4-tT9o?si=UsfFZ43fSD39_Vk5",
  },
  {
    id: 2,
    name: "Fotografi",
    technologies: "Cara untuk mengenang Moment",
    image: bookMSImage,
    info: "https://www.instagram.com/saepulloh_as/profilecard/?igsh=NjRpM25kNGN6Mjlp",
  },
  {
    id: 3,
    name: "Gaming",
    technologies: "Menghibur diri",
    image: Hobby3,
    info: "https://www.youtube.com/live/FFPCumodqv4?si=SeDsRlj38PTBrS-f",
  },
  {
    id: 4,
    name: "Menggambar",
    technologies: "Menuangkan kreatifitas",
    image: Hobby4,
    info: "https://www.youtube.com/live/FFPCumodqv4?si=SeDsRlj38PTBrS-f",
  },
  {
    id: "5",
    name: "Menulis",
    technologies: "Menulis Puisi Terbaik",
    image: sertif1,
    info: "https://www.youtube.com/live/FFPCumodqv4?si=SeDsRlj38PTBrS-f",
  },
  {
    id: "5",
    name: "Juara 5",
    technologies: "Ilmu Fiqih",
    image: sertif2,
    info: "https://www.youtube.com/live/FFPCumodqv4?si=SeDsRlj38PTBrS-f",
  },
  
];

const Projects = () => {
  const { theme} = useTheme();
  return (
    <div className={` px-8 md:px-16 lg:px-24 ${theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center py-16'`}  id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Hobby</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.info} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Info</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
