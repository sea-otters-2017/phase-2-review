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

Student.prototype.letterGrade = function(){
  if (this.averageScore() >= 90){
    return "A"
  }
  else if (this.averageScore() >=80){
    return "B"
  }
 else if (this.averageScore() >=70){
    return "C"
  }
   else if (this.averageScore() >=60){
    return "D"
  }
   else {
    return "F"
  }
}
