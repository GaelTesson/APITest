import { Strategy, ExtractJwt } from "passport-jwt"
import Users from "../Models/userModels.js"
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(
    new Strategy(options, async (jwt_payload, done) => {
      Users.findById(jwt_payload.id, (err, user) => {
        if (err) {
          return done(err, false)
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      }
    )
    })
)




