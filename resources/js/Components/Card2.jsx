import React from "react";

const Card2 = () => {
    return (
        <div className="md:w-[80vw] w-[300px] h-[400px] bg-white text-blue-500 rounded-lg shadow-lg flex flex-col overflow-hidden">
            <img
                src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?cs=srgb&dl=pexels-fabianwiktor-994605.jpg&fm=jpg"
                alt="Card Image"
                className="w-full h-full object-cover rounded-t-lg"
            />
        </div>
    );
};

export default Card2;
