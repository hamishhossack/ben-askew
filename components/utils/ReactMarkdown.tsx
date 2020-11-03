import Link from 'next/link'
import { ElementType, ReactNode } from 'react'
import ReactMarkdownOrig from 'react-markdown'

const renderers: { [nodeType: string]: ElementType } = {
  heading: ({ level, children }: { level: number; children: ReactNode }) => {
    switch (level) {
      case 1:
        return <h1 className="text-5xl font-semibold">{children}</h1>
      case 2:
        return <h2 className="text-4xl font-semibold">{children}</h2>
      case 3:
        return <h3 className="text-3xl font-semibold">{children}</h3>
      case 4:
        return <h4 className="text-2xl font-semibold">{children}</h4>
      case 5:
        return <h5 className="text-1xl font-semibold">{children}</h5>
      case 6:
      default:
        return <h6 className="font-semibold">{children}</h6>
    }
  },

  paragraph: (props) => <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700" {...props} />,

  image: (props) => <img className="max-w-full rounded-lg shadow-lg" {...props} />,

  link: (props) => (
    <Link href={props.href}>
      <a className="font-bold text-gray-800 mt-8">{props.children}</a>
    </Link>
  ),
}

export default function ReactMarkdown(props: ReactMarkdownOrig.ReactMarkdownProps) {
  return <ReactMarkdownOrig renderers={renderers} {...props} />
}
