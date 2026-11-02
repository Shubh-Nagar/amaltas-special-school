import { BlossomChain } from '@/components/ui/Blossom';
import { Button } from '@/components/ui/Button';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className="relative overflow-hidden bg-cream-50 py-32">
      <BlossomChain className="absolute left-1/2 top-0 h-48 w-12 -translate-x-1/2" length={5} />
      <div className="container-x relative pt-16 text-center">
        <p className="font-display text-8xl font-semibold text-leaf-200">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-ink">This page could not be found.</h1>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Home
          </Button>
          <Button to="/contact-us" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
