import Link from "next/link";
import Head from "next/Head"
export default function PageNotfound() {
    
  return (
    <>
      <Head>
        <title>Page not found - service-store</title>
        <meta
          name="description"
          content="page not found"
        />
      </Head>
        <div
        className="tw-w-10 tw-mt-6 tw-mx-auto tw-h-auto tw-flex tw-bg-red-500  tw-items-center  
        tw-justify-center"
        >
          <div className="tw-px-40 tw-py-20 tw-bg-white tw-rounded-md tw-shadow-xl">
            <div className="tw-flex tw-flex-col tw-items-center">
              <h1 className="tw-font-bold tw-text-red-600 tw-text-9xl">404</h1>

              <h6 className="tw-mb-2 tw-text-2xl tw-font-bold tw-text-center tw-text-gray-800 ">
                <span className="tw-text-red-500">Oops!</span> Page not found
              </h6>

              <p className="tw-mb-8 tw-text-center tw-text-gray-500">
                The page youre looking for doesnt exist.
              </p>

              <Link href="/">
                <a className="tw-px-6 tw-py-2 tw-text-white tw-font-bold tw-no-underline tw-p-5 hover:tw-cursor-pointer
                 hover:tw-bg-blue-400 hover:tw-no-underline  tw-font-bold tw-text-green-800 tw-bg-blue-200">
                  Go to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
  );
}
