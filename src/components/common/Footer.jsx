"use client"

import { MapPin, Phone, FileText, Mail, Globe, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <h2 className="text-[#000033] text-xl font-bold">CHRIST</h2>
            <h2 className="text-[#0099FF] text-xl font-bold">CONSULTING</h2>
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              className="bg-[#000033] p-2 rounded-full hover:bg-[#0099FF] transition-colors"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="bg-[#000033] p-2 rounded-full hover:bg-[#0099FF] transition-colors"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#000033] shrink-0 mt-1" />
              <p className="text-sm text-gray-600">
                CHRIST (Deemed to be University)
                <br />
                Dharmaram College Post, Hosur Road, Bengaluru - 560029,
                <br />
                Karnataka, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-[#000033]" />
              <p className="text-sm text-gray-600">Tel: +91 8040129157 / 9958 / 9700</p>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#000033]" />
              <p className="text-sm text-gray-600">Fax: 40129000</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#000033]" />
              <a href="mailto:mail@christuniversity.in" className="text-sm text-gray-600 hover:text-[#0099FF]">
                Email: mail@christuniversity.in
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#000033]" />
              <a
                href="https://christuniversity.in/center/C/CONSULTING/"
                className="text-sm text-gray-600 hover:text-[#0099FF]"
              >
                Web: https://christuniversity.in/center/C/CONSULTING/
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center gap-4">
            <a href="/team" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              Team
            </a>
            <a href="/service" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              Service
            </a>
            <a href="/contact" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              Contact
            </a>
          </div>

          <div className="flex flex-col items-start md:items-center gap-4">
            <a href="/#about-us" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              About Us
            </a>
            <a href="/#our-clients" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              Our Clients
            </a>
            <a href="/#testimonials" className="text-[#000033] hover:text-[#0099FF] transition-colors">
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}