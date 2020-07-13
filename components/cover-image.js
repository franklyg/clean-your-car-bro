import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
    />
  )
  return (
    <div className="image">
        {image}
    </div>
  )
}
