import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="max-w-xs w-36 rounded overflow-hidden shadow-lg m-2">
                        <img className="w-full h-36 object-cover" src="/src/assets/images.png" alt="Profile" />
                        <div className="px-2 py-1">
                            <div className="font-bold text-sm mb-1">John Doe</div>
                            <p className="text-gray-700 text-xs">Phone: (123) 456-7890</p>
                            <p className="text-gray-700 text-xs">Email: john.doe@example.com</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
