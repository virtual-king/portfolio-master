'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-navy text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind? Let's talk about what we can build together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/8 bg-navy-light/50 p-6 md:p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className="ri-mail-line text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a href="mailto:akashbhatta014@gmail.com" className="hover:text-blue-400 transition-colors">
                      akashbhatta014@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className="ri-phone-line text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <a href="tel:+9779840358945" className="hover:text-blue-400 transition-colors">
                      +977 9840358945
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className="ri-map-pin-line text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <span>New Baneshwor, Kathmandu</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className="ri-linkedin-box-fill text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/dipendra-bhatta-/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/dipendra-bhatta-/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <i className="ri-medium-fill text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Medium</p>
                    <a 
                      href="https://medium.com/@dipendrabhattadigitalmarketing" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-400 transition-colors"
                    >
                      @dipendrabhattadigitalmarketing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-white/8 bg-navy-light/50 p-6 md:p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="font-heading text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dipendra-bhatta-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
                >
                  <i className="ri-linkedin-fill text-xl text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/dipendrabhattaofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center hover:bg-pink-500/20 hover:scale-110 transition-all duration-300"
                >
                  <i className="ri-instagram-line text-xl text-pink-400" />
                </a>
                <a
                  href="https://medium.com/@dipendrabhattadigitalmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center hover:bg-gray-500/20 hover:scale-110 transition-all duration-300"
                >
                  <i className="ri-medium-fill text-xl text-gray-400" />
                </a>
                <a
                  href="https://github.com/virtual-king"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center hover:bg-gray-500/20 hover:scale-110 transition-all duration-300"
                >
                  <i className="ri-github-fill text-xl text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/8 bg-navy-light/50 p-6 md:p-8 hover:border-white/20 transition-all duration-300">
            <h3 className="font-heading text-xl font-semibold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
                <p className="text-xs text-gray-500 mt-2 text-right">
                  {formData.message.length}/500 characters
                </p>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 hover:shadow-blue-900/50"
              >
                Send Message
                <i className="ri-send-plane-line ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Map / Location CTA */}
        <div className="mt-12 p-6 md:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 via-navy-light to-navy text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <i className="ri-map-pin-2-line text-2xl text-blue-400" />
            <h3 className="font-heading text-xl font-bold text-white">Office Location</h3>
          </div>
          <p className="text-gray-400 mb-4">New Baneshwor, Kathmandu, Nepal</p>
          <a 
            href="https://www.google.com/maps/place/Kathmandu/@27.7172453,85.3239605,12z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <i className="ri-map-2-line" /> Open in Maps
            <i className="ri-arrow-right-line" />
          </a>
        </div>

      </div>
    </div>
  )
}