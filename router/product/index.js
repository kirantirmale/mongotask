const express = require('express')
const router = express.Router()
const productsController = require('../../controller/productController')
const validate =require('../../utils/validate')
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

router.get('/getdata', productsController.getdata)//validate("productsValidation")

router.post('/adddata',upload.single('image') ,productsController.adddata)

router.post('/getonedata', productsController.getonedata)

router.post('/updatedata',validate("productsValidation"), productsController.updatedata)

router.delete('/deletedata', productsController.deletedata)

module.exports = router
