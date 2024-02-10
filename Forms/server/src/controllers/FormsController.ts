import express from "express"
import { FormsModel } from "../db/FormsModel"


class FormsController{

    getAllData = async (req : express.Request, res : express.Response) =>{
        try {
            const Data = await FormsModel.find();
            return res.status(200).json({data : Data})
        } catch (error) {
            console.log("oops..")
            return res.sendStatus(400);
        }
    }

    getData = async (req : express.Request, res : express.Response) =>{
        try { 
            const {id} = req.params;
            const Data = await FormsModel.findById(id);
            return res.status(200).json({data : Data})
        } catch (error) {
            return res.sendStatus(400);
        }
    }

    CreateData = async (req : express.Request, res : express.Response) =>{
        try { 
            const {firstname,lastname,Email,Phone,address,city,State,ZipCode,Comments} = req.body;
            const Data = new FormsModel({
                firstname,lastname,Email,Phone,address,city,State,ZipCode,Comments
            });
            await Data.save();
            return res.status(200).json({message : "Data Accepted...", data : Data})
        } catch (error) {
            return res.sendStatus(400);
        }
    }
    UpdateData = async (req : express.Request, res : express.Response) => {
        try {
            const { id } = req.params;
            const { firstname, lastname, Email, Phone, address, city, State, ZipCode, Comments } = req.body;
    
            // Check if the data with the given ID exists
            const data = await FormsModel.findById(id);
    
            if (data) {
                // Update the fields with the new values
                data.firstname = firstname;
                data.lastname = lastname;
                data.Email = Email;
                data.Phone = Phone;
                data.address = address;
                data.city = city;
                data.State = State;
                data.ZipCode = ZipCode;
                data.Comments = Comments;
    
                // Save the updated data
                await data.save();
    
                // Respond with a success message and the updated data
                return res.status(200).json({ message: "Data Updated Successfully", data });
            } else {
                // Respond with an error message if the data with the given ID does not exist
                return res.status(404).json({ message: "Data Not Found" });
            }
        } catch (error) {
            // Handle any errors that occur during the update process
            console.error("An error occurred while updating:", error);
            return res.status(500).json({ message: "An error occurred while updating data" });
        }
    };
    DeleteData = async (req : express.Request, res : express.Response) =>{
        try { 
            const {id} = req.params;
            await FormsModel.findByIdAndDelete({_id : id});
            return res.status(200).json({message : "Data Deleted....."})
        } catch (error) {
            return res.sendStatus(400);
        }
    }
}

export default new FormsController();