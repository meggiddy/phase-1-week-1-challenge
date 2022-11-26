const speedDetector = (speed)=>{
    const speedLimit = 70;//indicated speedlimit
    if(speed < speedLimit){
        console.log("Ok");
        return;//if on or below speedlimit this function aborts here
    }
    
    const overLimit = (speed - speedLimit);//calculates the speed over speedlimit
    const demeritPoints= Math.round((overLimit/5));//every 5km above speedlimit is one demerit point 

    if(demeritPoints>=12){
        console.log("License suspended");
        return;
    }
    console.log(`Points:${demeritPoints}`)

}
//sample test code
speedDetector(100);
speedDetector(68);
speedDetector(136);
speedDetector(83);