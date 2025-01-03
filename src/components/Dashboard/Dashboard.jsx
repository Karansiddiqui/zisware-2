import React from "react";
import Footer from "../Footer/Footer";

function Dashboard() {
  const users = [
    {
      id: "3",
      name: "User 1",
      image: "/assets/images/users/face10.jpg",
      status: "offline",
    },
    {
      id: "4",
      name: "User 2",
      image: "/assets/images/users/face11.jpg",
      status: "online",
    },
    {
      id: "5",
      name: "User 3",
      image: "/assets/images/users/face12.jpg",
      status: "online",
    },
    {
      id: "6",
      name: "User 4",
      image: "/assets/images/users/face13.jpg",
      status: "online",
    },
  ];

  return (
    <div className="mt-[62px] ">
      <div className="p-5 flex items-center justify-between">
        <h1 className="text-xl ">
          <span className="font-semibold">Home</span> - Dashboard
        </h1>
        <div className="flex gap-[3px] items-center">
          {users.map((user, index) => (
            <div key={index} className="relative hover:cursor-pointer z-0">
              <div
                key={user.id}
                className=" h-9 w-9 rounded-full border-2 border-white"
              >
                <img
                  src={user.image}
                  alt={user.name}
                  className="rounded-full"
                />
              </div>
              <span
                className={`absolute bottom-[-2px] right-[-2px] p-[.3125rem] rounded-full border-[2.5px] border-white ${
                  user.status === "online"
                    ? "bg-green-600"
                    : user.status === "away"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
