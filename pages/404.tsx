import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2" id="notfound">
          <div className="flex flex-col justify-center items-center">
            <img src="../assets/404.svg" alt="unavailable-robot" />
          </div>
          <div className="flex flex-col justify-center items-start text-left">
            <h1>Oops! Page not found..</h1>
            <p>
              Sorry, the page you are looking for doesn’t exist or has been
              removed.
            </p>
            <Link href="/">Back to home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
