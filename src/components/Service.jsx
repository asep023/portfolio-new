import React from "react";
import { useTheme } from '../ThemeContext';
const services = [
  {
    id: "SD",
    title: "SDN 01 Citeras",
    description: "2010 - 2016",
  },
  {
    id: "SMP",
    title: "SMP Al-Ilyas Malangbong",
    description: "2016 - 2019",
  },
  {
    id: "SMK",
    title: "SMK Krija Bhakti Utama",
    description: "2019 - 2022",
  },
  {
    id: "Guru & Operator",
    title: "MDT Sirnarasa",
    description: "2020 - Sekarang",
  },
  {
    id: "Desain Grafis",
    title: "Windu Stamp & Digital Printing",
    description: "2020 - 2021",
  },
  {
    id: "Editor",
    title: "NintySix Studio",
    description: "2019-2022",
  },
];
const Service = () => {
  const { theme} = useTheme();
  return (
    <div className={` px-8 md:px-16 lg:px-24 ${theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center py-16'`} id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Riwayat Pendidikan & Riwayat Pekerjaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
