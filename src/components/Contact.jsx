// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaStar } from 'react-icons/fa';
import { useTheme } from '../ThemeContext'; // Impor useTheme

export default function Contact() {
    const { theme } = useTheme(); // Mengakses theme dari ThemeContext
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        rating: 0
    });

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message || formData.rating === 0) {
            alert("Semua kolom harus diisi!");
            return;
        }

        console.log("Data yang dikirim:", formData); // Log untuk debugging
        alert('Form berhasil dikirim!');
        setFormData({ name: '', email: '', message: '', rating: 0 });
    };

    // Fungsi untuk menangani perubahan rating
    const handleRatingChange = (ratingValue) => {
        setFormData({ ...formData, rating: ratingValue });
    };

    return (
        <div className={`px-8 md:px-16 lg:px-24 ${theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'} py-16`} id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Kontak</h3>
                        <p>Silahkan hubungi kontak yang tersedia jika Anda berminat bekerja sama dengan saya</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2' />
                            <a href="mailto:epul7825@gmail.com" className='hover:underline'>epul7825@gmail.com</a>
                        </div>
                        <div className='mb-4'>
                            <FaPhone className='inline-block text-green-400 mr-2' />
                            <a href="https://wa.me/088224368530" className='hover:underline'>+6288224368530</a>
                        </div>
                        <div className='mb-4'>
                            <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                            <span>Kp. Pangkalan, Citeras, Malangbong, Garut, Jawa Barat</span>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Nama</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Nama'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Email'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Pesan</label>
                                <textarea 
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    rows="5"
                                    placeholder='Masukan pesan disini'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="rating" className='block mb-2'>Rating</label>
                                <div className="flex space-x-2" id="rating">
                                    {[1, 2, 3, 4, 5].map((ratingValue) => (
                                        <FaStar 
                                            key={ratingValue}
                                            onClick={() => handleRatingChange(ratingValue)}
                                            className={`cursor-pointer ${formData.rating >= ratingValue ? 'text-yellow-400' : 'text-gray-600'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                            >
                                Kirim
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
