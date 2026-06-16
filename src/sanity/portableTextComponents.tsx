import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

// Helper to extract dimensions from Sanity image asset reference/ID
const getImageDimensions = (value: any) => {
  const ref = value?.asset?._ref || value?.asset?._id;
  if (!ref) return null;
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) return null;
  return {
    width: parseInt(match[1], 10),
    height: parseInt(match[2], 10),
  };
};

export const components: PortableTextComponents = {
  types: {
    image: (props) => {
      if (!props.value) return null;
      const dimensions = getImageDimensions(props.value);
      const width = dimensions?.width || 800;
      const height = dimensions?.height || 600;

      return (
        <Image
          className="rounded-lg not-prose max-w-full max-h-[600px] w-auto h-auto object-contain block shadow-sm my-8 ml-0 mr-auto"
          src={urlFor(props.value)
            .width(Math.min(width, 1200))
            .quality(90)
            .auto("format")
            .url()}
          alt={props.value.alt || ""}
          width={width}
          height={height}
          loading="lazy"
        />
      );
    },
  },
};
