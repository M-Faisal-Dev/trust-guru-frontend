import React from 'react';

const content = {
  mission: {
    text: "La nostra missione è rivoluzionare il mondo del coaching fornendo una piattaforma che crei relazioni tra coach appassionati e persone in cerca di crescita.",
    image: "/chi-siamo1.png" // Placeholder image for mission
  },
  quote: {
    text: "“Un pianeta migliore è un sogno che inizia a realizzarsi quando ognuno di noi decide di migliorare se stesso.”",
    author: "M. Ghandhi",
    image: "/chi-siamo2.png" // Placeholder image for quote
  },
 
  vision: {
    text: "Vogliamo essere il marketplace di fiducia per gli studenti di tutto il mondo, aiutandoli a raggiungere il loro pieno potenziale. Al contempo, aspiriamo a trasformare le vite dei nostri coach, offrendo loro gli strumenti e il supporto necessari per realizzare i loro obiettivi e vivere una vita più soddisfacente e realizzata.",
    image: "/chi-siamo3.png" // Placeholder image for vision
  }
};

const AboutUsPage = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[375px]"
        style={{
          backgroundImage: `url(/aboutus.jpg)`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='relative max-w-[1440px] xl:px-[60px] xxs:px-5 mx-auto h-full flex items-center justify-center'>
          <h2 className='text-gray-100 font-bold xl:text-[50px] md:text-4xl xxs:text-2xl text-center leading-[1]'>
            Chi Siamo
          </h2>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto p-6">
          {Object.keys(content).map((key, idx) => {
            const section = content[key];

            const formatText = (text) => {
              const boldWords = ["missione", "rivoluzionare", "coach", "competenze", "studenti", "fiducia", "potenziale"];
              let formattedText = text;
              boldWords.forEach((word) => {
                const regex = new RegExp(`\\b${word}\\b`, 'gi');
                formattedText = formattedText.replace(regex, `<strong>${word}</strong>`);
              });
              return formattedText;
            };

            return (
              <div key={idx} className="mb-8 lg:flex lg:items-center lg:gap-6">
                {idx % 2 === 0 ? (
                  <>
                    <div className="lg:w-1/2">
                     
                      <p
                        className="text-gray-900 mb-4 text-xl"
                        dangerouslySetInnerHTML={{ __html: formatText(section.text) }}
                      ></p>
                    </div>
                    <div className="lg:w-1/2">
                      {section.image && (
                        <img
                          src={section.image}
                          alt={`${key} image`}
                          className="rounded-lg shadow-lg max-w-full h-auto mb-4 lg:mb-0"
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:w-1/2 lg:order-2">
                     

                      <h2 className='text-lg font-semibold'>{section.author}</h2>
                      <p
                        className="text-gray-900 mb-4 text-xl"
                        dangerouslySetInnerHTML={{ __html: formatText(section.text) }}
                      ></p>

<button className="mt-2 mb-2 px-6 py-2 bg-blue text-white rounded-md shadow-md hover:bg-blue-600">
ISCRIVITI
                    </button>


                    </div>
                    <div className="lg:w-1/2 lg:order-1">
                      {section.image && (
                        <img
                          src={section.image}
                          alt={`${key} image`}
                          className="rounded-lg shadow-lg max-w-full h-auto mb-4 lg:mb-0"
                        />
                      )}
                    </div>
                  </>
                )}
                {key === 'commitment' && <hr className="my-4 lg:col-span-2" />}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
