/*var evens = [2, 4, 6, 8, 10];

    evens.forEach(even => {
      console.log(`${even} is not odd!`);
    })

    evens.foreach((even, index, array) => {
      debugger
      console.log(`${even} is not odd!`);
    })*/

    function doToElementsInArray(array, index, callback){
      array.forEach(changeCompletely);
    }

    function changeCompletely(element, index, array){
      array[index] = (Math.random() * 100).toString() + '!!!';
    }

    var animals = ['dog', 'fish', 'cat'];

    doToElementsInArray(animals, changeCompletely);

    console.log(animals);
