// describe('A spy', function() {
//     it('should be called', function() {
//         spyOn(helperFunc, 'helperFunc')//class obj, method
//     })
//     it('tracks that the spy was called', function() {
//         expect(helperFunc).toHaveBeenCalled()
//     })
//     it('tracks all the arguments of its calls', function () {
//         expect(helperFunc).toHaveBeenCalledWith([3, 2, 1], 3)
//     })
// })

describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles one element in the array', function(){
        expect( bubbleSort([1]) ).toEqual( [1])
    })
    it('handles multiple elements in the array', function(){
        expect( bubbleSort([3, 2, 1]) ).toEqual([1, 2, 3])
    })
  });
