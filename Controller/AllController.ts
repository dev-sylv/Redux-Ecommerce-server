import UserModel from "../Model/UserModel";
import ProductsModel from "../Model/ProductsModel";
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();

//get all users

router.get("/users", async (req: Request, res: Response) => {
	try {
		const fetchUser = await UserModel.find();
		return res.status(200).json({
			message: "success",
			data: fetchUser,
		});
	} catch (err) {
		res.status(404).json({
			message: "an error occured",
		});
	}
});

// register a user
router.post("/register", async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;
		const createUser = await UserModel.create({
			name,
			email,
			password,
		});
		return res.status(200).json({
			message: "success",
			data: createUser,
		});
	} catch (err) {
		res.status(404).json({
			message: "an error occured",
		});
	}
});
