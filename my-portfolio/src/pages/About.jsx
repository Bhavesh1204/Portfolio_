import React from 'react';

const About = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')]">
      {/* Overlay */}
      <div className="h-full bg-black/40">
        <div className="max-w-3xl mx-auto p-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">
            About Me
          </h1>
          
          <p className="text-lg mb-6">
            Hi, I’m a 3rd-year student with a strong interest in becoming a Data Analyst. 
            I have a certification in Excel. I’ve been learning Python through 
            the "Code with Harry" YouTube channel and applying my skills to solve problems on platforms 
            like HackerRank.
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            My Skills
          </h2>

          <ul className="list-disc list-inside text-lg mb-6">
            <li>Excel (Certified)</li>
            <li>Python Programming</li>
            <li>SQL</li>
            <li>Data Analysis</li>
            <li>Problem Solving (HackerRank)</li>
          </ul>

          <p className="text-lg">
            I’m passionate about data analysis and excited to apply my skills to solve real-world 
            problems. I’m eager to grow in this field and contribute to projects that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
