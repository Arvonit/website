import Head from 'next/head';
import Navbar from './Navbar';

const siteName = 'Arvind Kasiliya';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export default function Layout({ title = siteName, children }: Props) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 py-16">
      <Head>
        <title>{title != siteName ? `${title} - Arvind Kasiliya` : title}</title>
        <meta name="description" content="My homepage on the internet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {children}
    </div>
  );
}

// export default function Layout({ title = siteName, children }: Props) {
//   return (
//     <div className="max-w-5xl mx-auto px-4 md:px-8">
//       {/* <Metadata
//         title={metadata.title}
//         author={metadata.author.name}
//         description={metadata.description}
//         currentPage={currentPage}
//       />
//       <Navbar title={metadata.title} currentPage={currentPage} /> */}
//       <Head>
//         <title>{title != siteName ? `${title} - Arvind Kasiliya` : title}</title>
//         <meta name="description" content="My homepage on the internet" />
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>
//       <Navbar />
//       {children}
//     </div>
//   );
// }
