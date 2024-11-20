import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const ForgotPass = () => {
    const { resetPassword, email } = useContext(AuthContext);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleEmailChange = (e) => {
        e.preventDefault();
        const email = e.target.value;
        console.log(email);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        resetPassword(email)
            .then(() => {
                setMessage("Password reset email sent successfully. Check your inbox.");
            })
            .catch((err) => {
                setError("Failed to send password reset email. Please try again.");
                console.error("Error sending password reset email:", err);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
                    Forgot Password
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Enter your email below, and we’ll send you a link to reset your password.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label
                            htmlFor="email"
                            className="label text-gray-600 font-medium"
                        >
                            Email Address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                  <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox"
                        type="submit"
                        className="btn bg-primary w-full text-white rounded-3xl" target="_blank"
                    >
                        Send Reset Link
                  </a>
                </form>
                {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                <div className="mt-6 text-center">
                    <Link to="/auth/login" className="link text-primary hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
