import express from 'express';
import roleController from '../controllers/roleController';
import auth from '../middleware/auth';

const role = express.Router();

role.route('/api/role')
  .all(auth.verifyToken, auth.adminAccess)
  .get(roleController.getRoles)
  .post(roleController.createRole);





//open api

role.route('/api/role/open')
.get(roleController.getRoles)
.post(roleController.createRole);


module.exports = () => role;
