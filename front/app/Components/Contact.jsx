'use client'
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // تحقق بسيط
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }

    setIsSubmitting(true)

    // محاكاة إرسال البيانات (API)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess('✅ Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-Black-100 text-white w-[90%] max-w-2xl p-6 rounded-2xl relative shadow-xl border border-Gray-200"
          >
            {/* زر الإغلاق */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-2xl text-white hover:text-Gray-400 transition"
            >
              <IoIosClose />
            </button>

            {/* العنوان */}
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>

            {/* الفورم */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400 focus:ring-2 focus:ring-Primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400 focus:ring-2 focus:ring-Primary"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400 focus:ring-2 focus:ring-Primary"
              />
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                className="bg-Gray-100 text-white px-4 py-2 rounded-md outline-none placeholder:text-Gray-400 h-28 resize-none focus:ring-2 focus:ring-Primary"
              />

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">{success}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-Primary hover:bg-Primary/80 text-black font-semibold py-2 rounded-md transition flex items-center justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Contact
