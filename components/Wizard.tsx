'use client';

import { useState } from 'react';

const steps = [
  { 
    id: 1, 
    title: "Let's start a new project", 
    subtitle: "We are honoured you are interested in working with us. Please fill out the project planner and we&apos;ll get back to you in a jiffy.",
    content: (
      <div>
        <label className="block text-left text-gray-700">Name or Company Name</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter name or company name" />
        
        <label className="block text-left text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
      </div>
    )
  },
  { 
    id: 2, 
    title: "What can we help you with?",
    subtitle: "Please select all that apply.",
    content: (
      <div>
        <fieldset>
          <legend className="block text-left text-gray-700 mb-2">Select options</legend>
          {[
            "Labels and Packaging", "Posters and Flyers", "Billboards & Roll Ups", 
            "Vehicle Branding", "Promo Booths", "Shelves", "Logo", 
            "T-shirts", "Video Animations"
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="radio" name="service" value={item} className="mr-2" />
              <label className="text-gray-700">{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    )
  },
  { 
    id: 3, 
    title: "Describe your project", 
    subtitle: "Design? Awesome!",
    content: (
      <div>
        <label className="block text-left text-gray-700">Message</label>
        <textarea className="w-full p-2 border rounded" placeholder="Enter your message"></textarea>
      </div>
    )
  },
  { 
    id: 4, 
    title: "What's your budget?",
    subtitle: "An honest budget will allow us to ensure expectations are met. Don&apos;t have an exact price? Guesstimate.",
    content: (
      <div>
        <label className="block text-left text-gray-700">From</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter from" />
        
        <label className="block text-left text-gray-700">To</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter to" />
        
        <label className="block text-left text-gray-700">Currency</label>
        <select className="w-full p-2 border rounded">
          <option value="usd">Dollar</option>
          <option value="eur">Euro</option>
          <option value="gbp">Pound</option>
        </select>
      </div>
    )
  }
];

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="max-w-xl mx-auto text-center p-6">
      <h2 className="text-2xl font-bold">How It Works</h2>
      <p className="text-gray-600 my-4">
        Embark on a journey to create your kid's dream room in five simple steps! Our dedicated team will guide you through every phase, ensuring a space that's fun and multifunctional.
      </p>
      
      <div className="relative flex items-center justify-center my-6">
        <div className="absolute w-full h-0.5 bg-gray-300"></div>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative w-12 h-12 flex items-center justify-center rounded-full border-2 ${index === currentStep ? 'bg-red-500 text-white border-red-500' : 'bg-white border-gray-300 text-gray-600'} z-10`}
          >
            {step.id}
          </div>
        ))}
      </div>

      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <h3 className="font-semibold text-3xl my-5">{steps[currentStep].title}</h3>
        <p className="text-gray-600 my-5">{steps[currentStep].subtitle}</p>
        <div className="text-gray-600">{steps[currentStep].content}</div>
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} disabled={currentStep === 0} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">◀</button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">▶</button>
      </div>
    </div>
  );
};

export default Wizard;
