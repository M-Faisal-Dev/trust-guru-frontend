import React from 'react';

const content = {
  mission: {
    title: "Our Mission",
    text: "La nostra missione è rivoluzionare il mondo del coaching fornendo una piattaforma che crei relazioni tra coach appassionati e persone in cerca di crescita. Ci impegniamo a creare un ambiente accessibile e sicuro dove i coach possano monetizzare le loro competenze e dove gli studenti possano accedere a percorsi di coaching di alta qualità.",
    image: "/mission1.jpg" // Placeholder image for mission
  },
  quote: {
    text: "“Un pianeta migliore è un sogno che inizia a realizzarsi quando ognuno di noi decide di migliorare se stesso.”",
    author: "Mahatma Gandhi",
    image: "/mission2.jpg" // Placeholder image for quote
  },
  commitment: {
    text: "L’impegno di TrustYourGuru è di contribuire ad un mondo fatto di sogni, passione e collaborazioni.",
    image: "/vission1.jpg" // Placeholder image for commitment
  },
  vision: {
    title: "Our Vision",
    text: "Vogliamo essere il marketplace di fiducia per gli studenti di tutto il mondo, aiutandoli a raggiungere il loro pieno potenziale. Al contempo, aspiriamo a trasformare le vite dei nostri coach, offrendo loro gli strumenti e il supporto necessari per realizzare i loro obiettivi e vivere una vita più soddisfacente e realizzata.",
    image: "/vission2.jpg" // Placeholder image for vision
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


  <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-6">
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
        <div key={idx} className="mb-8 lg:w-[calc(50%-1.5rem)] flex flex-col">
          {section.title && (
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h2>
          )}
          <p
            className="text-gray-900 mb-4 text-xl"
            dangerouslySetInnerHTML={{ __html: formatText(section.text) }}
          ></p>
          {section.image && (
            <img
              src={section.image}
              alt={`${key} image`}
              className="rounded-lg shadow-lg max-w-full h-auto mb-4"
            />
          )}
          {key === 'quote' && (
            <blockquote className="text-gray-900 italic mb-4 text-lg">
              {section.text}
              <br />
              <span className="font-semibold">{section.author}</span>
            </blockquote>
          )}
          {key === 'commitment' && <hr className="my-4" />}
        </div>
      );
    })}
  </div>
</div>
</div>
    </>
   
  );
}

export default AboutUsPage;
