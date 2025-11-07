import { Payload } from './../../generated/prisma/internal/prismaNamespace';
import Jwt  from "jsonwebtoken";

export const generateAccessToken = (Payload:object) => {
    return Jwt.sign(Payload, process.env.JWT_SECRET!,{expiresIn:"15m"})
}
export const generateRefreshToken  = (Payload:object) => {
    return Jwt.sign(Payload, process.env.JWT_REFRESH_SECRET!,{expiresIn:"7d"})
}