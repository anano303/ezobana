/**
 * Optimized Image Component
 * Use this component instead of regular <img> tags for better performance
 */

import React from "react";

/**
 * OptimizedImage Component
 * @param {Object} props
 * @param {string} props.src - Original image source
 * @param {string} props.webpSrc - WebP version of the image (if available)
 * @param {string} props.alt - Image alt text
 * @param {number} props.width - Image width
 * @param {number} props.height - Image height
 * @param {string} props.className - CSS class names
 * @param {boolean} props.lazy - Whether to use lazy loading (default: true)
 * @param {string} props.sizes - Sizes attribute for responsive images
 * @param {Object} props.srcSet - Object with srcset entries {width: url}
 * @param {Object} props.webpSrcSet - Object with WebP srcset entries
 */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  className,
  lazy = true,
  sizes = "100vw",
  srcSet = {},
  webpSrcSet = {},
  ...props
}) => {
  // Create srcset string from object
  const createSrcSet = (srcSetObj) => {
    return Object.entries(srcSetObj)
      .map(([width, url]) => `${url} ${width}w`)
      .join(", ");
  };

  // Convert srcSet objects to strings
  const jpgSrcSetString =
    Object.keys(srcSet).length > 0 ? createSrcSet(srcSet) : "";
  const webpSrcSetString =
    Object.keys(webpSrcSet).length > 0 ? createSrcSet(webpSrcSet) : "";

  // Use picture element if WebP version is available
  if (webpSrc || webpSrcSetString) {
    return (
      <picture>
        {webpSrcSetString ? (
          <source type="image/webp" srcSet={webpSrcSetString} sizes={sizes} />
        ) : webpSrc ? (
          <source type="image/webp" srcSet={webpSrc} />
        ) : null}

        {jpgSrcSetString ? (
          <img
            src={src}
            srcSet={jpgSrcSetString}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={lazy ? "lazy" : "eager"}
            decoding="async"
            {...props}
          />
        ) : (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={lazy ? "lazy" : "eager"}
            decoding="async"
            {...props}
          />
        )}
      </picture>
    );
  }

  // Regular image if no WebP version
  return (
    <img
      src={src}
      srcSet={jpgSrcSetString}
      sizes={jpgSrcSetString ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={lazy ? "lazy" : "eager"}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
