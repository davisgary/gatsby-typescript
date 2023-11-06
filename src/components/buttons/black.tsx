import React from 'react';

type ButtonProps = {
  link: string;
};

const Button: React.FC<ButtonProps> = ({ link }) => {
  return (
    <div className="flex justify-center mt-4">
      <a href={link} className="text-center">
        <button className="bg-black hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default Button;
