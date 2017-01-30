var Student = function(student) {
  this.firstName = student.firstName;
  this.scores = student.scores;
}

Student.prototype.averageScore = function() {
  var totalScore = this.scores.reduce(function(total, num){
    return total + num;
  })
  return Math.floor(totalScore / this.scores.length);
}

Student.prototype.letterGrade = function() {
  var score = this.averageScore();
  switch(true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    case score < 60:
      return "F";
  }
}
