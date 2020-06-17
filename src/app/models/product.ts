export class Product {

    productId:number;
	productName:String ;
	productDescription:String ;
	imageUrl:String ;
	quantityInStock:number;
    buyPrice:number;
    sale:number;
    
    constructor(productId=-1, productName="",productDescription="",imageUrl="",quantityInStock=0,buyPrice=0, sale=0){

        this.productId=productId;
        this.productName=productName;
        this.productDescription=productDescription;
        this.imageUrl=imageUrl;
        this.quantityInStock=quantityInStock;
        this.buyPrice=buyPrice;

        this.buyPrice= buyPrice;
        this.sale= sale;
    }
}
