import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, ImageWithZoom, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

type Props = {
  gallery: string[]
}

function WorkSlider({ gallery }: Props) {
  return (
    <CarouselProvider
      className="w-full py-24"
      visibleSlides={2}
      totalSlides={gallery.length}
      step={2}
      dragStep={2}
      naturalSlideWidth={1600}
      naturalSlideHeight={1600}
    >
      <Slider>
        {gallery.map((img, i) => (
          <Slide index={i} key={img}>
            <ImageWithZoom src={require(`../../data/${img}`)} />
          </Slide>
        ))}
      </Slider>
      <div className="mx-auto text-center p-4">
        <ButtonBack className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Back
        </ButtonBack>
        <ButtonNext className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Next
        </ButtonNext>
      </div>
      <DotGroup />
    </CarouselProvider>
  )
}

export default WorkSlider
