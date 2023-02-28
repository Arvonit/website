import Link from 'next/link';
import Image from 'next/image';
import me from '../../public/me.jpg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 items-center">
      <div className="basis-2/3 order-2 md:order-1">
        <h2 className="text-3xl font-semibold mb-6">Arvind Kasiliya</h2>

        <div className="text-gray-700 space-y-4">
          <p>
            Hey, I&apos;m Arvind! I&apos;m a junior at the University of Connecticut studying
            Computer Science.
          </p>
          <p>
            I&apos;m currently working as an Undergraduate Research Assistant at the{' '}
            <Link
              href="https://infothreats.cse.uconn.edu"
              className="text-blue-600 no-underline hover:underline"
            >
              RIET Lab
            </Link>{' '}
            under Dr. Shiri Dori-Hacohen and on the{' '}
            <Link
              href="https://eprint.iacr.org/2021/818.pdf"
              className="text-blue-600 no-underline hover:underline"
            >
              CTng project
            </Link>{' '}
            under Dr. Amir Herzberg. My research interests include computer security, operating
            systems, and information retrieval. Going forward, I&apos;m looking for a software
            engineering internship for the upcoming summer.
          </p>

          <p>My email address is arvind [at] kasiliya [dot] com.</p>

          {/* Links */}
          <div className="text-blue-600 flex flex-row space-x-4">
            <Link
              href="https://www.linkedin.com/in/arvindkasiliya"
              className="no-underline hover:underline"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/Arvonit" className="no-underline hover:underline">
              GitHub
            </Link>
            <Link href="/resume.pdf" className="no-underline hover:underline">
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="basis-1/3 w-1/2 mb-8 md:mb-0 order-1 md:order-2">
        <Image
          src={me}
          alt="Young me messing with a keyboard"
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
