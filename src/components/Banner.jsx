import React, { useEffect, useRef, useState } from 'react'

const Banner = () => {
  const images = [
    '/assets/images/building.svg',
    '/assets/images/event1.svg',
    '/assets/images/logo.svg',
    '/assets/images/event1.svg'
  ]
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const start = () => {
    stop()
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % images.length)
    }, 4000)
  }
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  useEffect(() => {
    start()
    return () => stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const prev = () => setIndex(i => (i - 1 + images.length) % images.length)
  const next = () => setIndex(i => (i + 1) % images.length)
  const go = (i) => setIndex(i)

  return (
    <section className="banner">
      <div className="banner-left">
        <div className="carousel" onMouseEnter={stop} onMouseLeave={start}>
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((src, i) => (
              <div className={`slide ${i === index ? 'active' : ''}`} key={i}>
                <img src={src} alt={`Slide ${i + 1}`} />
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={() => { prev(); start() }} aria-label="Previous slide">‹</button>
          <button className="carousel-btn next" onClick={() => { next(); start() }} aria-label="Next slide">›</button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => { go(i); start() }} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="banner-caption">WELCOME TO GWCL</div>
      </div>

      <aside className="banner-right">
        <div className="tabs-header">
          <button className="tab active">Latest News</button>
          <button className="tab">Events</button>
          <button className="tab">Announcements</button>
        </div>
        <div className="tab-content">
          <img src="/assets/images/event1.svg" alt="event" />
          <h4>Annual Sports Day - 2024</h4>
        </div>
      </aside>
    </section>
  )
}

export default Banner
