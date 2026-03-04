import React from "react";

const IdCard = ({ name, role, department, avatar, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 border border-gray-200">
      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <h2 className="mt-4 text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="mt-4 text-sm text-gray-600">
          <p><span className="font-semibold">ID:</span> {id}</p>
          <p><span className="font-semibold">Dept:</span> {department}</p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;