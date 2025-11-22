import { Link } from 'react-router-dom';

const Designs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Brand Identity Design</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Creating unique visual identities</p>
          <Link to="/designs/brand-identity" className="text-blue-500 hover:text-blue-700">View Design</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Illustration Series</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Creative illustration projects</p>
          <Link to="/designs/illustration-series" className="text-blue-500 hover:text-blue-700">View Design</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Poster Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">A collection of posters</p>
          <Link to="/designs/poster-collection" className="text-blue-500 hover:text-blue-700">View Design</Link>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">UI Design System</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Design systems for UI</p>
          <Link to="/designs/ui-design-system" className="text-blue-500 hover:text-blue-700">View Design</Link>
        </div>
      </div>
    </div>
  );
};

export default Designs;
