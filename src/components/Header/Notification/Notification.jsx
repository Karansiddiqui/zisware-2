import { X, Download, Settings, Check } from "lucide-react";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { PiChecks } from "react-icons/pi";
import { HiArrowDown } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { PiUsersFour } from "react-icons/pi";

function NotificationNewItem({
  user,
  content,
  timestamp,
  icon,
  additionalUsers,
  submitDocuments,
  fileDetails,
  image,
}) {
  const [isChecked, setIsChecked] = useState(true);
  const [value, setValue] = useState("");

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex items-start gap-5 py-4 px-5">
      {user && (
        <a href={`${user.profileAddress}`} className="relative">
          <div className="h-10 w-10 rounded-full">
            <img src={user.image} alt={user.name} className="rounded-full" />
          </div>
          <span
            className={`absolute bottom-[-2px] right-[-2px] p-[.3125rem] rounded-full border-[2.5px] border-white ${
              user.status === "online"
                ? "bg-green-600"
                : user.status == "away"
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          />
        </a>
      )}

      {icon && (
        <div className="relative">
          <div className="h-10 w-10 rounded-full">{icon}</div>
        </div>
      )}
      {image && (
        <div className="relative">
          <img src={image} className=" h-10 w-10 rounded-full" />
        </div>
      )}

      <div className="flex-1 space-y-2">
        <div className="text-sm text-gray-900">{content}</div>

        {submitDocuments && (
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3">
            <button
              onClick={handleCheck}
              className={`flex h-5 w-5 items-center justify-center rounded border ${
                isChecked
                  ? "bg-blue-300 border-blue-300"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              {isChecked && <Check className="h-3.5 w-3.5 text-white" />}
            </button>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Submit personal documents"
              className={`flex-1 bg-gray-100 text-sm outline-none placeholder:text-gray-400 ${
                isChecked ? "text-gray-400 line-through" : "text-gray-700"
              }`}
            />
          </div>
        )}

        {additionalUsers && (
          <div className="flex gap-[3px] items-center">
            {additionalUsers.map((user, index) => (
              <div key={index} className="relative hover:cursor-pointer">
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
            <button className="flex h-8 w-8 items-center justify-center rounded-full border-borderColor border-[1.5px] bg-gray-100 hover:bg-gray-200 text-xs font-medium">
              <IoAddOutline size={20} className="text-gray-600" />
            </button>
          </div>
        )}

        {fileDetails && (
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-gray-100 p-2">
            <div className="rounded p-2 text-red-700">
              <img src="/assets/images/pdf.svg" alt="pdf" className="w-8 h-8" />
            </div>
            <div className="flex-1 text-gray-500">
              <p className="text-sm font-medium">{fileDetails.name}</p>
              <p className="text-xs ">{fileDetails.size}</p>
            </div>
            <button
              variant="ghost"
              size="icon"
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-all duration-200"
            >
              <HiArrowDown size={18} />
            </button>
          </div>
        )}

        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
}

export default function NotificationPanel({
  isNotificationOpen,
  setIsNotificationOpen,
}) {
  const notifications = [
    {
      type: "task",
      user: {
        id: "1",
        name: "James",
        image: "/assets/images/users/face1.jpg",
        status: "online",
        profileAddress: "#",
      },
      submitDocuments: true,
      content: (
        <p>
          <span className="font-semibold text-blue-500">
            <a href="#" className="hover:text-blue-600">
              James
            </a>
          </span>{" "}
          has completed the task{" "}
          <a href="#" className="hover:text-blue-600 text-blue-500">
            Submit documents
          </a>{" "}
          from{" "}
          <a href="#" className="hover:text-blue-600 text-blue-500">
            Onboarding
          </a>{" "}
          list
        </p>
      ),
      timestamp: "2 hours ago",
    },
    {
      type: "users",
      user: {
        id: "2",
        name: "Margo",
        image: "/assets/images/users/face3.jpg",
        status: "away",
        profileAddress: "#",
      },

      content: (
        <p>
          <a to="#" className="hover:text-blue-600 text-blue-500 font-semibold">
            Margo
          </a>{" "}
          has added 4 users to{" "}
          <span className="font-semibold ">Customer enablement</span> channel
        </p>
      ),
      timestamp: "3 hours ago",
      additionalUsers: [
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
      ],
    },
    {
      type: "subscription",
      icon: (
        <div className="rounded-full bg-orange-50 p-2">
          <svg
            className="h-6 w-6 text-orange-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      ),
      content: (
        <p>
          Subscription <span className="text-blue-500">#466573</span> from
          10.12.2021 has been cancelled. Refund case{" "}
          <span className="text-blue-500">#4492</span> created
        </p>
      ),
      timestamp: "4 hours ago",
    },

    {
      type: "feedback",
      user: {
        id: "7",
        name: "Nick",
        image: "/assets/images/users/face25.jpg",
        status: "online",
        profileAddress: "#",
      },
      content: (
        <div>
          <p className="mb-2">
            <a
              to="#"
              className="hover:text-blue-600 text-blue-500 font-semibold"
            >
              Nick
            </a>{" "}
            requested your feedback and approval in support request{" "}
            <a href="#" className="hover:text-blue-600 text-blue-500 ">
              #458
            </a>
          </p>
          <div className="flex gap-2">
            <button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 text-gray-100 text-sm px-3 py-2 rounded-md flex items-center gap-2"
            >
              <PiChecks size={18} />
              Approve
            </button>
            <button
              size="sm"
              variant="outline"
              className="px-3 py-2 border-[1px] border-borderColor rounded-md bg-gray-100 hover:bg-gray-200 hover:border-gray-400 transition-all duration-200"
            >
              Review
            </button>
          </div>
        </div>
      ),
      timestamp: "3 days ago",
    },
    {
      type: "file",
      user: {
        id: "8",
        name: "Mike",
        image: "/assets/images/users/face24.jpg",
        status: "online",
        profileAddress: "#",
      },
      content: (
        <p>
          <a to="#" className="hover:text-blue-600 text-blue-500 font-semibold">
            Mike
          </a>{" "}
          added 1 new file(s) to{" "}
          <a href="#" className="hover:text-blue-600 text-blue-500 ">
            Product management
          </a>{" "}
          project
        </p>
      ),
      timestamp: "1 day ago",
      fileDetails: {
        name: "new_contract.pdf",
        size: "112KB",
      },
    },

    {
      type: "feedback",
      icon: (
        <div className="rounded-full bg-green-50 p-2">
          <svg
            className="w-6 h-6 text-green-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z"
            />
          </svg>
        </div>
      ),
      content: (
        <div>
          <p className="mb-2">
            <a
              to="#"
              className="hover:text-blue-600 text-blue-500 font-semibold"
            >
              Nick
            </a>{" "}
            requested your feedback and approval in support request{" "}
            <a href="#" className="hover:text-blue-600 text-blue-500 ">
              #458
            </a>
          </p>
          <div className="flex gap-2">
            <button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-gray-100 text-sm px-3 py-2 rounded-md flex items-center gap-2"
            >
              <i>
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z"
                  />
                </svg>
              </i>
              Add to calender
            </button>
          </div>
        </div>
      ),
      timestamp: "3 days ago",
    },
    {
      type: "feedback",
      user: {
        id: "7",
        name: "Nick",
        image: "/assets/images/users/face4.jpg",
        status: "offline",
      },
      content: (
        <div>
          <p className="mb-2">
            <a
              to="#"
              className="hover:text-blue-600 text-blue-500 font-semibold"
            >
              Christine
            </a>{" "}
            commented on your community{" "}
            <a href="#" className="hover:text-blue-600 text-blue-500 ">
              post{" "}
            </a>
            from 10.12.2021
          </p>
        </div>
      ),
      timestamp: "1 days ago",
    },
    {
      type: "subscription",
      icon: (
        <div className="rounded-full bg-blue-50 text-blue-600 p-2 flex justify-center items-center py-[10px]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z"></path>
          </svg>
        </div>
      ),
      content: (
        <p>
          <span className="font-semibold">HR department </span> requested you to
          complete internal survey by Friday
        </p>
      ),
      timestamp: "4 hours ago",
    },
  ];

  const newNotifications = notifications.slice(0, 3);
  const oldNotifications = notifications.slice(3);

  const toggleNotfication = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div
      className={`w-[380px] ${
        isNotificationOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 min-h-screen right-0 rounded-lg border z-10 bg-white transition-all duration-[0.4s] ease-in-out`}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-lg font-medium">Activity</h2>
        <div className="flex gap-2">
          <button
            variant="ghost"
            size="icon"
            className="p-2 rounded-full text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            onClick={toggleNotfication}
          >
            <RxCross2 size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="p-0 overflow-auto max-h-[calc(100vh-120px)]">
        <div>
          <h3 className="px-4 py-3 bg-gray-100 text-sm font-medium text-gray-600">
            New notifications
          </h3>
          {newNotifications.map((notification, index) => (
            <NotificationNewItem key={index} {...notification} />
          ))}
        </div>

        <div className="py-3">
          <h3 className="px-4 py-3 bg-gray-100 text-sm font-medium text-gray-600">
            Older notifications
          </h3>
          {oldNotifications.map((notification, index) => (
            <NotificationNewItem key={index} {...notification} />
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center items-center ">
          <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}
