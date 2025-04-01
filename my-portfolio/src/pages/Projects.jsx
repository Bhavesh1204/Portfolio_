import React from 'react';

const Projects = () => {
  return (
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-[url('/background.jpg')]">
      {/* Overlay */}
      <div className="h-full bg-black/40">
        <div className="max-w-4xl mx-auto p-6 text-center text-white">
          <h1 className="text-4xl font-bold mb-6">
            My Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                <a
                  href="https://github.com/Bhavesh1204/RecipeBook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:underline"
                >
                  RecipeBook
                </a>
              </h2>
              <p className="text-lg text-gray-700">
                A web application to browse and manage recipes. It allows users to search for recipes, view ingredients, and save their favorites.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                <a
                  href="https://github.com/Bhavesh1204/MusicPlayer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-600 hover:underline"
                >
                  MusicPlayer
                </a>
              </h2>
              <p className="text-lg text-gray-700">
                A music player web application built using JavaScript. Users can play their favorite songs, create playlists, and manage audio playback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
