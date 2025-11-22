import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Just Park</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Parking management system</p>
          <Link to="/projects/just-park" className="text-blue-500 hover:text-blue-700">View Project</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Hasthi Raksha</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Elephant protection initiative</p>
          <Link to="/projects/hasthi-raksha" className="text-blue-500 hover:text-blue-700">View Project</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Cinemax</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Movie theater booking system</p>
          <Link to="/projects/cinemax" className="text-blue-500 hover:text-blue-700">View Project</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Gaman</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Travel and adventure platform</p>
          <Link to="/projects/gaman" className="text-blue-500 hover:text-blue-700">View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
