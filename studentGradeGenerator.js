const studentGradeGenerator = (grade)=>{
    if (grade >=0 && grade < 40){//grades below 40 gets E
        return "E";
    }
    if (grade >=40 && grade < 49){//grades btn 40 and 48 gets D
        return "D";
    }
    if (grade >=49 && grade < 59){//grades btn 49 and 58 gets C
        return "C";
    }
    if (grade >=59 && grade < 79){//grades btn 59 and 78 get B
        return "B";
    }
    if (grade >= 79){//grades 79 and above get A
        return "A";
    }
}
//sample test code
console.log(studentGradeGenerator(35));
console.log(studentGradeGenerator(42));
console.log(studentGradeGenerator(56));
console.log(studentGradeGenerator(61));
console.log(studentGradeGenerator(80));