'use client'
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'

const Contact = ({isOpen, setIsOpen}) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
    const [message, setMessage] = useState('')
  return (
      <div className={`fixed inset-0 z-[1000] transition-all duration-700 ${isOpen ? 'visible' : 'invisible pointer-events-none'} flex items-center justify-center bg-black/70 backdrop-blur-sm`}>
      <div className="bg-Black-100 text-white w-[90%] max-w-2xl p-6 rounded-2xl relative shadow-xl border border-Gray-200">
        {/* زر الإغلاق */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-2xl text-white hover:text-Gray-400 transition"
        >
          <IoIosClose />
        </button>

        {/* العنوان */}
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        {/* الفورم */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400"
          />
        <textarea
            cols='40'
            type="tel"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400"
          />

          <button
            type="submit"
            className="mt-2 bg-Accent-100 hover:bg-Accent-200 text-Black font-semibold py-2 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
