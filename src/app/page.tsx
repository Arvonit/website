import About from '../components/about';
import Header from '../components/header';
import Projects from '../components/projects';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 py-16">
      <Header />
      <hr className="mt-6 mb-6 dark:border-neutral-800"></hr>

      <About />
      <hr className="mt-6 mb-6 dark:border-neutral-800"></hr>
      <Projects />
    </main>
  );
}
