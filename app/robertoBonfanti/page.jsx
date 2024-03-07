import { shopifyFetch } from 'lib/shopify';
import Image from 'next/image';

function graphql(queries) {
  return queries.join('\n');
}

export default async function Bodega() {
  const query = graphql`
    {
      collectionByHandle(handle: "roberto-bonfanti") {
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
          }
        }
      }
    }
  `;

  const data = await shopifyFetch({ query });

  console.log(data);

  const collection = data.body.data.collectionByHandle;

  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold uppercase ">{collection.title}</h1>
      <p className="text-md mt-9 text-center opacity-70">{collection.description}</p>
      <div className="relative  aspect-video w-80">
        <Image src={collection.image.url} alt="imagen" fill className="object-cover" />
      </div>

      {collection.products.nodes.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
}
