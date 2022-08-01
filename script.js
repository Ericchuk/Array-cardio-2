 // ## Array Cardio Day 2

 const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?

  function above19(){
    for(let i = 0; i < people.length; i++){
      if(2022 - people[i].year >= 19){
        console.log(people[i].year)
      }
    }
  }
  above19();
  // Array.prototype.every() // is everyone 19 or older?
  function above19orMore(){
    for(let i = 0; i < people.length; i++){
      if(new Date().getFullYear() - people[i].year == 19){
        console.log("yes")
      }else{
        console.log("no")
      }
    }
  }
  above19orMore();
  // Array.prototype.find()

  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  function findID(){
        for(let i = 0; i < comments.length; i++){
          if(comments[i].id === 823423){
            console.log(comments[i].text)
          }
          
        }
  }

  findID();
  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  function findIDandDelete(){
    for(let i = 0; i < comments.length; i++){
      if(comments[i].id === 823423){
        delete comments[i].text;
      }
      
    }
}

findIDandDelete();
