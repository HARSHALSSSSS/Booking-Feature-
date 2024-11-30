'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BookingCalendar from '../components/BookingCalendar';
const Page = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [isSlotsSelected, setIsSlotsSelected] = useState(true);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const handleBookSessionClick = () => {
    setCurrentPage('bookSession');
  };

  const handleProceedClick = () => {
    if (!selectedDuration) {
      alert('Please select a duration for pricing details.');
    } else {
      setCurrentPage('bookingPage');
    }
  };

  const handleModeSelection = (mode: string) => {
    setSelectedMode(mode);
  };

  // BookingPage component definitio
  
  
  


  
  

  
  
 

 
  
  
  
  function BookingPage() {
    const [currentPage, setCurrentPage] = useState('bookingPage');
    const [therapyMode, setTherapyMode] = useState(null);
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleSlotSelect = (slot) => {
      setSelectedSlots((prevSlots) => prevSlots.includes(slot)
        ? prevSlots.filter((s) => s !== slot)
        : [...prevSlots, slot]
      );
    };
  
    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  
        const thankyoupageclick =()=>{
          setCurrentPage('thankyoupage');
        };


        const [email, setEmail] = useState('');

        // Assuming this function is triggered when the form is submitted
        const handleFormSubmit = (event) => {
          event.preventDefault();
          // Handle form submission logic, for example saving email to state
          setEmail(event.target.email.value);
        };










        if (currentPage === 'thankyoupage') {
          return (
            <div className="min-h-screen bg-gray-50 flex justify-center items-center">
              <div className="w-full max-w-md bg-white shadow-md rounded p-6">
                {/* Booking Confirmation Header */}
                <div className="text-center mb-6">
                  <h1 className="text-3xl font-bold text-green-500 mb-2">Booking Confirmed!</h1>
                  <p className="text-lg text-gray-700">Congratulations! Your therapy session has been successfully scheduled.</p>
                  <p className="text-lg text-gray-700">We're looking forward to helping you on your journey to better mental health.</p>
                </div>
        
                {/* Instructions Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-4">i. Instructions</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    A confirmation email with all the session details has been sent to:
                  </p>
                  <p className="text-sm font-medium text-blue-600">{email}</p>
                  <p className="text-sm text-gray-600 mt-4">
                    If this is your first session, consider jotting down any key points or questions you want to discuss.
                  </p>
                </div>
        
                {/* Back to Home Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => window.location.href = '/'} // Redirect to Home page
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          );
        }
        


        

















    const isProceedEnabled = therapyMode && selectedSlots.length > 0 && selectedDate;
  
    const handleProceedtwoClick = () => {
      if (therapyMode && selectedSlots.length > 0 && selectedDate) {
        setCurrentPage('confirmationPage');
      } else {
        alert('Please select therapy mode, at least one slot, and a date.');
      }
    };


    
  
    if (currentPage === 'confirmationPage') {
      return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
          <div className="w-full max-w-md bg-white shadow-md rounded p-6">
            {/* Booking Details Blue Box */}
            <div className="bg-blue-500 text-white p-4 rounded-md mb-6">
              <h2 className="font-bold text-lg">Booking Form Analysis</h2>
              <p> Fri Nov 01 2024 </p>
              <p>Time: 3:30 PM - 4:20 PM</p>
              <p>Price: ₹3,200/-</p>
            </div>
    
            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted successfully!');
              }}
              className="space-y-4"
            >
              {/* Therapy Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Therapy Mode</label>
                <input
                  type="text"
                  value={therapyMode}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              {/* Selected Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Selected Date</label>
                <input
                  type="text"
                  value={selectedDate}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              {/* Selected Slots */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Selected Slots</label>
                <input
                  type="text"
                  value={selectedSlots.join(', ')}
                  readOnly
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              {/* First Name and Last Name */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your First name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Last name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
    
              {/* Email */}
              <div>
              <input
  type="email"
  name="email"
  onChange={(e) => setEmail(e.target.value)} // Ensure email is being captured
  placeholder="Enter your email"
  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
/>
              </div>
    
              {/* Phone Number with +91 prefix */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9000 0000"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              {/* Referral Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Have you been referred by your employer?</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="text-sm">Yes, I am employed under a partnering company</span>
                </div>
    
                {/* Partnering Company Name or Company ID */}
                <input
                  type="text"
                  placeholder="Partnering Company Name or Company ID"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                 
                  type="button"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Verify
                </button>
              </div>
    
              {/* Action Button: Book Session */}
              <button
              
            onClick={thankyoupageclick}
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Book session
              </button>
            </form>
    
            {/* Additional Information */}
            <p className="mt-4 text-sm text-gray-600">
              Booking details will be sent via WhatsApp.
            </p>
          </div>
        </div>
      );
    }
   
   return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-orange-500">Booking Page</h1>
  
        {/* Therapy Mode Section */}
        <div className="w-full max-w-md bg-white shadow-md rounded p-6">
          <h3 className="text-lg font-semibold">Please select therapy mode</h3>
          <div className="flex space-x-4 mt-4">
            {[
              { mode: 'In-person', symbol: '🏢' },
              { mode: 'Video', symbol: '📹' },
              { mode: 'Call', symbol: '📞' },
            ].map(({ mode, symbol }) => (
              <button
                key={mode}
                onClick={() => setTherapyMode(mode)}
                className={`w-full p-4 border rounded-md text-center ${
                  therapyMode === mode ? 'bg-green-500 text-white' : 'bg-gray-100'
                } hover:bg-green-600 hover:text-white`}
              >
                {symbol} {mode}
              </button>
            ))}
          </div>
          {therapyMode === 'In-person' && (
            <p className="text-sm text-gray-600 mt-2">3rd Floor, A2, 35, Block A2, Delhi</p>
          )}
        </div>
  
        {/* Filter By Section */}
        <div className="w-full max-w-md bg-white shadow-md rounded p-6">
          <h3 className="text-lg font-semibold">Filter by</h3>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setSelectedDate(null)}
              className={`w-full p-4 border rounded-md text-center ${
                selectedDate === null ? 'bg-blue-500 text-white' : 'bg-gray-100'
              } hover:bg-blue-600 hover:text-white`}
            >
              Slots
            </button>
            <button
              onClick={() => setSelectedDate(true)}
              className={`w-full p-4 border rounded-md text-center ${
                selectedDate ? 'bg-blue-500 text-white' : 'bg-gray-100'
              } hover:bg-blue-600 hover:text-white`}
            >
              Date
            </button>
          </div>
        </div>
  
        {/* Slots Section */}
        {selectedDate === null && (
          <div className="w-full max-w-md bg-white shadow-md rounded p-6 mt-4">
            <h4 className="text-lg font-semibold mb-2">Select Slot</h4>
            <div className="space-y-4">
              {/* Morning Slots */}
              <div>
                <h5 className="text-md font-semibold mb-2">Morning</h5>
                <div className="grid grid-cols-2 gap-4">
                  {['8:00 - 8:45 AM', '9:00 - 9:45 AM', '10:00 - 10:45 AM'].map((time) => (
                    <button
                      key={time}
                      onClick={() => handleSlotSelect(time)}
                      className={`w-full p-4 border rounded-md text-center ${
                        selectedSlots.includes(time) ? 'bg-green-500 text-white' : 'bg-gray-100'
                      } hover:bg-green-600 hover:text-white`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Afternoon Slots */}
              <div>
                <h5 className="text-md font-semibold mb-2">Afternoon</h5>
                <div className="grid grid-cols-2 gap-4">
                  {['12:00 - 12:45 PM', '1:00 - 1:45 PM', '2:00 - 2:45 PM'].map((time) => (
                    <button
                      key={time}
                      onClick={() => handleSlotSelect(time)}
                      className={`w-full p-4 border rounded-md text-center ${
                        selectedSlots.includes(time) ? 'bg-green-500 text-white' : 'bg-gray-100'
                      } hover:bg-green-600 hover:text-white`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Evening Slots */}
              <div>
                <h5 className="text-md font-semibold mb-2">Evening</h5>
                <div className="grid grid-cols-2 gap-4">
                  {['5:00 - 5:45 PM', '6:00 - 6:45 PM', '7:00 - 7:45 PM'].map((time) => (
                    <button
                      key={time}
                      onClick={() => handleSlotSelect(time)}
                      className={`w-full p-4 border rounded-md text-center ${
                        selectedSlots.includes(time) ? 'bg-green-500 text-white' : 'bg-gray-100'
                      } hover:bg-green-600 hover:text-white`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
  
           {/* Booking Calendar */}
    {selectedDate && <BookingCalendar    />}
  
        {/* Proceed Button */}
        <div className="w-full max-w-md">
          <button
            onClick={handleProceedtwoClick}
            disabled={!isProceedEnabled}
            className={`w-full py-4 px-6 rounded-md text-white ${isProceedEnabled ? 'bg-green-500' : 'bg-gray-300 cursor-not-allowed'}`}
          >
            Proceed
          </button>
        </div>
      </div>
    );
  }
  
  

  if (currentPage === 'bookSession') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-orange-500">Session Booking</h1>

        

        {/* Three Orange Boxes */}
        {[1, 2, 3].map((box, index) => (
          <div
            key={index}
            className="w-full max-w-lg p-6 border-2 border-orange-500 rounded-lg space-y-4 bg-white shadow-md"
          >
            {/* Pricing Section */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-orange-500">₹3,200</span>
              <span className="text-gray-600 text-sm">/ session</span>
            </div>

            {/* Duration Section */}
            <div className="flex items-center space-x-4">
              {[30, 45, 60].map((duration) => (
                <div
                  key={duration}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                    selectedDuration === duration
                      ? 'border-orange-500 bg-orange-100'
                      : 'border-gray-300'
                  } cursor-pointer`}
                  onClick={() => setSelectedDuration(duration)}
                >
                  <span className="text-sm font-medium text-gray-600">{duration} min</span>
                </div>
              ))}
            </div>

            {/* Group Therapy Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Group Therapy</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Joint Evaluation</li>
                <li>Communication Exercise</li>
                <li>Conflict Resolution</li>
                <li>Goal Setting</li>
                <li>Follow-Up Plan</li>
              </ul>
            </div>

            {/* Proceed Button */}
            <button
              className="w-full py-2 bg-white border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-100"
              onClick={handleProceedClick}
            >
              Proceed
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (currentPage === 'bookingPage') {
    return <BookingPage />;
  }


  // Home Page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-orange-500 text-white">
        <button className="px-4 py-2 bg-white text-orange-500 rounded hover:bg-gray-200">
          Back
        </button>
        <h1 className="text-xl font-semibold">Therapist Profile</h1>
      </header>

      {/* Profile Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start p-6 space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Profile Image */}
        <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
            alt="Therapist"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="flex-1 space-y-2 text-center lg:text-left">
          <h2 className="text-2xl font-semibold">Swetha Varma</h2>
          <p className="text-gray-600">Consultant Clinical Psychologist</p>
          <p className="text-gray-600">10+ Years of Experience</p>
          <p className="text-lg font-medium">Starts at ₹1,200/session</p>
          <p className="text-sm text-gray-500">Block A2, Delhi</p>
          <button
            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={handleBookSessionClick}
          >
            Book Session
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">About Me</h3>
        <p className="text-gray-700">
          Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's
          challenges with empathy and expertise. With over 10 years of experience, I specialize in
          helping clients manage anxiety, depression, and relationship issues through personalized,
          evidence-based practices.
        </p>
      </section>

      {/* Credentials Section */}
      <section className="p-6 space-y-4 bg-gray-100">
        <h3 className="text-xl font-semibold">Credentials</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ph.D. in Clinical Psychology - Harvard University</li>
          <li>M.A. in Counseling - University of California, Berkeley</li>
          <li>Licensed Professional Counselor (LPC)</li>
          <li>Certified Cognitive Behavioral Therapist (CBT)</li>
          <li>Member, American Psychological Association (APA)</li>
        </ul>
      </section>

      {/* Availability Section */}
      <section className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">Available On</h3>
        <div className="flex space-x-4">
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded">In-person</span>
          <span className="bg-green-100 text-green-600 px-4 py-2 rounded">Video/Voice call</span>
        </div>
      </section>

      {/* Therapy Services Section */}
      <section className="p-6 space-y-4 bg-gray-100">
        <h3 className="text-xl font-semibold">I Offer Therapy For</h3>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Stress Management</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Relationship Skills</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Anxiety Reduction</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Depression Relief</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Trauma Healing</span>
        </div>
      </section>

      {/* Location and Languages Section */}
      <section className="p-6 space-y-2">
        <p className="text-lg">
          <strong>Location:</strong> <span className="text-gray-600">Chennai, India</span>
        </p>
        <p className="text-lg">
          <strong>Languages:</strong> <span className="text-gray-600">English, Hindi</span>
        </p>
      </section>
    </div>
  );
};

export default Page;

