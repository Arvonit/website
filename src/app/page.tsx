import About from '../components/about';
import Header from '../components/header';
import Projects from '../components/projects';

export default function Home() {
  return (
    <>
      <About />
      <hr className="mt-6 mb-6 dark:border-neutral-800"></hr>
      <Projects />
    </>
  );
}
