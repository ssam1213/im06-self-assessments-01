// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers`
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Ingi'
//   lastName: 'Kim'
//   location: 'Seoul'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
var familyTree = {
  'firstName': 'Ingi',
  'lastName': 'Kim',
  'location': 'Seoul',
  'children': [
    {
      'firstName': 'Sophia',
      'lastName': 'Park',
      'location': 'Incheon',
      'children': [
        {
          'firstName': 'David',
          'lastName': 'Lee',
          'location': 'Tokyo',
          'children': []
        }
      ]
    },
    {
      'firstName': 'Patrick',
      'lastName': 'Kim',
      'location': 'Seoul',
      'children': []
    }
  ]
};

var livesInSeoul = function (familyMember) {
  return familyMember.location === 'Seoul';
};

// console.log(livesInSeoul);
// returns ['Ingi Kim', 'Patrick Kim'];
var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body

  var children = familyTree.children;
  var array = [];
  if(livesInSeoul(familyTree)){
    array.push(familyTree.firstName + ' ' +  familyTree.lastName);
    console.log('array', array);
    if(children.length>0){
      for(var i=0; i<familyTree.children.length; i++){
        console.log('children[i]', children[i]);
        array.push(''+filterFamilyMembers(children[i]));
      }
    }
  } else {
    if(children.length>0){
      for(var j=0; j<familyTree.children.length; j++){
        console.log('children[j]', children[j]);
        array.push(''+filterFamilyMembers(children[j]));
      }
    }
  }
  console.log(array);
return array;
};

filterFamilyMembers(familyTree, livesInSeoul);
