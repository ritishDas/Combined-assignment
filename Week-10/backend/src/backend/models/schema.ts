import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  householdId: { type: Schema.Types.ObjectId, ref: "Household" },
  verificationString: { type: String, required: true },
  verificationExpiry: { type: Date, required: true },
  emailResendCount: { type: Number, default: 0, required: true },
  verified: { type: Boolean, default: false, required: true },
  createdAt: { type: Date, default: Date.now }
});

const householdSchema = new Schema({
  name: { type: String, required: true },
  inviteCode: { type: Number, required: true },
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
