import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl sm:text-5xl">Page not found</h1>
      <p className="lede mt-6">
        This path is not part of the house. Return to the gallery, the vision, or
        home.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/gallery" className="btn-ghost">
          Gallery
        </Link>
      </div>
    </section>
  );
}
