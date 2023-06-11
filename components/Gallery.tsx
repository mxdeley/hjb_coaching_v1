import Image from "next/image";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[100px]">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/1.jpg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="2.jpeg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="3.jpeg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="4.jpeg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="5.jpeg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="6.jpeg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
          //   width={100}
          //   height={80}
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
          // width={100}
          // height={80}
        />
      </div>
      <div>
        {/* <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Gallery;
