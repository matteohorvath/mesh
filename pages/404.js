import { useLocale } from "@/lib/locale";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function Page404() {
  const locale = useLocale();

  return (
    <Container>
      <Navbar />
      <h1 className="text-5xl text-black dark:text-white text-center pt-28">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center">
        {locale.PAGE.ERROR_404.MESSAGE}
      </p>
      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="transition inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-3 px-8 text-lg font-monda hover:from-mesh-teal hover:to-mesh-blue hover:text-mesh-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-mesh-dark rounded-md"
        >
          <span>Back to Home</span>
        </a>
      </div>
    </Container>
  );
}
