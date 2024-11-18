
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonationCampaign = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Donation Campaigns</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map(campaign => (
                    <div key={campaign.id} className="card bg-white shadow-lg rounded-lg p-6">
                        <img
                            src={campaign.image || "https://via.placeholder.com/150"}
                            alt={campaign.title}
                            className="rounded-md mb-4 w-full h-48 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-2">{campaign.title}</h2>
                        <p className="text-gray-600 mb-4">{campaign.description}</p>
                        <p className="text-sm text-gray-500 mb-2"><strong>Division:</strong> {campaign.division}</p>
                        <Link to={`/details/${campaign.id}`} className="btn bg-primary w-full">
                            Donate Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationCampaign;
