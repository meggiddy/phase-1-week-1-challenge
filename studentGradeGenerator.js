const studentGradeGenerator = (grade)=>{
    if (grade >=0 && grade < 40){
        return "E";
    }
    if (grade >=40 && grade < 49){
        return "D";
    }
    if (grade >=49 && grade < 59){
        return "C";
    }
    if (grade >=60 && grade < 79){
        return "B";
    }
    if (grade >= 79){
        return "A";
    }
}

console.log(studentGradeGenerator(35));
console.log(studentGradeGenerator(42));
console.log(studentGradeGenerator(56));
console.log(studentGradeGenerator(61));
console.log(studentGradeGenerator(80));