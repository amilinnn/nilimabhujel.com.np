import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center items-center order-2 lg:order-1">
            <img src="../assets/404.svg" alt="unavailable-robot" />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-xl md:text-4xl mb-[20px]">Oops! Page not found..</h1>
            <p className="text-lg mb-[20px] md:w-[500px] font-light">
              Sorry, the page you are looking for doesn’t exist or has been
              removed.
            </p>
            <Link href="/" className="py-4 px-5 rounded-full bg-[#8986C2] text-white no-underline">Back to home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
