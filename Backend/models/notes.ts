import { User } from "./User";
import mongoose, {Schema, model, connect} from "mongoose"
// Notes assigned to specific employees 
//11. [ ] Notes have a ticket #, title, note body, created & updated dates
export class Note{
    public ticket: number;
    public title: string;
    public body: string;
    public created: Date;
    public updated?: Date;   
    constructor(ticket: number, title: string, body: string, created: Date){
        
        this.ticket = ticket;
        this.title = title;
        this.body = body;
        this.created = created;
        
    }
}

const noteSchema = new Schema<Note>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }  
})

export default mongoose.model("Note", noteSchema);