const speedDetector = (speed)=>{
    const speedLimit = 70;
    if(speed < speedLimit){
        console.log("Ok");
        return;
    }
    
    const overLimit = (speed - speedLimit);
    const demeritPoints= Math.round((overLimit/5));

    if(demeritPoints>=12){
        console.log("License suspended");
        return;
    }
    console.log(`Points:${demeritPoints}`)

}

speedDetector(100);
speedDetector(68);
speedDetector(136);
speedDetector(83);