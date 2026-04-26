import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
    name: String,
    email: String,
    password: { type: String, unique: true },
    householdId: { type: Schema.Types.ObjectId, ref: "Household" },
    createdAt: { type: Date, default: Date.now }
});
const householdSchema = new Schema({
    name: String,
    inviteCode: String,
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    wasteScore: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});
const itemSchema = new Schema({
    householdId: { type: Schema.Types.ObjectId, ref: "Household" },
    addedBy: { type: Schema.Types.ObjectId, ref: "User" },
    name: String,
    category: {
        type: String,
        enum: ["produce", "dairy", "meat", "pantry", "frozen", "other"]
    },
    quantity: { type: Number, default: 1 },
    expiryDate: Date,
    status: {
        type: String,
        enum: ["fresh", "expiring-soon", "expired", "used", "wasted"]
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
// export const userModel = mongoose.models.User || mongoose.model('User', userSchema);
export const userModel = mongoose.model('User', userSchema);
export const householdModel = mongoose.model('Household', householdSchema);
export const itemModel = mongoose.model('Item', itemSchema);
//# sourceMappingURL=schema.js.map