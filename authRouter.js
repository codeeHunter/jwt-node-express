const Router = require("express")
const router = new Router()
const controller = require("./authController")
const {check} = require("express-validator")
const authMiddleware = require("./middlewaree/auth")
const roleMiddleware = require("./middlewaree/role")

router.post("/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 4 и не меньше 18 символов").isLength({min: 4, max: 18}),
  ],
  controller.registrartion)

router.post("/login", controller.login)
router.get("/users", roleMiddleware(["USER", "ADMIN"]),  controller.getUsers)

module.exports = router