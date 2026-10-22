import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Ayon Roy',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-7xl sm:text-9xl font-bold font-mono text-green mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-4xl font-bold text-lightestSlate mb-6">
        Page Not Found
      </h2>
      <p className="max-w-md text-slate text-base sm:text-lg mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-teal px-8 py-4">
        Go Home
      </Link>
    </div>
  );
}
