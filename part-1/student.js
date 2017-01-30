var Student = function(student){
  this.firstName = student.firstName;
  this.scores = student.scores;
}

Student.prototype.averageScore = function(){
  var total = 0
  var arrayLength = this.scores.length
  this.scores.forEach(function(score){
    total += score
  })
  return Math.floor(total/arrayLength)
}
