import React, { useRef } from 'react'

const SvgIcon = ({ name }) => {
  switch (name) {
    case 'courses':
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H20" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="6.5" width="6" height="12" rx="1" stroke="#0b6b86" strokeWidth="1.5"/>
          <rect x="9.5" y="6.5" width="11" height="12" rx="1" stroke="#0b6b86" strokeWidth="1.5"/>
        </svg>
      )
    case 'brochure':
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3h10v14a2 2 0 0 1-2 2H7V3z" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7h8" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11h8" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'admission':
      return (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L3 7v6c0 5 3.58 8 9 8s9-3 9-8V7l-9-5z" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12h6" stroke="#0b6b86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    default:
      return null
  }
}

const IconCircle = ({ src, alt, icon }) => {
  const imgRef = useRef(null)

  const handleMove = (e) => {
    const el = imgRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width // 0..1
    const y = (e.clientY - rect.top) / rect.height

    const moveX = (x - 0.5) * 14 // horizontal translate
    const moveY = (y - 0.5) * 10 // vertical translate
    const rotate = (x - 0.5) * 8 // small rotation

    el.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`
    el.style.transition = 'transform 0s'
  }

  const handleLeave = () => {
    const el = imgRef.current
    if (!el) return
    el.style.transition = 'transform 300ms cubic-bezier(.2,.9,.3,1)'
    el.style.transform = 'translate(0,0) rotate(0deg)'
  }

  return (
    <div className="icon-circle" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {src ? (
        <img ref={imgRef} src={src} alt={alt} />
      ) : (
        <div ref={imgRef} style={{display: 'inline-block'}} aria-hidden>
          <SvgIcon name={icon} />
        </div>
      )}
    </div>
  )
}

export default IconCircle
