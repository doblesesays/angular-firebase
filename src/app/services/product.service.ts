import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(
    private firebase: AngularFireDatabase,
  ) { }

  getProducts() {
    return this.productList = this.firebase.list('products');
  }

  addProduct(product: Product) {
    delete (product.$key);
    this.productList.push(product);
  }

  updateProduct(product: Product) {
    var $key = product.$key;
    delete (product.$key);
    this.productList.update($key, product);
  }

  deleteProduct($key: string) {
    this.productList.remove($key);
  }
}
