import { GetStaticProps } from "next";
import Link from "next/link";
import { FC } from "react";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface ProductsProps {
  products?: any[];
}

const Products: FC<ProductsProps> = ({ products }) => {
  const param = products?.map((item: ProductProps) => {
    return {
      params: {
        postId: item.id,
      },
    };
  });

  return (
    <div>
      <h1>Title</h1>
      <ol>
        {products?.map((item: any) => (
          <li key={item.id}>
            <Link href={`products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Products;

export const getStaticProps: GetStaticProps = async () => {
  // const res = await fetch("http://localhost:4000/products").then((res) =>
  //   res.json()
  // );

  return {
    props: {
      products: [
        {
          product: {
            id: 1,
            description: "description",
            title: "Hello",
            price: "10$",
          },
        },
      ],
    },
    revalidate: 10,
  };
};
