import User from "../models/User";
import { createToken } from '../utils/token';

export const signUp = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const dataUser = {
            email,
            password,
        }

        const userFound = await User.findOne({ email: email });
        if (userFound) {
            return res.status(301).json({ message: 'The user already exists' });
        }

        const newUser = new User(dataUser);
        await newUser.save();

        return res.status(200).json(newUser);
    } catch (err) {
        return res.status(400).send(err);
    }
}

export const signIn = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const userFound = await Users.findOne({ email: email });
    if (!userFound) {
        return res.status(400).json({ message: 'The user does not exist' });
    }

    const isMatchUser = await userFound.comparePassword(password);
    if (isMatchUser) {
        return res.status(200).json({ userFound, token: createToken(userFound) });
    }

    return res.status(400).json({ message: 'The email or password are incorrect' });
}