import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    name?: string | null;
    email?: string | null;
    password?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const householdModel: mongoose.Model<{
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    members: mongoose.Types.ObjectId[];
    wasteScore: number;
    name?: string | null;
    inviteCode?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const itemModel: mongoose.Model<{
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    quantity: number;
    updatedAt: NativeDate;
    name?: string | null;
    householdId?: mongoose.Types.ObjectId | null;
    expiryDate?: NativeDate | null;
    addedBy?: mongoose.Types.ObjectId | null;
    category?: "produce" | "dairy" | "meat" | "pantry" | "frozen" | "other" | null;
    status?: "fresh" | "expiring-soon" | "expired" | "used" | "wasted" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=schema.d.ts.map