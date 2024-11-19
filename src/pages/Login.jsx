import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { userLogin, setUser,signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });
        setSuccess(false);
        setError('');
        if (password.length < 6) {
            setError('Password should be at least 6 characters')
            return
        }
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setSuccess(true);
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setSuccess(false);
                setError(err.message);
            });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                    Login your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />

                        {
                            error && <p className="text-red-600 text-sm">{error}</p>
                        }
                        {
                            success && <p className="text-green-500 text-sm">Sign in Successful</p>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div onClick={handleGoogleSignIn} className="btn w-1/4 mx-auto">
                        <FaGoogle className="text-2xl" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-primary  rounded-3xl">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Dont’t Have An Account ?{" "}
                    <Link className="text-red-500" to="/auth/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;