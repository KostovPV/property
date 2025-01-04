import PropertyEditForm from "@/app/components/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";

const PropertyEditPage = async ({ params }) => {
    connectDB();
    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializableObject(propertyDoc);

    if (!property) {
        return (
            <h1 className="text-cemter text-2xl font-bold mt-10">
                Property not found
            </h1>
        )
    }

    return (
        <section className="bg-blue-50">
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-white px-6 py-6 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    
                    <PropertyEditForm property={property} />
                </div>
            </div>
        </section>
    );
}

export default PropertyEditPage;