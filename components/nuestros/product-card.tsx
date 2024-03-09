import Image from 'next/image';

type ProductCardProps = {
  imageUrl: string;
  productName: string;
  price: number;
  currencyCode: string;
};

function ProductCard({ imageUrl, productName, price, currencyCode }: ProductCardProps) {
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-300 shadow-md">
      <div className="relative mx-3 mt-3 flex h-72 w-72 overflow-hidden rounded-xl">
        <Image className="object-cover" fill src={imageUrl} alt="product image" />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{productName}</h5>
      </div>
      <a
        href="#"
        className="mx-2 mb-2 flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        {currencyCode}
        {price}
      </a>
    </div>
  );
}

export default ProductCard;
