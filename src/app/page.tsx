import Header from '../components/Header';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 py-16">
      <Header />
      <hr className="mt-6 mb-6"></hr>
      <Projects />
    </main>
  );
}
