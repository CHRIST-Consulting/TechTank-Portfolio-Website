import React from "react"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    id: 1,
    author: "Harsh Jangid",
    quote: "Christ Consulting has been a game-changer for our business. Their innovative solutions and expert guidance have helped us achieve milestones we never thought possible!",
    avatarUrl: "/images/home/testemonial.png",
  },
  {
    id: 2,
    author: "Harsh Jangid",
    quote: "Christ Consulting has been a game-changer for our business. Their innovative solutions and expert guidance have helped us achieve milestones we never thought possible!",
    avatarUrl: "/images/home/testemonial.png",
  },
  {
    id: 3,
    author: "Harsh Jangid",
    quote: "Christ Consulting has been a game-changer for our business. Their innovative solutions and expert guidance have helped us achieve milestones we never thought possible!",
    avatarUrl: "/images/home/testemonial.png",
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gray-50 border-b border-[#4FA8FF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000033] mb-12 md:mb-16 text-center">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials