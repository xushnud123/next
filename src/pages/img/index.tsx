import Image from "next/image";
import { FC } from "react";

import cls from "./images.module.css";

interface ImagesProps {}

const Images: FC<ImagesProps> = () => {
  return (
    <div className={cls.wrapper}>
      <img src='/next-img.jpeg' alt='img not found' className={cls.img} />
      <div className={cls.row}>
        <Image
          src='/next-img.jpeg'
          fill
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          alt='img not found'
        />
      </div>
    </div>
  );
};
export default Images;
