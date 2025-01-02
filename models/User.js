import { Schema, model, models } from 'mongoose';


const PropertySchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        location: {
            street: String,
            city: String,
            state: String,
            zipcode: String
        },
        beds: {
            type: Number,
            required: true
        },
        baths: {
            type: Number,
            required: true
        },
        square_feet: {
            type: Number,
            required: true
        },
        amenities: [
            {
                type: String
            }
        ],
        rates: {
            nightly: Number,
            weekly: Number,
            monthly: Number
        },
        seller_inf0: {
            name: String,
            email: String,
            phone: String
        },
        images: [
            {
                type: String
            }
        ],
        isFeatured: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    });

const Property = models.Property || model('Property', PropertySchema);

export default Property;