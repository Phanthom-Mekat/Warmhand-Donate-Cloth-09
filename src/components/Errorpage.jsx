import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center space-y-8 items-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-red-500">
          404 - Page Not Found
        </h1>
        <p className="text-2xl font-medium text-gray-600">
          The page you are looking for does not exist.
        </p>
        <div>
        <Link to="/" className=" px-8 py-2  bg-primary hover:bg-blue-700 text-white font-bold rounded">
          Go Back Home
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
