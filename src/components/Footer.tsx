export default function Footer() {
  return (
    <div
      id="rsvp"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between" style={{ backgroundColor: '#1a2e3a' }}>
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: '#7ab3cc' }}>Детали</h3>
                <p className="text-sm sm:text-base" style={{ color: '#d6eaf5' }}>29 августа 2026</p>
                <p className="text-sm sm:text-base" style={{ color: '#d6eaf5' }}>Начало в 15:00</p>
                <p className="text-sm sm:text-base" style={{ color: '#d6eaf5' }}>«Берёзовая роща», оз. Касарги</p>
                <p className="text-xs sm:text-sm" style={{ color: '#7ab3cc' }}>Сосновский р-н, Челябинская обл.</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm tracking-widest" style={{ color: '#7ab3cc' }}>Связаться</h3>
                <a
                  href="tel:+79634666634"
                  className="text-sm sm:text-base transition-colors duration-300"
                  style={{ color: '#d6eaf5' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7ab3cc')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#d6eaf5')}
                >
                  Сергей: +7 963 466-66-34
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                style={{ color: '#7ab3cc', fontFamily: "'Playfair Display', serif" }}
              >
                С & А
              </h1>
              <p className="text-sm sm:text-base" style={{ color: '#d6eaf5', opacity: 0.6 }}>С любовью, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}