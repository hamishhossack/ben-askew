type Props = {
  color?: string
}

export default function SectionBreak({ color = 'white' }: Props) {
  return (
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px', transform: 'translateZ(0)' }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon className={`text-${color} fill-current`} points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  )
}
