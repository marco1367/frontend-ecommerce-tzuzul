import dataBase_fireStore from "../../firebase";

export default async function getAllProducts(req, res , next){
    try {
        
        const snapShot = await dataBase_fireStore.collection('productos').get();
        if (snapShot.empty) {
            res.status(404).json({message: 'no hay productos'});
        }
        
        const resp_products = [];
        
        snapShot.forEach( (product) => { resp_products.push(product.data())} );
        
        res.status(200).json(resp_products);

    } catch (error) {
        console.log(error);
    }
};