import express from 'express'
import { ProductsModel } from '../models/product.models.js'


const route= express.Router()

route.get('/getProducts', async (req,res)=>{
    const product = await ProductsModel.find()
    // res.send({title : product.description, price : product.price})
    res.send(product)
})

route.post('/insertProducts',(req,res)=>{
  const product = new ProductsModel({description:"Good Product", price:8000})
  product.save()
    res.send({
        status:res.statusCode,
       product
    })
})
export default route