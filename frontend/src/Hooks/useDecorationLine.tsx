import * as React from 'react'

type Props = {
  orientation: 'left' | 'right'
  color?: string
  thickness?: number
  thicknessDesktop?: number
}

export default function useDecorationLine(props: Props) {
  const ref = React.useRef<HTMLElement | null>(null)
  const {
    orientation,
    color = '#84A98C',
    thickness = 2,
    thicknessDesktop = 3,
  } = props

  React.useEffect(() => {
    let prevLine: null | HTMLElement = null
    const createLine = () => {
      if (prevLine) prevLine.remove()
      if (!ref.current) return
      const wWidth = window.innerWidth
      const rect = ref.current.getBoundingClientRect()

      const line = document.createElement('div')
      line.style.position = 'absolute'
      line.style.top = rect.bottom - 5 + 'px'
      if (wWidth > 1024 && thicknessDesktop) {
        line.style.borderBottom = thicknessDesktop + 'px solid ' + color
      } else {
        line.style.borderBottom = thickness + 'px solid ' + color
      }

      if (orientation === 'left') {
        line.style.left = '0px'
        line.style.width = rect.right - 20 + 'px'
      } else if (orientation === 'right') {
        line.style.left = rect.left + 10 + 'px'
        line.style.width = wWidth - rect.left - 10 + 'px'
      }

      ref.current.parentElement!.insertBefore(line, ref.current)
      prevLine = line
    }
    const observer = new IntersectionObserver(createLine)
    observer.observe(ref.current!)
    window.addEventListener('resize', createLine)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', createLine)
      if (prevLine) prevLine.remove()
    }
  }, [orientation, color, thickness, thicknessDesktop])

  return ref
}
