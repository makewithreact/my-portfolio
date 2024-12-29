import Image, { StaticImageData } from 'next/image';

type MyProjectItemProps = {
  title: string;
  image: StaticImageData;
  category: string;
}

export function MyProjectItem({
  title,
  image,
  category
}: MyProjectItemProps) {
  return (
    <div className="flex flex-col mt-4">
      <Image src={image} alt={title} width={245} height={390} />
      <span className="text-sm text-orange-600 mt-2">{category}</span>
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  )
}
