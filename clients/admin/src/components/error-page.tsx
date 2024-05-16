import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((error as any).status === 404) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-4 py-12 md:px-6 lg:py-24">
        <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
          <div className="text-6xl">🙂</div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Oops, looks like you're lost!
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Don't worry, we'll help you find your way back.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            to="#"
          >
            Take me home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 px-4 py-12 md:px-6 lg:py-24">
      <div className="flex max-w-md flex-col items-center justify-center gap-4 text-center">
        <div className="text-6xl">🤯</div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Something went wrong!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl">
            We're working on it and we'll get it fixed as soon as we can.
          </p>
        </div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          to="#"
        >
          Take me home
        </Link>
      </div>
    </div>
  );
}
