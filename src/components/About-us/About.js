import React from 'react';

const content = {
  mission: {
    title: "Our Mission",
    text: "La nostra missione è rivoluzionare il mondo del coaching fornendo una piattaforma che crei relazioni tra coach appassionati e persone in cerca di crescita. Ci impegniamo a creare un ambiente accessibile e sicuro dove i coach possano monetizzare le loro competenze e dove gli studenti possano accedere a percorsi di coaching di alta qualità."
  },
  quote: {
    text: "“Un pianeta migliore è un sogno che inizia a realizzarsi quando ognuno di noi decide di migliorare se stesso.”",
    author: "Mahatma Gandhi"
  },
  commitment: {
    text: "L’impegno di TrustYourGuru è di contribuire ad un mondo fatto di sogni, passione e collaborazioni."
  },
  vision: {
    title: "Our Vision",
    text: "Vogliamo essere il marketplace di fiducia per gli studenti di tutto il mondo, aiutandoli a raggiungere il loro pieno potenziale. Al contempo, aspiriamo a trasformare le vite dei nostri coach, offrendo loro gli strumenti e il supporto necessari per realizzare i loro obiettivi e vivere una vita più soddisfacente e realizzata."
  }
};

const AboutUsPage = () => {
  return (
    <div className=" py-8 px-4">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Chi Siamo</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/5 lg:pr-6">
            {Object.keys(content).map((key, idx) => {
              const section = content[key];

              if (key === 'quote') {
                return (
                  <blockquote key={idx} className="text-gray-700 italic mb-4">
                    {section.text}
                    <br />
                    <span className="font-semibold">{section.author}</span>
                  </blockquote>
                );
              }

              return (
                <div key={idx} className="mb-8">
                  {section.title && (
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h2>
                  )}
                  <p className="text-gray-700 mb-4">{section.text}</p>
                  {key === 'commitment' && <hr className="my-4" />}
                </div>
              );
            })}
          </div>
          <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400"
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
