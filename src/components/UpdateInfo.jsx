import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateInfo = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile({ displayName: name, photoURL })
            .then(() => {
                console.log("Profile updated successfully!");
                navigate("/dashboard");
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                    Update Profile
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label htmlFor="name" className="label text-gray-600 font-medium">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="photoURL" className="label text-gray-600 font-medium">
                            Photo URL:
                        </label>
                        <input
                            type="url"
                            id="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter photo URL"
                        />
                    </div>
                    <button type="submit" className="btn bg-primary w-full text-white rounded-3xl">
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateInfo;
