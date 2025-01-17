import { shopifyFetch } from 'lib/shopify';

import ProductCard from 'components/nuestros/product-card';
import Image from 'next/image';
import FondoBodega from '../../public/images/fondoBodega.png';

const bodega = 'roberto-bonfanti';

export default async function Bodega() {
  const query = `
    {
      collectionByHandle(handle: "${bodega}") {
        description
        title
        image {
          url
        }
        products(first: 10) {
          nodes {
            title
            description
            images(first: 1) {
              nodes {
                url
              }
            }
						
            productType
          }
        }
      }
    }
  `;

  const data: any = await shopifyFetch({ query });

  console.log(data.body);

  return (
    <div className="min-h-screen w-[100%] items-center justify-center overflow-hidden">
      <section className="relative h-screen min-h-screen w-screen items-center justify-center">
        <div className="absolute top-0 h-[100%] w-[100%]">
          <Image
            src={data.body.data.collectionByHandle.image.url}
            alt="fondo"
            fill
            className="object-cover"
          />
          <div className="absolute h-[100%] w-[100%] bg-black opacity-50"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 z-10 flex w-[600px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-[50px]">
          <h2 className="text-center text-[64px] font-extrabold uppercase text-white">
            {/**@ts-ignore */}
            {data.body.data.collectionByHandle.title}
          </h2>
          <div className="flex gap-[15px]">
            <a
              href="#"
              className="rounded-full border border-white px-[25px] py-[15px] transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
            >
              Nuestra Historia
            </a>
            <a
              href="#"
              className="rounded-full border border-white px-[25px] py-[15px] transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
            >
              Ver Vinos
            </a>
          </div>
        </div>
      </section>

      <section className="min-h-screen items-center justify-center bg-white p-[50px]">
        <div className="container mx-auto flex flex-col gap-[50px]">
          <div className="flex w-[50%] flex-col gap-[25px]">
            <h3 className="text-[32px] font-bold text-black">
              Vinos con tradición, elaborados con pasión
            </h3>
            <p className="text-[16px] font-normal text-black">
              {data.body.data.collectionByHandle.description}
            </p>
          </div>

          <div className="relative h-[600px] w-[100%]">
            <Image src={FondoBodega} alt="imagen" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="min-h-screen items-center justify-center bg-white p-[50px]">
        <div className="container mx-auto flex flex-col gap-[50px]">
          <div className="flex w-[50%] flex-col gap-[25px]">
            <h3 className="text-[32px] font-bold text-black">Conoce nuestros productos</h3>
            <p className="text-[16px] font-normal text-black">
              Aliquam lectus urna, pharetra a enim et, fringilla aliquet massa. Donec congue ligula
              nunc, nec feugiat erat laoreet ut. Nullam laoreet, odio quis sodales pharetra, dolor
              risus pulvinar augue, sed auctor nisi odio id.
            </p>
          </div>

          <div className="flex gap-[20px]">
            <div className="flex basis-1/3 flex-col border">
              <p className="text-black">sdjkfhskdjfhsk</p>
            </div>
            <div className="grid basis-3/4 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
              {/**@ts-ignore */}
              {data.body.data.collectionByHandle.products.nodes.map((product, index) => (
                <h4 key={index} className="text-black">
                  {/**@ts-ignore */}
                  <ProductCard
                    imageUrl={product.images.nodes[0].url}
                    productName={product.title}
                    price={12354}
                    currencyCode="$"
                  />
                </h4>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
