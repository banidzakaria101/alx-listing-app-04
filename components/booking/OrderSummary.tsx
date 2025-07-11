const OrderSummary: React.FC<{ bookingDetails: any}> = ({ bookingDetails }) => (
    <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="*text-xl font-semibold">Review Order Details</h2>
        <div className="flex items-center mt-4">
            <img src="../../public/assets/images/image2.png" alt="property" className="w-32 h-32 object-cover rounded-md" />
            <div className="m-l4">
                <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
                <p className="text-sm text-gray-500">4.76 (345 revies)</p>
                <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.tootalNights}</p>
            </div>
        </div>

        {/* Price Breakdown */}
        <div className="mt-6">
            <div className="flex justify-between mt-2">
                <p>Subtotal</p>
                <p>${bookingDetails.price}</p>
            </div>
            <div className="flex justify-between mt-2 font-semibold">
                <p>Grand Total</p>
                <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
            </div>
        </div>
    </div>
);

export default OrderSummary;