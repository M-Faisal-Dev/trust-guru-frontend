"use client";
import React from "react";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { useState } from "react";
import {handleCoverImageUpload, handleThumbnailImageUpload} from "@/libs/uploadAsset"
import axios from 'axios';
import {routes} from "@/libs/api";
import { useAuth } from '@/Context/AuthContext';
import {toast} from "react-toastify"


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
  const { isAuthenticated, login, logout, userToken, getRefreshToken } = useAuth();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [showPopup, setShowPopup] = useState(true);



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



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleCoverImageRemove = () => {
    setCoverImage(null);
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const Token = getRefreshToken()
  console.log(Token, "this is token")



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const thumbnailUrl = await handleThumbnailImageUpload(image);
      const coverImageUrl = await handleCoverImageUpload(coverImage);  
  
      // Prepare post data including the updated form state
      const postData = {
        ...form,
        coverPicture: coverImageUrl.image[0],
        bannerPicture: thumbnailUrl.image[0]
      };
  
    
      const response = await axios.post(routes.createCourse, postData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Token}`,  // Include token in headers
        },
      });

      setForm({
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
      })
      toast.success("I tuoi dati sono stati inviati con successo");

    } catch (error) {
      toast.error("Si è verificato un errore durante l'invio dei tuoi dati. Per favore, riprova.");
      // Handle the error appropriately, e.g., show an error message to the user
    }
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


  const handleClose = () => {
    setShowPopup(false);
  };





  return (
    <div>


{showPopup && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg justify-center shadow-lg p-6 relative md:w-[30%] w-[60%]  ">
            <button
              onClick={handleClose}
              className="absolute top-0  font-semibold right-0 m-4 text-blue hover:text-blue-600"
            >
              &times;
            </button>
            <h2 className="text-xl text-blue text-center font-bold mb-4">Termini e Condizioni</h2>
            <p className="text-base font-medium">
            Sì più preciso/a possibile nello stabilire obiettivi e programma settimanale; se non lo rispetterai, LO STUDENTE POTREBBE RICHIEDERE INDIETRO I SOLDI INVESTITI. Ti consigliamo di REGISTRARE LE VIDEOCALL.
            </p>
          </div>
        </div>
      )}




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
        <p className="text-white font-bold text-4xl">Elenco dei Corsi</p>
        <div className="flex flex-row items-center space-x-1 text-white text-lg font-medium">
          <p className="">Home</p>
          <GoChevronRight />
          <p className="">Elenco</p>
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
              placeholder="Titolo del Corso"
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
              placeholder="Prezzo Totale"
              className="text-gray-900 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
            />
          </div>
  
          <div className="shadow-neons h-[191px] relative px-[20px] pt-[13px]">
            <h2 className="text-gray-900 text-[16px] font-normal leading-[26px]">
              Formati accettati:
            </h2>
            <p className="text-gray-600 text-[12px] font-normal leading-[177%]">
              JPG, PNG, GIF. Dimensione massima del file: 2MB
            </p>
  
            {image ? (
              <div className="relative h-18 w-[60%] mt-4">
                <Image
                  width={100}
                  height={100}
                  src={image.url}
                  alt="Immagine caricata"
                  className="w-25 h-25"
                />
                <button
                  onClick={handleImageRemove}
                  className="absolute top-0 bg-red justify-center left-20 w-6 h-6 flex text-center items-center p-1 text-white rounded-full"
                  title="Rimuovi immagine"
                >
                  &times;
                </button>
              </div>
            ) : (
              <div className="absolute right-[20px] xl:top-0 xxs:top-[55px]">
                <input
                  type="file"
                  id="car-image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
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
                    alt="Carica immagine"
                  />
                  <span className="text-[14px] text-dark-grey font-normal pt-[18px]">
                    Aggiungi immagine miniatura
                  </span>
                </label>
              </div>
            )}
          </div>
  
          <div className="shadow-neons h-[191px] relative px-[20px] pt-[13px]">
            <h2 className="text-gray-900 text-[16px] font-normal leading-[26px]">
              Formati accettati:
            </h2>
            <p className="text-gray-600 text-[12px] font-normal leading-[177%]">
              JPG, PNG, GIF. Dimensione massima del file: 2MB
            </p>
            {coverImage ? (
              <div className="relative w-[60%] mt-2">
                <Image
                  width={100}
                  height={100}
                  src={coverImage.url}
                  alt="Immagine di copertina"
                  className="w-25 h-25"
                />
                <button
                  onClick={handleCoverImageRemove}
                  className="absolute top-0 left-20 w-6 h-6 flex justify-center items-center p-1 bg-red text-white rounded-full"
                  title="Rimuovi immagine"
                >
                  &times;
                </button>
              </div>
            ) : (
              <div className="absolute right-[20px] xl:top-0 xxs:top-[55px]">
                <input
                  type="file"
                  id="cover-image"
                  className="hidden"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                />
                <label
                  htmlFor="cover-image"
                  className="flex flex-col items-center justify-center w-[176px] 
                    xl:h-[154px] xxs:h-[110px] 
                    shadow-sm border border-gray-100 cursor-pointer my-[19px]"
                >
                  <Image
                    width={45}
                    height={45}
                    src="/camraIcon.svg"
                    alt="Carica immagine di copertina"
                  />
                  <span className="text-[14px] text-dark-grey font-normal pt-[18px]">
                    Aggiungi immagine di copertina
                  </span>
                </label>
              </div>
            )}
          </div>
  
          <div className="mb-2 col-span-1 md:col-span-2">
            <textarea
              id="courseDescription"
              name="courseDescription"
              value={form.courseDescription}
              onChange={handleChange}
              placeholder="Descrizione del Corso"
              className="text-gray-900 h-45 sm:text-base rounded-sm shadow border-gray-200 border focus:ring-1 outline-none block w-full p-2.5"
            />
          </div>
  
          <div className="mb-2 col-span-1 md:col-span-2">
            <textarea
              id="studentLearn"
              name="studentLearn"
              value={form.studentLearn}
              onChange={handleChange}
              placeholder="Cosa Impareranno gli Studenti?"
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
              placeholder="Totale articoli"
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
              placeholder="Durata totale delle lezioni"
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
              placeholder="Totale settimane"
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
              <option value="">Seleziona opzione di accesso</option>
              <option value="mobile">Accesso mobile</option>
              <option value="pc">Accesso PC</option>
              <option value="both">Entrambi</option>
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
                Certificato di Completamento
              </option>
              <option value="yes">Sì</option>
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
              placeholder="Prezzo settimanale"
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
            Informazioni settimanali {isAccordionOpen ? "-" : "+"}
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
                      placeholder="Titolo settimanale"
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
                          placeholder="Argomento"
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
                          placeholder="Durata della sessione"
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
                      Aggiungi sessione
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
                  Aggiungi settimana
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
            Invia
          </button>
        </div>
      </form>
    </div>
  </div>
  
  );
}

export default Courselising;
