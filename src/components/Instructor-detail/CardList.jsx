// CardList.jsx
import React from 'react';
import CardComponent from './CardComponent';


const cardData = [
    {
        image: "/cardone.png",
        develop: 'Development',
        drop: 'Drop Shipping',
        author: 'David Millar',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type...",
        price: '15.00',
    },
    {
        image: "/cardtwo.png",
        develop: 'Design',
        drop: 'Yoga',
        author: 'David Millar',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type...",
        price: '15.00',
    },
    {
        image: "/cardthree.png",
        develop: 'Marketing',
        drop: 'Digital Marketing',
        author: 'David Millar',
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type...",
        price: '15.00',
    },
];

const CardList = ({course}) => {
    console.log(course, "thajsfka jdsfkjadk fjadkljfakldjflakj")
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 items-center justify-center xl:gap-[27px] lg:gap-4 md:gap-2 xxs:gap-3 mt-5'>
            {course.map((card, index) => (
                <CardComponent
                    key={index}
                    image={card.bannerPicture}
                    develop={card.courseTitle}
                    drop={card.drop}
                    author={card.author}
                    description={card.courseDescription}
                    price={card.totalPrice}
                />
            ))}
        </div>
    );
};

export default CardList;
