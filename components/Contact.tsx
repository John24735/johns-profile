import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-bold text-white text-center">
        Let’s Build Something Exceptional
      </h2>
      <p className="max-w-[600px] text-center text-textDark font-medium text-base">
        I’m open to new projects, collaborative ventures, and opportunities that challenge the status quo.
        If you’re looking for someone who writes clean code, delivers on time, and takes ownership — let’s talk.
        Whether it’s a product idea, a team fit, or strategic consultation, my inbox is ready.
      </p>

      <a href="mailto:jadtec77u@gmail.com">
        <button className="w-44 h-14 border border-textGreen mt-6 font-titleFont text-[14px] text-textGreen tracking-wider rounded-md hover:bg-hoverColor hover:shadow-md duration-300">
          Get in Touch 💼
        </button>
      </a>
    </section>
  );
};

export default Contact;
