
it('should calculate the monthly rate correctly', function () {
   const values = {
      amount: 100000,
      years: 30,
      rate: 3.99
   };
   expect(calculateMonthlyPayment(values)).toEqual("476.84");
});


it("should return a result with a long term", function() {
   const values = {
      amount: 1000000,
      years: 70,
      rate: 8.99
   };
   expect(calculateMonthlyPayment(values)).toEqual("7505.88");
});

/// etc
