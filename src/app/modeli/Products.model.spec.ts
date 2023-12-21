import { Product } from "./Products.model";


describe('Products', () => {
    it('should create an instance', () => {
      expect(new Product()).toBeTruthy();
    });
  });