import { Product } from "@/app/__lib/types";
import Image from "next/image";

interface Props {
  products: Product[];
  onMouseExit: () => void;
}

function CatProducts({ products, onMouseExit }: Props) {
  if (products.length === 0) return null;

  return (
    <div
      className="absolute left-0 right-0 top-full mt-2 flex justify-center"
      onMouseLeave={onMouseExit}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl w-full mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-sm">
              <Image
                src={products[0].imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`${products[0].tag} category`}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Products List Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Available Items
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {products.map((item, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700 text-sm"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatProducts;
