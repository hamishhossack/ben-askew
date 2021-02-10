import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

type Props = {
  quotes: { name: string; quote: string }[]
}

function QuoteSlider({ quotes }: Props) {
  return (
    <CarouselProvider
      className="w-full py-24"
      visibleSlides={1}
      totalSlides={quotes.length}
      step={1}
      isPlaying={true}
      naturalSlideWidth={1600}
      naturalSlideHeight={1600}
    >
      <Slider>
        {quotes.map((q, i) => (
          <Slide index={i} key={q.name}>
            <div className="p-6">
              <blockquote className="relative rounded-lg shadow-lg px-10 py-6 bg-white">{q.quote}</blockquote>
              <p className="text-right text-l italic font-bold">{q.name}</p>
            </div>
          </Slide>
        ))}
      </Slider>
      <DotGroup />
    </CarouselProvider>
  )
}

export default QuoteSlider
