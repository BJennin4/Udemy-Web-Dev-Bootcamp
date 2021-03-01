const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection (2) open!')
})
.catch(err =>{
    console.log('It broke')
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    // Inserting an array
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: {'XS'})
bike.save()
    .then(data => {
        console.log('Item added')
        console.log(data);
    })
    .catch(err => {
        console.log('Inventory Broke')
        console.log(err);
    })

// Validations do not automatically apply when updated
    // runValidators required to run the validation on updates
// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -10.99}, {new: true, runValidators: true})
//     .then(data => {
//         console.log('Item updated')
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Inventory Broke')
//         console.log(err);
//     })

productSchema.methods.greet = function() {
    console.log('Hello! Hi.')
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save;
}

productSchema.statics.fireSale = function() {
    return this.updateMany({},{ onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res))

// findProduct();