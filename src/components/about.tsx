import Link from 'next/link';
import Image from 'next/image';
import me from '../../public/me-grad.jpeg';

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Welcome!</h2>

      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <div className="basis-2/3 order-2 md:order-1 prose dark:prose-invert">
          {/* Bio */}
          <p>
            Hey, I&apos;m Arvind! I recently graduated from the University of Connecticut where I
            studied Computer Science with a concentration in cybersecurity. In my free time, I like
            to play the guitar, play tennis, watch TV, hang out, and occasionally{' '}
            <Link href="/blog">write</Link>. Welcome to my home on the internet!
          </p>
          <p>
            In the past, I worked as a cybersecurity research assistant where I developed{' '}
            <Link href="https://bgpy.engr.uconn.edu">BGPsy</Link>, an interactive web app to
            simulate the Border Gateway Protocol. Last summer, I interned at Travelers where I
            worked on an internal app portal for accessing different QlikSense dashboards using
            React and AWS.
          </p>
          <p>
            Below, I&apos;ve curated a selection of my best projects. Feel free to connect with me
            on <Link href="https://www.linkedin.com/in/arvindkasiliya">LinkedIn</Link> and{' '}
            <Link href="https://github.com/Arvonit">GitHub</Link>. I&apos;m always down to chat!
          </p>
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
    </div>
  );
}
