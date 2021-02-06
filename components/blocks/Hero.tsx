type Props = {
  title: string
  slogan?: string
  image: string
  underlinedTitle?: string
  nextBg?: string
}

function Hero({ title, underlinedTitle, slogan, image, nextBg = 'gray-300' }: Props) {
  return (
    <div
      className="relative pt-32 lg:pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: '75vh',
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url('${require(`../../data/${image}`)}')` }}
      >
        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-white font-semibold text-5xl">
              {title} <span className="highlight">{underlinedTitle}</span>
            </h1>
            {slogan && <p className="mt-4 text-lg text-gray-300">{slogan}</p>}
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: '70px', transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className={`fill-current ${nextBg ? `text-${nextBg}` : ''}`}
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  )
}
export default Hero
