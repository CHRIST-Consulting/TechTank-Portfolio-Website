import { Card } from "@/components/ui/card"

export default function TestimonialCard({ quote, author, avatarUrl }) {
  return (
    <Card className="w-full bg-white rounded-3xl shadow-lg relative">
      <div className="p-8 space-y-6">
        <div className="text-[80px] leading-none text-[#000033] font-serif">"</div>

        <p className="text-[#000033] text-base sm:text-lg leading-relaxed">{quote}</p>

        <div className="relative mt-12">
          <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-[#000033]"
            style={{
              clipPath: "url(#wave)",
            }}
          >
            <svg width="0" height="0">
              <defs>
                <clipPath id="wave" clipPathUnits="objectBoundingBox">
                  <path d="M0,0.3 Q0.2,0.2 0.4,0.3 Q0.6,0.4 0.8,0.3 Q1,0.2 1,0.3 L1,1 L0,1 Z" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white overflow-hidden bg-white">
              <img src={avatarUrl || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold mt-4 mb-6">{author}</h3>
          </div>
        </div>
      </div>
    </Card>
  )
}