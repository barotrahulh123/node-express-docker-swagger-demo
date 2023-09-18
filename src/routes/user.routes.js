import { Router } from "express";
import userController from "../controllers/user.controller";

const userRoutes = Router();
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       '200':
 *         description: A successful response with a list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The unique identifier for a user.
 *                   name:
 *                     type: string
 *                     description: The name of the user.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: The email address of the user.
 *                   username:
 *                     type: string
 *                     description: The username of the user.
 *                   password_hash:
 *                     type: string
 *                     description: The password hash of the user.
 *                   stateId:
 *                     type: integer
 *                     description: The ID of the state associated with the user.
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the user was created.
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the user was last updated.
 *             example:
 *               - id: 1
 *                 name: Admin
 *                 email: admin@blueanlytics.com
 *                 username: admin123
 *                 password_hash: "$2a$08$84LzcBWQtLGJUXGKahUIC.bfPl4822nkDE88XBMIK8bkbeXGKs8c."
 *                 stateId: 1
 *                 createdAt: "2023-09-17T06:14:21.427Z"
 *                 updatedAt: "2023-09-17T06:14:21.427Z"
 */
userRoutes.post("/user", userController.add);
userRoutes.get("/user", userController.get);
userRoutes.get("/user/:id", userController.find);

export { userRoutes };
