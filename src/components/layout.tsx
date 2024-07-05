import Header from '../components/header';
import Divider from './divider';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 py-16">
      <Header />
      <Divider />

      {children}
    </main>
  );
}
