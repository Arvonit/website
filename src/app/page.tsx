import About from '../components/about';
import Projects from '../components/projects';
import Layout from '../components/layout';
import Divider from '../components/divider';

export default function Home() {
  return (
    <Layout>
      <About />
      <Divider />
      <Projects />
    </Layout>
  );
}
