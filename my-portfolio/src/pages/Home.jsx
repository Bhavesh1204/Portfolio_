import React from "react";

const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')]">
      {/* Overlay */}
      <div className="h-full bg-black/40">
        <div className="max-w-3xl mx-auto p-6 text-center text-white">
          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6">
            Hello, I'm Bhavesh
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-lg mb-6">
            A passionate and driven software developer, eager to contribute and grow in the field of web development. 
            As a recent graduate, I’m actively seeking opportunities to apply my skills and enhance my knowledge.
          </p>

          {/* Skills Introduction */}
          <p className="text-lg mb-6">
            I have hands-on experience with:
          </p>

          {/* Skills List */}
          <ul className="list-disc list-inside mb-6">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>Python</li>
          </ul>

          {/* Conclusion Paragraph */}
          <p className="text-lg">
            I’m a quick learner, always open to new challenges, and ready to contribute to a team environment.
            If you're looking for a fresh perspective and a dedicated problem-solver, I’d love to connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
