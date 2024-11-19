import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">
                    Welcome, {user?.displayName || "User"}!
                </h1>
                <div className="space-y-4">
                    {user?.photoURL && (
                        <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto"
                        />
                    )}
                    <p className="text-gray-700">
                        <span className="font-semibold">Email:</span> {user?.email}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold">Name:</span> {user?.displayName || "Not provided"}
                    </p>
                    <Link
                        to="/update-profile"
                        className="btn bg-primary w-full text-white rounded-3xl"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
