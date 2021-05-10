import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
      <h2 className="text-4xl font-semibold mb-8">About</h2>
      <p className="text-gray-700 mb-2">
        Hey, I'm Arvind. I’m a student, programmer, and opinionated citizen.
      </p>
      <p className="text-gray-700">
        On this website, you can expect to find articles about tech, since that is what I am most
        passionate about. Occasionally, you can find other content ranging from interesting events
        in history to life advice I’ve found helpful.
      </p>
    </Layout>
  );
}

export default About;
