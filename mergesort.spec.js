describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect( split( [1, 2]) ).toEqual( [[1], [2]] );
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect( merge( [1], [2]) ).toEqual( [1, 2] );
    })
  });

  describe('Merge Sort function', function() {
      it('merges and sorts an array into one sorted array', function() {
          expect( mergeSort([3, 6, 2, 8])).toEqual([2, 3, 6, 8])
      })
  })