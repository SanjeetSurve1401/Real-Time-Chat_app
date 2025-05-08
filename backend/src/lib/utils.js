import jwt from 'jsonwebtoken';
export const generatToken = (userid, res) =>{
    console.log("🟢 Signing with JWT_SECRET:", process.env.JWT_SECRET);
    const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, //prevenet cross-site scripting attacks 
        sameSite: "strict", //prevents cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development", //only send the cookie over HTTPS in production
    })
    return token;
}
