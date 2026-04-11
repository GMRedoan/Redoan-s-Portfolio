import React, { useState } from 'react';
import { TbLivePhotoFilled } from 'react-icons/tb';

const achievements = [
    {
        id: 1,
        title: "Coming soon",
        image: "https://i.ibb.co.com/LXRJqCBj/coming-soon-background-with-focus-light-effect-design-1017-27277.avif",

    },
    {
        id: 2,
        title: "Programming Hero Web Development",
        image: "https://i.ibb.co.com/VcK1xDFX/programming-hero-certificate-page-0001.jpg",
    },
    {
        id: 3,
        title: "Coming soong",
        image: "https://i.ibb.co.com/LXRJqCBj/coming-soon-background-with-focus-light-effect-design-1017-27277.avif",
    },
];

const Achievement = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id='achievement-section' className="py-16 md:mx-16">
            <div data-aos="zoom-in-down" className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
                    Achievements
                </h2>

                <div
                    data-aos="zoom-in"
                    className="w-36 md:w-60 h-1 mx-auto mt-2 bg-lime-500 rounded-full"
                />

                <p className="py-4 pb-6 text-gray-200">
                    Certifications & Professional Achievements
                </p>
            </div>

            {/* Certificate Grid */}
            <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-950 border border-white/20 rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(132,204,22,0.18)] hover:shadow-[0_30px_50px_rgba(132,204,22,0.25)]"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-white">
                                {item.title}
                            </h3>

                            {/* Optional Button */}
                            <button
                                onClick={() => setSelectedImage(item.image)}
                                className="btn px-4 text-white 
                          bg-linear-to-r from-emerald-800 to-lime-500 
                          border-none shadow-lg rounded-3xl
                          hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] transition-all ease-out duration-300
                          hover:scale-[1.03] w-full mt-6">
                                View Certificate
                                <TbLivePhotoFilled className="animate-pulse text-lg text-black" />

                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white hover:text-red-500 text-3xl font-bold cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Full Image */}
                        <img
                            src={selectedImage}
                            alt="Certificate"
                            className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievement;