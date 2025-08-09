"use client";
import NextImage from "next/image";

type ImageProps = {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  testid?: string;
};

const Image = ({ className, src, alt, width, height, testid }: ImageProps) => {
  return (
    <NextImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid={testid}
    />
  );
};

export default Image;
