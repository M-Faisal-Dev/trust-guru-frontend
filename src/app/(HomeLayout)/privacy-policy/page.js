import React from 'react';

const page = () => {
  // Privacy policy content object
  const privacyPolicyContent = {
    title: "Privacy Policy",
    introduction: "This privacy policy sets out how our website uses and protects any information that you give us when you use this website.",
    sections: [
      {
        title: "Information We Collect",
        content: [
          "Your name and contact information",
          "Demographic information",
          "Other information relevant to customer surveys and/or offers"
        ]
      },
      {
        title: "How We Use the Information",
        content: [
          "Internal record keeping",
          "Improving our products and services",
          "Sending promotional emails about new products, special offers, or other information which we think you may find interesting",
          "Contacting you for market research purposes"
        ]
      },
      {
        title: "Security",
        content: [
          "We are committed to ensuring that your information is secure.",
          "We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online."
        ]
      },
      {
        title: "Cookies",
        content: [
          "A cookie is a small file that asks permission to be placed on your computer's hard drive.",
          "Cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not."
        ]
      },
      {
        title: "Links to Other Websites",
        content: [
          "Our website may contain links to other websites of interest.",
          "We do not have any control over that other website once you leave our site.",
          "Exercise caution and look at the privacy statement applicable to the website in question."
        ]
      },
      {
        title: "Controlling Your Personal Information",
        content: [
          "You may choose to restrict the collection or use of your personal information.",
          "We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.",
          "You may request details of personal information which we hold about you.",
          "If you believe that any information we are holding on you is incorrect or incomplete, please contact us."
        ]
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          "This privacy policy is subject to change without notice."
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{privacyPolicyContent.title}</h1>
        <p className="mb-4">{privacyPolicyContent.introduction}</p>

        {/* Render sections dynamically */}
        {privacyPolicyContent.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <ul className="list-disc list-inside mb-4">
              {section.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Additional Note */}
        <p className="mb-4">
          This privacy policy is subject to change without notice.
        </p>
      </div>
    </div>
  );
}

export default page;
