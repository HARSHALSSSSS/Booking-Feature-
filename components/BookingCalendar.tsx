'use client'; // Needed for interactive components in Next.js 13+

import React, { useState } from 'react';

// Helper function to generate days in a month
const generateCalendar = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = date.getDay(); // The day of the week the month starts on

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null); // Empty slots for days before the start of the month
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  return calendarDays;
};

export default function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // Generate calendar for the current month
  const daysInMonth = generateCalendar(currentYear, currentMonth);

  // Days of the week for the header
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Handle date selection
  const handleDateClick = (day: number | null) => {
    if (day) {
      const selectedDay = new Date(currentYear, currentMonth, day);
      setSelectedDate(selectedDay.toDateString());
    }
  };

  // Handle previous month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // December
      setCurrentYear(currentYear - 1); // Go to the previous year
    } else {
      setCurrentMonth(currentMonth - 1); // Decrease the month
    }
  };

  // Handle next month navigation
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // January
      setCurrentYear(currentYear + 1); // Go to the next year
    } else {
      setCurrentMonth(currentMonth + 1); // Increase the month
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-4">Select a Date</h2>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-sm"
        >
          Previous
        </button>
        <span className="font-semibold text-xl">
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </span>
        <button
          onClick={handleNextMonth}
          className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 text-sm"
        >
          Next
        </button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center font-semibold">{day}</div>
        ))}

        {daysInMonth.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(day)}
            className={`p-2 rounded-lg text-center ${
              day === null
                ? 'bg-transparent'
                : selectedDate === new Date(currentYear, currentMonth, day).toDateString()
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            disabled={day === null} // Disable empty slots
          >
            {day !== null ? day : ''}
          </button>
        ))}
      </div>

      {/* Selected date display */}
      {selectedDate && (
        <p className="mt-4 text-gray-600">Selected Date: {selectedDate}</p>
      )}
    </div>
  );
}
