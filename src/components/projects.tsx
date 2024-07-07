import Link from 'next/link';
import Image from 'next/image';
import rubik from '../../public/projects/rubik.png';
import irc from '../../public/projects/irc.png';
import schreiber from '../../public/projects/schreiber.png';
import ExternalLink from './external-link';

export default function Projects() {
  return (
    <div className="mt-6 space-y-8">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">Projects</h2>

      {/* Rubik's Cube Solver */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center shadow-sm border dark:border-[#333333] rounded-lg p-5 sm:p-6">
        {/* Picture */}
        <div className="basis-1/3 w-1/2">
          <Image
            src={rubik}
            alt="The homepage of my solver, showing a map of a Rubik's cube and a button to solve"
            placeholder="blur"
            className="rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="basis-2/3">
          <h4 className="text-lg font-medium mb-3 dark:text-white">Rubik&apos;s Cube Solver</h4>
          <div className="prose dark:prose-invert">
            <p>
              I created this app as an honors project for my Data Structure and Algorithms class.
              Users can paint (fill out) a map of their Rubik&apos;s Cube and will receive the
              necessary moves to solve their cube. It can typically solve a cube in under a second.
            </p>
            <p>
              Under the hood, this solver uses a custom implementation of{' '}
              <Link href="http://kociemba.org/cube.htm">
                Herbert Kociemba&apos;s Two-Phase algorithm
              </Link>
              , written in Python. The frontend, written in React, calls an endpoint, written using
              FastAPI, to solve the cube and receive the necessary moves to solve.
            </p>

            {/* Links */}
            <div className="flex flex-row space-x-4">
              <Link
                href="https://github.com/Arvonit/rubik"
                className="inline-flex items-center space-x-1">
                <span>Code</span>
                <ExternalLink />
              </Link>
              <Link href="https://rubik.arvind.me" className="inline-flex items-center space-x-1">
                <span>Website</span>
                <ExternalLink />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* IRC Client/Server */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center shadow-sm border dark:border-[#333333] rounded-lg p-5 sm:p-6">
        {/* Picture */}
        <div className="basis-1/3 w-1/2">
          <Image
            src={irc}
            alt="A text conversation between different users using the client of my IRC app"
            placeholder="blur"
            className="rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="basis-2/3">
          <h4 className="text-lg font-medium mb-3 dark:text-white">IRC Chat App</h4>
          <div className="prose dark:prose-invert">
            <p>
              A multithreaded IRC client and server, written in C. The server supports direct
              messages, distinct channels for specialized chat rooms, and server-wide nicknames. The
              client implements these features, formats messages in a easy-to-read manner, and
              converts more advanced commands into properly-formatted IRC messages (for servers that
              support them).
            </p>

            {/* Code Link */}
            <Link
              href="https://github.com/Arvonit/irc"
              className="inline-flex items-center space-x-1">
              <span>Code</span>
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>

      {/* Schreiber */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center shadow-sm border dark:border-[#333333] rounded-lg p-5 sm:p-6">
        {/* Picture */}
        <div className="basis-1/3 w-1/2">
          <Image
            src={schreiber}
            alt="The home screen of Schreiber"
            placeholder="blur"
            className="rounded-lg"
          />
        </div>

        {/* Description */}
        <div className="basis-2/3">
          <h4 className="text-lg font-medium mb-3 dark:text-white">Schreiber</h4>
          <div className="prose dark:prose-invert">
            <p>
              A simple note-taking app for iOS written in Swift and UIKit. Users can create, modify,
              and delete notes as well as organize those notes with folders. Folders can be given a
              custom icon to easily differentiate them. The app uses CoreData to handle the storage
              and retrieval of notes and associated folders.
            </p>

            {/* Code Link */}
            <Link
              href="https://github.com/Arvonit/Schreiber"
              className="inline-flex items-center space-x-1">
              <span>Code</span>
              <ExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
