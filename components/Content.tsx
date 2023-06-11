import Image from "next/image";

const Content = () => {
  return (
    <section className="bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
        <div className="font-light text-gray-400 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-amber-400">
            A smart bet if you value quality, honesty and hard-work:
          </h2>
          <p className="mb-4">
            I know trusting a traditional gym-floor coach with your goals and
            ambitions is difficult. HJB coaching is a modern alternative rooted
            in cutting-edge science, offering a solution to old-school generic
            ‘copy & paste’ bodybuilder coaching. Your goals will be achieved
            through creative and complex layers of science-based coaching,
            specifically designed to your needs and body. All of which is
            efficiently showcased into one neat package, taking the guesswork
            out of your training.
          </p>
          <p>
            My extensive experience working with professional athletes from
            Pro-boxers, footballers and bodybuilders has taught me a vast number
            of lessons. These techniques and skills are embedded within your
            coaching and really elevate your coaching to the highest quality.
            This is what sets HJB coaching apart from traditional online coaches
            that struggle to offer creative and adaptable plans for you.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/harrison2.jpeg"
            alt="office content 1"
            width={500}
            height={500}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/harrison3.jpeg"
            alt="office content 2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
