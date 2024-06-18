"use client";

import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Jobs } from "../(private)/stats/barChart";
import { editJob } from "../actions/editJob";

interface EditJobProps {
  jobData: Jobs;
}

const EditJob: React.FC<EditJobProps> = ({ jobData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    title: jobData.title,
    link: jobData.link,
    location: jobData.location,
    company: jobData.company,
    website: jobData.website,
  });

  const handleChange = (e: any) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <CiEdit className="text-white size-7" />
      </button>
      {openModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-md"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-0"
              aria-hidden="true"
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              ​
            </span>
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form
                action={editJob}
                className=" bg-blue-950 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col gap-2"
                onSubmit={() => setOpenModal(false)}
              >
                <input type="hidden" name="id" value={jobData.id} />
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 "
                ></input>
                <input
                  type="text"
                  placeholder="Link"
                  name="link"
                  value={formData.link || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 "
                ></input>
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={formData.company || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 "
                ></input>
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 "
                ></input>
                <input
                  type="text"
                  placeholder="Website"
                  name="website"
                  value={formData.website || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300 "
                ></input>
                <div className="flex">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit Job
                  </button>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="mt-3 ml-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditJob;
