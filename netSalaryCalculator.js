
const calculatePayee = (salary)=>{
    if(salary<=24000){
        return (salary*0.1);
    }
    if(salary >= 24001 && salary <= 32333){
        return (salary*0.25);
    }
    if(salary > 32333){
        return (salary*0.3);
    }
    //payee calculator ignores the other payee deductions e.g Personal Relief, Affordable Housing e.t.c.
}
const calculateNhif = (salary)=>{
    for(let i = 0; i<=rates.length; i++){
        const currentRate = rates[i];
        if(salary>=currentRate.from && salary<=currentRate.to){
            //from is the bottom of range and to is the top of the range
            return currentRate.deduction;
        }
    }//uses the rates Object array below to iterate and find the deduction indicated for the salary bracket 
}
const calculateNssf = (salary)=>{
    //Source: https://www.tuko.co.ke/283255-nssf-rates-kenya-new-monthly-contributions-interest-2021.html#:~:text=NSSF%20contribution%20rates%20comprise%20a,entire%20pensionable%20salaries%20and%20wages.&text=NSSF%20monthly%20rates%20are%20divided,employee%20pays%20the%20remaining%206%25.
    // Tier 1 720
    //Tier 2 1440
}
const calculateNetSalary = (salary)=>{
    return (salary-calculatePayee(salary)-calculateNhif(salary)-calculateNssf(salary))
}
const netSalaryCalculator = (salary)=> {
    //provides a breakdown when the function is run i.e Payee=xxx, nhif=xxx e.t.c.
    let payee = calculatePayee(salary)
    let nhif = calculateNhif(salary);
    let nssf = calculateNssf(salary);
    let netSalary = calculateNetSalary(salary);
    console.log({payee,nhif,nssf,netSalary})
}
//Object array used in nhif calculator
const rates = [{
    from: 0,
    to: 5999,
    deduction: 150,
},{
    from: 6000,
    to: 7999,
    deduction: 300,
},{
    from: 8000,
    to: 11999,
    deduction: 400,
},{
    from: 12000,
    to: 14999,
    deduction: 500,
},{
    from: 15000,
    to: 19999,
    deduction: 600,
},{
    from: 20000,
    to: 24999,
    deduction: 750,
},{
    from: 25000,
    to: 29999,
    deduction: 850,
},{
    from: 30000,
    to: 34999,
    deduction: 900,
},{
    from: 35000,
    to: 39999,
    deduction: 950,
},{
    from: 40000,
    to: 44999,
    deduction: 1000,
},{
    from: 45000,
    to: 49999,
    deduction: 1100,
},{
    from: 50000,
    to: 59999,
    deduction: 1200,
},{
    from: 60000,
    to: 69999,
    deduction: 1300,
},{
    from: 70000,
    to: 79999,
    deduction: 1400,
},{
    from: 80000,
    to: 89999,
    deduction: 1500,
},{
    from: 90000,
    to: 99999,
    deduction: 1600,
},{
    from: 100000,
    to: Number.MAX_SAFE_INTEGER,//There is no highest value indicated
    deduction: 1700,
}]
//sample test code
netSalaryCalculator(56784);
