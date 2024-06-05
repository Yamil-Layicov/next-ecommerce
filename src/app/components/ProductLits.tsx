import Image from "next/image";
import Link from "next/link";

const ProductLits = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:-[22%]">
        <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/25396256/pexels-photo-25396256/free-photo-of-a-woman-in-a-pink-dress-is-standing-in-front-of-a-pink-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src="https://images.pexels.com/photos/25396256/pexels-photo-25396256/free-photo-of-a-woman-in-a-pink-dress-is-standing-in-front-of-a-pink-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute pbject-cover rounded-md"
        />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span>$49</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductLits;
