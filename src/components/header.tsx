import Link from 'next/link';
import Image from 'next/image';
import me from '../../public/me-grad.jpeg';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 items-center">
      <div className="basis-2/3 order-2 md:order-1">
        <h2 className="text-3xl font-semibold mb-6">Arvind Kasiliya</h2>

        <div className="text-gray-700 space-y-4">
          {/* Bio */}
          <p>
            Hey, I&apos;m Arvind! I recently graduated from the University of Connecticut where I
            studied Computer Science with a concentration in cybersecurity. In my free time, I like
            to play basketball, play the guitar, watch TV, and hang out.
          </p>
          <p>
            I currently work as an Undergraduate Research Assistant on{' '}
            <Link
              href="https://github.com/jfuruness/bgpy_pkg"
              className="text-blue-600 no-underline hover:underline">
              BGPy
            </Link>
            , a simulator to test defense mechanisms against various attacks on the Broader Gateway
            Protocol. Over the summer, I interned at Travelers where I wrote an internal app portal
            that synthesized several QlikSense dashboards using React and AWS. Going forward,
            I&apos;m looking for a full-time software engineering job.
          </p>

          {/* Links */}
          <div className="text-blue-600 flex flex-row space-x-4">
            <Link
              href="https://www.linkedin.com/in/arvindkasiliya"
              className="no-underline hover:underline">
              LinkedIn
            </Link>
            <Link href="https://github.com/Arvonit" className="no-underline hover:underline">
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Picture */}
      <div className="basis-1/3 w-1/2 mb-8 md:mb-0 order-1 md:order-2">
        <Image
          src={me}
          alt="Me standing outside after graduation in cap and gown"
          className="rounded-lg"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
