import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const selectedCampaign = data.find(item => item.id === parseInt(id));
                setCampaign(selectedCampaign);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, [id]);

    if (!campaign) {
        return <div className="p-8 text-center"><span className="loading loading-dots loading-lg"></span></div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you ! We will reach your destination soon.");
        e.target.reset();

    };

    return (
        <div className="p-8">
            <div className="card bg-white shadow-lg rounded-lg p-6">
                <div className="h-11/12">
                <img
                    src={campaign.image || "https://via.placeholder.com/150"}
                    alt={campaign.title}
                    className="rounded-md mb-4 w-full  object-cover"
                />
                </div>
                <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                <p className="text-sm text-gray-500 mb-2"><strong>Division:</strong> {campaign.division}</p>
                <p className="text-sm text-gray-500 mb-2"><strong>Status:</strong> {campaign.status}</p>
                <p className="text-sm text-gray-500 mb-4"><strong>Contact:</strong> {campaign.contactInfo}</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Quantity (e.g., 2 jackets)"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Item Type (e.g., blanket, sweater)"
                        className="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        className="input input-bordered w-full"
                    />
                    <textarea
                        placeholder="Additional Notes (optional)"
                        className="textarea textarea-bordered w-full"
                    ></textarea>
                    <button type="submit" className="btn bg-secondary w-full">
                        Submit Donation
                    </button>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition:Bounce/>
                </form>
            </div>
        </div>
    );
};

export default DonationDetails;
