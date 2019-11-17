const ProductRepository = require('../repositories/product.js');
/*
describe('Get products', ProductRepository.SelectById(1)){
    it('Should return product price', ProductRepository.SelectById(1)){
       if(ProductRepository.SelectById(1).price == 3000){

       }
    }
}
ProductRepository.SelectById(1)
ProductRepository.SelectById(1)
describe('Get products', {
    it('Should return product price',
    {
        if (ProductRepository.SelectById(1).price == 3000) {
            done();
        } else {
            done(new Error("Something happened"));

        }
    )
        ;
    }
)
    ;
    'Get products'
    Should return product price
 */




describe('Our application', function() {

    // This is the name of the test
    it('should understand basic mathematical principles', function(done) {

        // We want this test to pass.
        if (ProductRepository.SelectById(1).price == 3000) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }

    });

});


