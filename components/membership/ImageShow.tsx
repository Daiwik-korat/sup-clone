// ImageShow.tsx
"use client"
import Image from "next/image"

const imagesurl = [
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688046649437614ee5ce9828_SKU%20Frame%202.avif",
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/688a8c0fd46fba51230bdfcc_image%20(6).avif",
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a4d57ea732f68822a4d11e_image%20(13).avif",
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435b09ee408729527dd3_marketplace-white-bg.avif"
]

function ImageShow (props: {number: number}) {
    const imageIndex = props.number - 1;

    if (imageIndex < 0 || imageIndex >= imagesurl.length) return null;

    return (
        <div className="relative w-full h-full">
            <Image
                src={imagesurl[imageIndex]}
                fill
                sizes="(max-width: 991px) 100vw, 80vw"
                className="object-contain w-full h-full" 
                alt="Product preview"
            />
        </div>
    )
}

export default ImageShow