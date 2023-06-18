import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-gray-600 p-8 rounded-3xl">
      <h1 className="p-4 text-4xl tracking-tight font-extrabold text-amber-400 text-center mb-8">
        Check out some of the team wins.{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="/1.png" alt="" />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="2.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="3.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="4.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="10.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="6.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="9.png"
            alt=""
            //   width={100}
            //   height={80}
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="7.png"
            alt=""
            // width={100}
            // height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
