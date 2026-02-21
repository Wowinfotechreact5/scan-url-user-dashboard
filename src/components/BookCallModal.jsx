import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

export default function BookCallModal({ onClose }) {

      // steps: 1=date/time, 2=enter details
      const [step, setStep] = useState(1);

      const [selectedDate, setSelectedDate] = useState(null);
      const [selectedTime, setSelectedTime] = useState(null);

      const [formData, setFormData] = useState({
            name: "",
            email: "",
            notes: "",
      });

      const dates = [23, 24, 25, 26, 27, 28];

      const timeSlots = [
            "12:00am",
            "7:30pm",
            "8:00pm",
            "8:30pm",
            "9:00pm",
      ];

      const handleNext = () => {
            if (!selectedDate || !selectedTime) {
                  alert("Select date and time");
                  return;
            }

            setStep(2);
      };

      const handleSchedule = () => {

            console.log({
                  date: selectedDate,
                  time: selectedTime,
                  ...formData,
            });

            alert("Meeting Scheduled Successfully");

            onClose();
      };

      return (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                  <div className="bg-white w-[900px] h-[550px] rounded-lg shadow-lg flex">

                        {/* LEFT PANEL */}
                        <div className="w-1/2 border-r p-6">

                              {step === 2 && (
                                    <button
                                          onClick={() => setStep(1)}
                                          className="mb-4"
                                    >
                                          <ArrowLeft />
                                    </button>
                              )}

                              <h2 className="text-xl font-bold mb-2">
                                    APIVoid Introduction
                              </h2>

                              <p className="text-gray-600 mb-2">
                                    30 min meeting
                              </p>

                              {selectedDate && selectedTime && (
                                    <p className="text-gray-600 mb-2">
                                          {selectedTime} - Feb {selectedDate}, 2026
                                    </p>
                              )}

                              <p className="text-gray-600">
                                    Book a quick call to discuss your needs.
                              </p>

                        </div>


                        {/* RIGHT PANEL */}
                        <div className="w-1/2 p-6 relative overflow-y-auto">

                              {/* Close */}
                              <button
                                    onClick={onClose}
                                    className="absolute right-3 top-3"
                              >
                                    <X />
                              </button>


                              {/* STEP 1 → DATE & TIME */}
                              {step === 1 && (
                                    <>
                                          <h3 className="text-lg font-semibold mb-4">
                                                Select a Date & Time
                                          </h3>

                                          {/* Dates */}
                                          <div className="flex gap-2 mb-6">

                                                {dates.map((date) => (
                                                      <button
                                                            key={date}
                                                            onClick={() => {
                                                                  setSelectedDate(date);
                                                                  setSelectedTime(null);
                                                            }}
                                                            className={`
                      w-12 h-12 rounded-full border
                      ${selectedDate === date
                                                                        ? "bg-blue-600 text-white"
                                                                        : "bg-gray-100"
                                                                  }
                    `}
                                                      >
                                                            {date}
                                                      </button>
                                                ))}

                                          </div>


                                          {/* Times */}
                                          {selectedDate && (
                                                <div className="space-y-2">

                                                      {timeSlots.map((time) => (
                                                            <button
                                                                  key={time}
                                                                  onClick={() =>
                                                                        setSelectedTime(time)
                                                                  }
                                                                  className={`
                        w-full border rounded-lg py-2
                        ${selectedTime === time
                                                                              ? "bg-gray-700 text-white"
                                                                              : "hover:bg-gray-100"
                                                                        }
                      `}
                                                            >
                                                                  {time}
                                                            </button>
                                                      ))}

                                                </div>
                                          )}


                                          {/* Next Button */}
                                          {selectedTime && (
                                                <button
                                                      onClick={handleNext}
                                                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
                                                >
                                                      Next
                                                </button>
                                          )}
                                    </>
                              )}


                              {/* STEP 2 → ENTER DETAILS */}
                              {step === 2 && (
                                    <>
                                          <h3 className="text-lg font-semibold mb-4">
                                                Enter Details
                                          </h3>

                                          {/* Name */}
                                          <div className="mb-3">
                                                <label>Name *</label>
                                                <input
                                                      type="text"
                                                      className="w-full border rounded-lg p-2"
                                                      value={formData.name}
                                                      onChange={(e) =>
                                                            setFormData({
                                                                  ...formData,
                                                                  name: e.target.value,
                                                            })
                                                      }
                                                />
                                          </div>


                                          {/* Email */}
                                          <div className="mb-3">
                                                <label>Email *</label>
                                                <input
                                                      type="email"
                                                      className="w-full border rounded-lg p-2"
                                                      value={formData.email}
                                                      onChange={(e) =>
                                                            setFormData({
                                                                  ...formData,
                                                                  email: e.target.value,
                                                            })
                                                      }
                                                />
                                          </div>


                                          {/* Notes */}
                                          <div className="mb-3">
                                                <label>Notes</label>
                                                <textarea
                                                      className="w-full border rounded-lg p-2"
                                                      value={formData.notes}
                                                      onChange={(e) =>
                                                            setFormData({
                                                                  ...formData,
                                                                  notes: e.target.value,
                                                            })
                                                      }
                                                />
                                          </div>


                                          {/* Schedule Button */}
                                          <button
                                                onClick={handleSchedule}
                                                className="w-full bg-blue-600 text-white py-2 rounded-lg"
                                          >
                                                Schedule Event
                                          </button>

                                    </>
                              )}

                        </div>

                  </div>

            </div>
      );
}