import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/future/image';
import rubik from '../../public/projects/rubik.png';
import irc from '../../public/projects/irc.png';
import commentarium from '../../public/projects/commentarium.png';
import me from '../../public/me.jpg';

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <div>
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
                <span className="text-blue-600 no-underline hover:underline">
                  <Link href="https://infothreats.cse.uconn.edu">RIET Lab</Link>
                </span>{' '}
                under Dr. Shiri Dori-Hacohen and on the{' '}
                <span className="text-blue-600 no-underline hover:underline">
                  <Link href="https://eprint.iacr.org/2021/818.pdf">CTng</Link>
                </span>{' '}
                project under Dr. Amir Herzberg. My research interests include computer security,
                operating systems, and information retrieval. Going forward, I&apos;m looking for a
                software engineering internship for the upcoming summer.
              </p>

              <p>My email address is arvind [at] kasiliya [dot] com.</p>

              {/* Links */}
              <div className="text-blue-600 flex flex-row space-x-4">
                <p className="no-underline hover:underline">
                  <Link href="https://www.linkedin.com/in/arvindkasiliya">LinkedIn</Link>
                </p>
                <p className="no-underline hover:underline">
                  <Link href="https://github.com/Arvonit">GitHub</Link>
                </p>
                <p className="no-underline hover:underline">
                  <Link href="/resume.pdf">Resume</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="basis-1/3 w-1/2 mb-8 md:mb-0 order-1 md:order-2">
            <Image
              src={me}
              alt="A picture of young me typing on a keyboard"
              className="rounded-lg"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <hr className="mt-6 mb-6"></hr>

      {/* Projects */}
      <div className="mt-6 space-y-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        {/* Rubik's Cube Solver */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center md:items-start">
          {/* Picture */}
          <div className="basis-1/3 w-1/2">
            {/* <Link href="https://rubik.kasiliya.com">
              <a> */}
            <Image
              src={rubik}
              alt="Rubik's cube solver"
              placeholder="blur"
              className="rounded-sm"
            />
            {/* </a>
            </Link> */}
          </div>

          {/* Description */}
          <div className="basis-2/3">
            <h4 className="text-lg font-medium mb-2">Rubik&apos;s Cube Solver</h4>
            <div className="space-y-2 text-gray-700">
              <p>
                I created this app as an honors project for my Data Structure and Algorithms class.
                Users can paint (fill out) a map of their Rubik&apos;s Cube and will receive the
                necessary moves to solve their cube. It can solve a cube in under 3 seconds.
              </p>
              <p>
                Under the hood, this solver uses a custom implementation of{' '}
                <span className="text-blue-600 no-underline hover:underline">
                  <Link href="http://kociemba.org/cube.htm">
                    Herbert Kociemba&apos;s Two-Phase algorithm
                  </Link>
                </span>
                , written in Python. The frontend, written in React, calls an endpoint, written
                using FastAPI, to solve the cube and receive the necessary moves to solve.
              </p>

              {/* Links */}
              <div className="flex flex-row space-x-4">
                <p>
                  [
                  <span className="text-blue-600 no-underline hover:underline">
                    <code>
                      <Link href="https://github.com/Arvonit/rubik">Code</Link>
                    </code>
                  </span>
                  ]
                </p>
                <p>
                  [
                  <span className="text-blue-600 no-underline hover:underline">
                    <code>
                      <Link href="https://rubik.kasiliya.com">Website</Link>
                    </code>
                  </span>
                  ]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IRC Client/Server */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center md:items-start">
          {/* Picture */}
          <div className="basis-1/3 w-1/2">
            {/* <Link href="https://github.com/Arvonit/chat">
              <a> */}
            <Image src={irc} alt="IRC client" placeholder="blur" className="rounded-sm" />
            {/* </a>
            </Link> */}
          </div>

          {/* Description */}
          <div className="basis-2/3">
            <h4 className="text-lg font-medium mb-2">IRC Client/Server</h4>
            <div className="space-y-2 text-gray-700">
              <p>
                A basic multi-threaded implementation of an IRC client and server, both written in
                C. The server supports direct messages, distinct channels for specialized chat
                rooms, and server-wide nicknames. The client implements these features, formats
                messages in a easy-to-read manner, and will convert more advanced commands into
                properly-formatted IRC messages (for servers that support them).
              </p>

              {/* Code Link */}
              <p>
                [
                <span className="text-blue-600 no-underline hover:underline">
                  <code>
                    <Link href="https://github.com/Arvonit/chat">Code</Link>
                  </code>
                </span>
                ]
              </p>
            </div>
          </div>
        </div>

        {/* Commentarium */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center md:items-start">
          {/* Picture */}
          <div className="basis-1/3 w-1/2">
            {/* <Link href="https://github.com/Arvonit/Commentarium">
              <a> */}
            <Image
              src={commentarium}
              alt="commentarium"
              placeholder="blur"
              className="rounded-sm"
            />
            {/* </a>
            </Link> */}
          </div>

          {/* Description */}
          <div className="basis-2/3">
            <h4 className="text-lg font-medium mb-2">Commentarium</h4>
            <div className="space-y-2 text-gray-700">
              <p>
                A simple note-taking app for iOS written in Swift and SwiftUI. Users can create,
                modify, and delete notes as well as organize those notes with folders. Folders can
                be given a custom icon to easily differentiate them. The app uses CoreData to handle
                the storage and retrieval of notes and associated folders.
              </p>

              {/* Code Link */}
              <p>
                [
                <span className="text-blue-600 no-underline hover:underline">
                  <code>
                    <Link href="https://github.com/Arvonit/Commentarium">Code</Link>
                  </code>
                </span>
                ]
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
