import Link from 'next/link';
import Image from 'next/image';
import rubik from '../../public/projects/rubik.png';
import irc from '../../public/projects/irc.png';
import commentarium from '../../public/projects/commentarium.png';

export default function Projects() {
  return (
    <div className="mt-6 space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>

      {/* Rubik's Cube Solver */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center md:items-start">
        {/* Picture */}
        <div className="basis-1/3 w-1/2">
          <Image src={rubik} alt="Rubik's cube solver" placeholder="blur" className="rounded-sm" />
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
              <Link
                href="http://kociemba.org/cube.htm"
                className="text-blue-600 no-underline hover:underline"
              >
                Herbert Kociemba&apos;s Two-Phase algorithm
              </Link>
              , written in Python. The frontend, written in React, calls an endpoint, written using
              FastAPI, to solve the cube and receive the necessary moves to solve.
            </p>

            {/* Links */}
            <div className="flex flex-row space-x-4">
              <p>
                [
                <code>
                  <Link
                    href="https://github.com/Arvonit/rubik"
                    className="text-blue-600 no-underline hover:underline"
                  >
                    Code
                  </Link>
                </code>
                ]
              </p>
              <p>
                [
                <code>
                  <Link
                    href="https://rubik.kasiliya.com"
                    className="text-blue-600 no-underline hover:underline"
                  >
                    Website
                  </Link>
                </code>
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
          <h4 className="text-lg font-medium mb-2">IRC Chat Client/Server</h4>
          <div className="space-y-2 text-gray-700">
            <p>
              A basic multi-threaded implementation of an IRC client and server, both written in C.
              The server supports direct messages, distinct channels for specialized chat rooms, and
              server-wide nicknames. The client implements these features, formats messages in a
              easy-to-read manner, and will convert more advanced commands into properly-formatted
              IRC messages (for servers that support them).
            </p>

            {/* Code Link */}
            <p>
              [
              <code>
                <Link
                  href="https://github.com/Arvonit/irc"
                  className="text-blue-600 no-underline hover:underline"
                >
                  Code
                </Link>
              </code>
              ]
            </p>
          </div>
        </div>
      </div>

      {/* Schreiber */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center md:items-start">
        {/* Picture */}
        <div className="basis-1/3 w-1/2">
          {/* <Link href="https://github.com/Arvonit/Commentarium">
              <a> */}
          <Image src={commentarium} alt="Schreiber" placeholder="blur" className="rounded-sm" />
          {/* </a>
            </Link> */}
        </div>

        {/* Description */}
        <div className="basis-2/3">
          <h4 className="text-lg font-medium mb-2">Schreiber</h4>
          <div className="space-y-2 text-gray-700">
            <p>
              A simple note-taking app for iOS written in Swift and UIKit. Users can create, modify,
              and delete notes as well as organize those notes with folders. Folders can be given a
              custom icon to easily differentiate them. The app uses CoreData to handle the storage
              and retrieval of notes and associated folders.
            </p>

            {/* Code Link */}
            <p>
              [
              <code>
                <Link
                  href="https://github.com/Arvonit/Schreiber"
                  className="text-blue-600 no-underline hover:underline"
                >
                  Code
                </Link>
              </code>
              ]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
