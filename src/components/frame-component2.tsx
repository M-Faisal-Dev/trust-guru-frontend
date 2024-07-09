"use client"
import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { Navigation } from 'swiper/modules';

// Define the UserProfile type
type UserProfile = {
  _id: string;
  fullName: string;
  about: string;
  country: string;
  city: string;
  profileImage: string;
  address: string;
  zipCode: string;
  phone: string;
  email: string;
  gender: string;
  dob: string;
  bankName: string;
  iban: string;
  accNumber: string;
  totalPoints: number;
  lastMonth: number;
  averageScore: number;
  numClients: number;
  skills: any[]; // Define the structure of skills
  createdAt: string;
  updatedAt: string;
  __v: number;
  biography: string;
  profession: string;
};

type FrameComponent2Props = {
  props: UserProfile[];
};

const FrameComponent2: NextPage<FrameComponent2Props> = ({ props }) => {
  const data = {
    heading: "Chi è già su TYG"
  };

  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Set the first profile as selectedProfile initially
  useEffect(() => {
    if (props.length > 0) {
      setSelectedProfile(props[0]);
    }
  }, [props]);

  const handleChangeData = (profile: UserProfile) => {
    setSelectedProfile(profile);
    // Perform any other actions based on the clicked profile
    console.log("Clicked profile:", profile);
  };

  return (
    <section className={styles.desktop1Inner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.heading2OurTopClassPrWrapper}>
            <h1 className={styles.heading2}>
              {data.heading}
            </h1>
          </div>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src={selectedProfile?.profileImage}
            />
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.heading2OliviaMiaParent}>
                  <h3 className={styles.heading21}>{selectedProfile?.fullName}</h3>
                  <div className={styles.webDesign}>{selectedProfile?.profession}</div>
                  <div className={styles.symbolParent}>
                    <div className={styles.ratings}>{`TRUST POINTS ${selectedProfile?.totalPoints}`}</div>
                  </div>
                </div>
                <div className={styles.loremIpsumHasBeen}>
                  {selectedProfile?.about}
                  {/* TrustYourGuru mi è stato d’aiuto nella ricerca di un personal trainer competente che mi aiutasse a raggiungere i risultati desiderati. */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <>
            <button className="my-auto"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slidePrev();
              }}
            >
              <GoChevronLeft/>
            </button>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 6, spaceBetween: 40 }
              }}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {props.map((profile: UserProfile, index: number) => (
                <SwiperSlide key={index} className="rounded-full">
                  <button onClick={() => handleChangeData(profile)}>
                    <img
                      className="rounded-full object-cover w-26 h-26"
                      loading="lazy"
                      alt=""
                      src={profile.profileImage}
                    />
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="my-auto"
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slideNext();
              }}
            >
              <GoChevronRight/>
            </button>
          </>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
