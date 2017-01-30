var Classroom = function(students){
  this.students = students;
}

Classroom.prototype.find = function(name){
  return this.students.find(function(student){
    if(student.firstName === name){
      return student
    }
  })
}

Classroom.prototype.honorRollStudents = function(){
  var honorStudents = []
  this.students.forEach(function(student){
    if(student.averageScore() >= 95 ){
      honorStudents.push(student)
    }
    else{
      null
    }
  })
  return honorStudents
}
