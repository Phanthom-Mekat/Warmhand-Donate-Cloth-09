
const CallToAction = () => {
    return (
        <div>
            <div className="bg-primary py-16 text-white text-center">
                <h2 className="text-5xl font-bold mb-6">Join the Movement</h2>
                <p className="text-xl mb-8 px-6">
                    Every small act of kindness counts! Together, we can ensure everyone stays warm this winter.
                </p>

                {/* Statistics Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 px-8">
                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold text-secondary">10k+</div>
                        <p className="text-lg mt-2">Warm Clothes Donated</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold text-secondary">5k+</div>
                        <p className="text-lg mt-2">Families Helped</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-6xl font-extrabold text-secondary">500+</div>
                        <p className="text-lg mt-2">Active Volunteers</p>
                    </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <button className="btn bg-secondary border-none text-lg font-semibold shadow-lg hover:scale-105 transform">
                        Donate Now
                    </button>
                    <button className="btn bg-primary  text-lg font-semibold shadow-lg hover:scale-105 transform">
                        Volunteer With Us
                    </button>
                    <button className="btn btn-outline border-white  text-lg font-semibold shadow-lg hover:scale-105 transform">
                        Partner With Us
                    </button>
                </div>

                {/* How You Can Help Section */}
                <div className="rounded-lg py-8 px-6 mx-auto max-w-4xl">
                    <h3 className="text-3xl font-bold mb-4">How You Can Help</h3>
                    <ul className="list-disc list-inside text-left">
                        <li className="mb-2"><strong>Donate Clothes:</strong> Share your unused winter clothing with someone in need.</li>
                        <li className="mb-2"><strong>Volunteer:</strong> Join us in organizing and distributing donations.</li>
                        <li className="mb-2"><strong>Partner:</strong> Collaborate with us as an organization to expand our impact.</li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default CallToAction;