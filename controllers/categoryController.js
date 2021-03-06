const { Category, Product, CategoryProduct } = require('../models')

class CategoryController {
    static getAll (req, res, next) {
        Category.findAll () 
            .then(categories => {
                res.status(200).json({
                    categories
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findProduct (req, res, next) {
        CategoryProduct.findAll({
            where: {
                CategoryId: req.params.id
            },
            include: [Product]
        })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = CategoryController