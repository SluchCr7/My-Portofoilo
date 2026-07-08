'use client'
import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

const Contact = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.')
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 2000)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 text-white placeholder:text-gray-600 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] transition-all duration-200"

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,3,25,0.8)', backdropFilter: 'blur(12px)' }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="w-full max-w-lg rounded-3xl overflow-hidden relative"
            style={{ background: '#0a0a1a', border: '1px solid rgba(99,102,241,0.25)', boxShadow: '0 0 60px rgba(99,102,241,0.15), 0 30px 60px rgba(0,0,0,0.5)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Gradient header */}
            <div className="relative px-8 pt-8 pb-6" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 100%)' }}>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <IoIosClose size={22} />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                  <FaPaperPlane className="text-white text-sm" />
                </div>
                <div>
                  <h2 className="text-xl font-black font-space text-white">Let&apos;s Connect</h2>
                  <p className="text-gray-400 text-xs">I&apos;ll reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-4">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message... *"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClass} resize-none`}
              />

              {/* Feedback */}
              <AnimatePresence>
                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-red-400 text-xs px-1 flex items-center gap-2">
                    <span>⚠</span> {error}
                  </motion.p>
                )}
                {success && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-emerald-400 text-xs px-1 flex items-center gap-2">
                    <span>✅</span> {success}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                style={{ background: isSubmitting ? 'rgba(99,102,241,0.5)' : 'linear-gradient(135deg, #6366f1, #3b82f6)', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Contact
