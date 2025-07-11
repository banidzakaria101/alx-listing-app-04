import { PropertyProps } from "@/interfaces"

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
        <div className="container mx-auto p6">
            <h1 className="text-4xl font-blod">{property.name}</h1>
            <div className="flex items-center space-x-2 mt-2">
                <span className="text-yellow-500">{property.rating}</span>
                <span>{property.address.city}, {property.address.country}</span>
            </div>

            {/* Image Grid*/}

            <div className="grid grid-cols-2 gap-4 mt-4">
                <img src={property.image} alt={property.name} className="col-span-2 -full h-96 object-cover rounded-lg"/>
                <img src={property.image} alt={property.name} className="col-span-2 -full h-96 object-cover rounded-lg"/>
                {/*Moreore images here*/}
            </div>

            {/*Description */}
            <div className="mt-4">
                <h2 className="text-2x1 font-semibold">Description</h2>
                <p>{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-4">
                <h2 className="text-2x1 font-semibold">What this place offers</h2>
                <ul className="flex flex-wraper space-x-4">
                    {property.category.map((amenity, index) => (
                        <li key={index} className="bg-gray-200 rounded-md">{amenity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;