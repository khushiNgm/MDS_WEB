import React, { useState } from "react";
const PlacesImg = [  
    {
        title: "Buddhist Caves",
        image: "/historical/Buddhist Caves.jpg",
    },
    {
        title: "Dharmarajeshwar Temple",
        image: "/historical/Dharmarajeshwar Temple.jpg",
    },
    {
        title: "Lord Pashupatinath Temple",
        image: "/historical/Pashupatinath Temple.png",
    },
    {
        title: "Teliya Talab",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV030EKSw9TN1lcMsgSznPaNJMSjmjI1ZxA&s",
    },
    {
        title: "Vijay Stambh",
        image: "/historical/Vijay Stambh.jpg",
    },
    {
        title: "Gandhi Sagar Dam",
        image: "/historical/Gandhi Sagar Dam.jpg",
    },
];

// const Places = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedTitle, setSelectedTitle] = useState("");

//     return (
//         <div className="w-screen h-screen bg-[#040815] flex  flex-wrap flex-col items-center justify-center mt-10">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-[80px] mt-10 w-[1000px] h-[600px]">
//                 {PlacesImg.map((place, index) => (
//                     <div key={index} className="border rounded-lg shadow-lg ">
//                         <img
//                             src={place.image}
//                             alt={place.title}
//                             className="w-full h-40 object-cover rounded-[12px] opacity-40 hover:opacity-100 transition-all duration-95 ease-in-out cursor-pointer"
//                             onClick={() => {
//                                 setSelectedImage(place.image);
//                                 setSelectedTitle(place.title);
//                             }}
//                         />
//                         <div className="p-3">
//                             <h3 className="text-xl font-bold text-white text-center">{place.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedImage && (
//                 <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
//                     <div className="relative text-white text-2xl font-bold mb-4">{selectedTitle}</div>
//                     <div className="relative">
//                         <button
//                             className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//                             onClick={() => {
//                                 setSelectedImage(null);
//                                 setSelectedTitle("");
//                             }}
//                         >
//                             ✖
//                         </button>
//                         <img src={selectedImage} alt={selectedTitle} className="max-w-[80vw] max-h-[80vh] rounded-lg" />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Places;



// import React, { useState } from "react";

// const PlacesImg = [
//     {
//         title: "Buddhist Caves",
//         image: "/historical/Buddhist Caves.jpg",
//     },
//     {
//         title: "Dharmarajeshwar Temple",
//         image: "/historical/Dharmarajeshwar Temple.jpg",
//     },
//     {
//         title: "Lord Pashupatinath Temple",
//         image: "/historical/Pashupatinath Temple.png",
//     },
//     {
//         title: "Teliya Talab",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVV030EKSw9TN1lcMsgSznPaNJMSjmjI1ZxA&s",
//     },
//     {
//         title: "Vijay Stambh",
//         image: "/historical/Vijay Stambh.jpg",
//     },
//     {
//         title: "Gandhi Sagar Dam",
//         image: "/historical/Gandhi Sagar Dam.jpg",
//     },
// ];

const Places = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("");

    return (
        <div className="w-full min-h-screen bg-[#040815] flex flex-col items-center justify-center py-10 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-15 w-full max-w-5xl mt-10 ml-4 sm:mt-[70px] lg:ml-[250px]">
                {PlacesImg.map((place, index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={place.image}
                            alt={place.title}
                            className="w-full h-40 sm:h-48 md:h-56 object-cover opacity-40 hover:opacity-100 transition-all duration-200 ease-in-out cursor-pointer"
                            onClick={() => {
                                setSelectedImage(place.image);
                                setSelectedTitle(place.title);
                            }}
                        />
                        <div className="p-3">
                            <h3 className="text-lg sm:text-xl font-bold text-white text-center">{place.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4">
                    <div className="relative text-white text-xl sm:text-2xl font-bold mb-4 text-center">{selectedTitle}</div>
                    <div className="relative w-full max-w-[90vw] sm:max-w-[80vw] max-h-[80vh] flex flex-col items-center">
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                            onClick={() => {
                                setSelectedImage(null);
                                setSelectedTitle("");
                            }}
                        >
                            ✖
                        </button>
                        <img src={selectedImage} alt={selectedTitle} className="w-full max-h-[70vh] object-contain rounded-lg" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Places;
