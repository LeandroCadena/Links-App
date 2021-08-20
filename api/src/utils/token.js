import Users from '../models/User';
import jwt from 'jsonwebtoken';

export function createToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        config.jwtSecret,
        { expiresIn: 86400 }
    );
}