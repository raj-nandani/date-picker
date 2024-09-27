"use client"
import React , {useState} from "react";



     

        const DateSelector = () => {
            const [name, setName] = useState('');
            const [startDate, setStartDate] = useState('');
            const [endDate, setEndDate] = useState('');
            const [frequency, setFrequency] = useState('none');
        
            const handledate = (e) => {
                e.preventDefault();
                if (new Date(endDate) <= new Date(startDate)) {
                    alert("End date must be after start date.");
                    return;
                }
                
                console.log({ name, startDate, endDate, frequency });
            };
        
            return (
                <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                    <h4 className="mb-2 flex flex-col text-black items-center justify-center p-4 text-white text-4xl">
                        Select a date here
                    </h4>
        
                    <div className="flex flex-col justify-center items-center bg-white rounded-lg p-8 max-w-xl w-full shadow-lg mt-2">
                        <form onSubmit={handledate}>
                            <div className="mb-4">
                                <label className="block mb-2 text-black text-lg">
                                    Task <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your task" 
                                    className="w-full bg-purple-200 border border-pink-400 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                                    required 
                                />
                            </div>
        
                            <div className="mb-4">
                                <label className="block mb-2 text-black text-lg">
                                    Start Date <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="date" 
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="w-full bg-purple-200 border border-pink-400 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300" 
                                    name="startdate" 
                                    required 
                                />
                            </div>
        
                            <div className="mb-4">
                                <label className="block mb-2 text-black text-lg">
                                    End Date <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="date" 
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="w-full bg-purple-200 border border-pink-400 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300" 
                                    name="enddate" 
                                    required 
                                />
                            </div>
        
                            <div className="mb-4">
                                <label className="block mb-2 text-black text-lg">
                                    Frequency
                                </label>
                                <select 
                                    value={frequency}
                                    onChange={(e) => setFrequency(e.target.value)}
                                    className="w-full bg-purple-200 border border-pink-400 p-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
                                >
                                    <option value="none">Select Frequency</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
        
                            <div className="mb-4">
                                <button 
                                    type="submit" 
                                    className="w-full bg-pink-200 text-black rounded-lg text-xl py-2 hover:bg-pink-300 transition-all duration-300 shadow-md transform hover:scale-105">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        };
        
        export default DateSelector;
        
    
  