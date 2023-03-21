import { FC } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts").then(
  //   (res) => res.json()
  // );

  // const param = await res.slice(0, 3)?.map((item: ProductProps) => {
  //   return {
  //     params: {
  //       postId: `${item.id}`,
  //     },
  //   };
  // });
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log("ISR");
  // const { params } = context;
  // const res = await fetch(
  //   `http://localhost:4000/products/${params?.productId}`
  // ).then((res) => res.json());

  // if (!res.id) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      product: {
        id: 1,
        description: "description",
        title: "Hello",
        price: "10$",
      },
    },
    revalidate: 10,
  };
};

interface Props {
  product?: ProductProps;
}

const Product: FC<Props> = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h2>
        {product?.id} {product?.title} {product?.price}
      </h2>
      <p>{product?.description}</p>
      <hr />
    </div>
  );
};
export default Product;
