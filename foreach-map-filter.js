function doubleValues (arr) {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr
}
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]


function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function(val){
        if ( val % 2 === 0 ) {
        newArray.push(val)
        }
    });
    return newArray;
}
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]


function showFirstAndLast(arr){
    let newArray =[];
    arr.forEach(function(val){
     newArray.push(val[0] + val[val.length - 1])
    })
    return newArray
}
Examples:
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']


function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
}


Example:
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )



    function vowelCount(str) {
        let splitArr = str.split("");
        let obj = {};
        const vowels = "aeiou";
      
        splitArr.forEach(function(letter) {
          let lowerCasedLetter = letter.toLowerCase()
          if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
              obj[lowerCasedLetter]++;
            } else {
              obj[lowerCasedLetter] = 1;
            }
          }
        });
        return obj;
      }
      
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

function doubleValuesWithMap(arr) {
    const doubled =  arr.map(function(val){
           return val * 2
    })
    return doubled
}
Examples: 
doubleValuesWithMap([1,2,3])
doubleValuesWithMap([1,-2,-3])



function valTimesIndex(arr){
      const timesIndex = arr.map(function(val, idx){
           return  val * idx
        })
        return timesIndex
}
Examples:
valTimesIndex([1,-2,-3]) 
valTimesIndex([1,2,3])

function extractKey(arr, key){
    return arr.map(function(val){
       return  val[key] 
    });
}
Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']


    function extractFullName(arr){
        return arr.map(function(val){
            return val['first'] + " " + val['last']
        })
    }
Examples:
    extractFullName([
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia"},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele"}
        ]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


function filterByValue(arr, key) {
    return arr.filter(function(val){
    return val[key] !== undefined;
    });
}

Examples:
    filterByValue([
     {first: 'Elie', last:"Schoppik"},
     {first: 'Tim', last:"Garcia", isCatOwner: true},
     {first: 'Matt', last:"Lane"},
     {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner')
    

    function find(arr, searchValue) {
        return arr.filter(function(val) {
          return val === searchValue;
        })[0];
      }

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10    ) // undefined


    function findInObj(arr, key, boolean) {
        return arr.filter(function(val){
            return val[key] === boolean;
        })[0]
    }

Examples:
    findInObj([
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele", isCatOwner: true}],
       'isCatOwner',
       true
       )
       
       // {first: 'Tim', last:"Garcia", isCatOwner: true}

       function removeVowels(str) {
          const vowels = "aeiou";
          return str
            .toLowerCase()
            .split('')
            .filter(function(val){
                return vowels.indexOf(val) === -1
            })
            .join('');
        }
        

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')

    function doubleOddNumbers(arr){
        // filter our odd numbers
       return arr
            .filter(function(val){
            return  ( val % 2 !== 0 )
        })
            .map(function(val){
            return val * 2
            })
    }


Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []


