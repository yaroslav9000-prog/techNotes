import mongoose, {Schema, model, connect} from 'mongoose';
export class User{
    public firstName: string;
    public lastName: string;
    public password: string;
    public userRole: "employee" | "manager" | "admin";
    constructor(firstName: string, lastName: string, password: string, userRole: "employee" | "manager" | "admin"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.userRole = userRole;
    }
}
const userSchema = new Schema<User>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    userRole: {type: String, default: "employee"}
})
export default mongoose.model("Users", userSchema);
