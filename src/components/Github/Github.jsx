import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Github() {
  const [data, SetData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/PranshuRaj1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetData(data);
      });
  }, []);
  return (
    //{data.followers}
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <br />
      <br />
      <br />
      <p>Please follow my Github</p>
      <div>
        <NavLink
          to="https://github.com/PranshuRaj1"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-blue-500"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          Click here to follow !!
        </NavLink>
      </div>
      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        height={300}
        style={{ marginTop: "-100px" }}
      />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/PranshuRaj1");
  return response.json();
};
