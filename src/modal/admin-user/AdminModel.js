import AdminSchema from "./AdminSchema.js";
export const insertAdmin = async (admin) => {
    return await AdminSchema(admin).save();
}