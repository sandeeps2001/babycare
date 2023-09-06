import { sendform } from "~/task-manager/mongodb"
import { send } from "~/task-manager/nodemailer"
export default defineEventHandler (async (credentials) =>{
    try{
        const {email,phone,name}= await readBody(credentials)
        const db = await sendform({email,phone,name})
       const mail =  send({email,phone,name})
       return {mailsent : mail , insertedInDb : db}
    }
    catch(error){
                console.log(error)
            } 
})