import { Image } from "next-sanity/image"

const myPortableTextComponents = {
  types: {
    image: ({value}:any) => <Image alt="" src={value.imageUrl} />,
    callToAction: ({value, isInline}:any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({children, value} :any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({children}:any) => <h4 className="text-2xl">{children}</h4>,
    blockquote: ({children}:any) => <blockquote className="border-l-purple-500">{children}</blockquote>,

    // Ex. 2: rendering custom styles
    customHeading: ({children}:any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
}


export {myPortableTextComponents}