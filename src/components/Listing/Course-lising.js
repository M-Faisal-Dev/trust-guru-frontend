"use client";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";

function Courselising() {
  const [form, setForm] = useState({
    courseTitle: "",
    coverPicture: null,
    bannerPicture: null,
    totalPrice: "",
    weeklyPrice: "",
    courseDescription: "",
    studentLearn: "",
    certificateOption: "",
    accessOption: "",
    totalArtical: "",
    totalLength: "",
    totalWeeks: "",
    weeks: [{ weeklyTitle: "", sessions: [{ topic: "", sessionLength: "" }] }],
  });

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleChange = (e, weekIndex = null, sessionIndex = null) => {
    const { name, value } = e.target;

    if (weekIndex !== null && sessionIndex !== null) {
      const updatedWeeks = [...form.weeks];
      updatedWeeks[weekIndex].sessions[sessionIndex][name] = value;
      setForm({ ...form, weeks: updatedWeeks });
    } else if (weekIndex !== null) {
      const updatedWeeks = [...form.weeks];
      updatedWeeks[weekIndex][name] = value;
      setForm({ ...form, weeks: updatedWeeks });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm({
      ...form,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const addSession = (weekIndex) => {
    const updatedWeeks = [...form.weeks];
    updatedWeeks[weekIndex].sessions.push({ topic: "", sessionLength: "" });
    setForm({ ...form, weeks: updatedWeeks });
  };

  const addWeek = () => {
    setForm({
      ...form,
      weeks: [
        ...form.weeks,
        { weeklyTitle: "", sessions: [{ topic: "", sessionLength: "" }] },
      ],
    });
  };

  return (
    <div>
      <div className="relative">
        <Image
          width={1500}
          height={1000}
          quality={100}
          alt="sideImg"
          src="/instor-banner.jpg"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/3 left-18 p-4">
          <p className="text-white font-bold text-4xl">Course Listing</p>
          <div className="flex flex-row items-center space-x-1 text-white text-lg font-medium">
            <p className="">home</p>
            <GoChevronRight />
            <p className="">listing</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-2">
              <input
                type="text"
                id="courseTitle"
                name="courseTitle"
                value={form.courseTitle}
                onChange={handleChange}
                placeholder="Course Title"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="totalPrice"
                name="totalPrice"
                value={form.totalPrice}
                onChange={handleChange}
                placeholder="Total Price"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>

            <div className="shadow-neons h-[191px] relative px-[20px] pt-[13px]">
            <h2 className="text-gray-900 text-[16px] font-normal leading-[26px]">
                Accepted formats:
              </h2>
              <p className="text-gray-600 text-[12px] font-normal leading-[177%]">
                JPG, PNG, GIF. Maximum file size: 2MB
              </p>

              {/* <div className="flex flex-wrap mt-4 w-[60%]">
                    {images.map((image, index) => (
                      <div key={index} className="w-1/5 p-2 relative group">
                        <Image
                          width={20}
                          height={20}
                          src={URL.createObjectURL(image)}
                          alt={`upload-${index}`}
                          className="w-full h-auto"
                        />

                        <button
                          onClick={() => handleImageRemove(index)}
                          className="absolute top-0 right-0 w-6 flex justify-center items-center h-6 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Remove image"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div> */}

              <input
                type="file"
                id="car-image"
                className="hidden"
                accept="image/*"
                multiple
                // onChange={handleImageChange}
              />

              <div className="absolute right-[20px] xl:top-0 xxs:top-[55px]">
                <label
                  htmlFor="car-image"
                  className="flex flex-col items-center justify-center w-[176px] 
          xl:h-[154px] xxs:h-[110px] 
          shadow-sm cursor-pointer my-[19px] border border-gray-100"
                >
                  <Image
                    width={45}
                    height={45}
                    src="/camraIcon.svg"
                    alt="Upload Image"
                    // onChange={handleImageChange}
                  />

                  <span className="text-[17px] text-dark-grey font-normal pt-[18px]">
                    Add Thumbnail Pictures
                  </span>
                </label>
              </div>
            </div>
            <div className="shadow-neons h-[191px] relative px-[20px] pt-[13px]">
              <h2 className="text-gray-900 text-[16px] font-normal leading-[26px]">
                Accepted formats:
              </h2>
              <p className="text-gray-600 text-[12px] font-normal leading-[177%]">
                JPG, PNG, GIF. Maximum file size: 2MB
              </p>

              {/* <div className="flex flex-wrap mt-4 w-[60%]">
                    {images.map((image, index) => (
                      <div key={index} className="w-1/5 p-2 relative group">
                        <Image
                          width={20}
                          height={20}
                          src={URL.createObjectURL(image)}
                          alt={`upload-${index}`}
                          className="w-full h-auto"
                        />

                        <button
                          onClick={() => handleImageRemove(index)}
                          className="absolute top-0 right-0 w-6 flex justify-center items-center h-6 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Remove image"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div> */}

              <input
                type="file"
                id="car-image"
                className="hidden"
                accept="image/*"
                multiple

                // onChange={handleImageChange}
              />

              <div className="absolute right-[20px] xl:top-0 xxs:top-[55px]">
                <label
                  htmlFor="car-image"
                  className="flex flex-col items-center justify-center w-[176px] 
          xl:h-[154px] xxs:h-[110px] 
          shadow-sm border border-gray-100 cursor-pointer my-[19px]"
                >
                  <Image
                    width={45}
                    height={45}
                    src="/camraIcon.svg"
                    alt="Upload Image"
                    // onChange={handleImageChange}
                  />

                  <span className="text-[17px] text-dark-grey font-normal pt-[18px]">
                    Add Cover Pictures
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-2 col-span-1 md:col-span-2">
              <textarea
                id="courseDescription"
                name="courseDescription"
                value={form.courseDescription}
                onChange={handleChange}
                placeholder="Course Description"
                className="text-gray-900 h-45 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>

            <div className="mb-2 col-span-1 md:col-span-2">
              <textarea
                id="studentLearn"
                name="studentLearn"
                value={form.studentLearn}
                onChange={handleChange}
                placeholder="What Students Will Learn?"
                className="text-gray-900 h-45 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="artical"
                name="totalArtical"
                value={form.totalArtical}
                onChange={handleChange}
                placeholder="Total artical"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="totalLength"
                name="totalLength"
                value={form.totalLength}
                onChange={handleChange}
                placeholder="Total Classes Length"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                id="totalWeeks"
                name="totalWeeks"
                value={form.totalWeeks}
                onChange={handleChange}
                placeholder="Total Weeks"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>

            <div className="mb-4">
              <select
                id="accessOption"
                name="accessOption"
                value={form.accessOption}
                onChange={handleChange}
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              >
                <option value="">Select Access Option</option>
                <option value="mobile">Mobile access</option>
                <option value="pc">PC access</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                id="certificateOption"
                name="certificateOption"
                value={form.certificateOption}
                onChange={handleChange}
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              >
                <option value="" disabled>
                  Certificate of Completion
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="weeklyPrice"
                name="weeklyPrice"
                value={form.weeklyPrice}
                onChange={handleChange}
                placeholder="Weekly Price"
                className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
              />
            </div>
          </div>

          <div className="mb-4">
            <button
              type="button"
              onClick={toggleAccordion}
              className="w-full px-3 py-2 text-left text-gray-900 bg-gray-200 rounded-sm shadow border-gray-200 border focus:outline-none focus:ring-1"
            >
              Weekly Information {isAccordionOpen ? "-" : "+"}
            </button>
            {isAccordionOpen && (
              <div className="mt-2">
                {form.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="mb-4">
                    <div className="mb-2">
                      <input
                        type="text"
                        id={`weeklyTitle-${weekIndex}`}
                        name="weeklyTitle"
                        value={week.weeklyTitle}
                        onChange={(e) => handleChange(e, weekIndex)}
                        placeholder="Weekly Title"
                        className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
                      />
                    </div>
                    {week.sessions.map((session, sessionIndex) => (
                      <div
                        key={sessionIndex}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2"
                      >
                        <div className="col-span-2">
                          <input
                            type="text"
                            id={`topic-${weekIndex}-${sessionIndex}`}
                            name="topic"
                            value={session.topic}
                            onChange={(e) =>
                              handleChange(e, weekIndex, sessionIndex)
                            }
                            placeholder="Topic"
                            className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
                          />
                        </div>
                        <div className="col-span-1">
                          <input
                            type="text"
                            id={`sessionLength-${weekIndex}-${sessionIndex}`}
                            name="sessionLength"
                            value={session.sessionLength}
                            onChange={(e) =>
                              handleChange(e, weekIndex, sessionIndex)
                            }
                            placeholder="Session Length"
                            className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
                          />
                        </div>
                      </div>
                    ))}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => addSession(weekIndex)}
                        className="w-full px-3 py-2 text-left text-gray-900 bg-gray-200 rounded-sm shadow border-gray-200 border focus:outline-none focus:ring-1"
                      >
                        Add Session
                      </button>
                    </div>
                  </div>
                ))}
                <div className="mb-4">
                  <button
                    type="button"
                    onClick={addWeek}
                    className="w-full px-3 py-2 text-left text-gray-900 bg-gray-200 rounded-sm shadow border-gray-200 border focus:outline-none focus:ring-1"
                  >
                    Add Week
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-white text-lg font-medium bg-blue rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Courselising;
