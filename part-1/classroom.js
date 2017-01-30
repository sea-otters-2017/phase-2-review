var Classroom = function(students) {
  this.students = students;
}

Classroom.prototype.find = function(name) {
  // return $.grep(this.students, function(student) {
  //   return student.firstName == name;
  // })[0];
  for(var i = 0; i < this.students.length; i++) {
    if(this.students[i].firstName == name) {
      return this.students[i];
    }
  }
}

Classroom.prototype.honorRollStudents = function() {
  return this.students.filter(function(student) {
    // console.log(this) ???
    return student.averageScore() >= 95;
  })
}
