import React from "react";
import ListCandidate from "../components/ListCandidate";

const Dashboard = () => {
  return (
    <>
      <div class="sm:hidden">
        <select
          id="tabs"
          class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option>All</option>
          <option>Selected</option>
          <option>Rejected</option>
          <option>Pending</option>
        </select>
      </div>
      <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex">
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 text-gray-900 bg-white border-r border-gray-200 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none"
            aria-current="page"
          >
            All
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Selected
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Rejected
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Pending
          </a>
        </li>
      </ul>
    </>
  );
};

export default Dashboard;

