 cl = console.log;

//HR Admin call >> success or fail

//HTTP call >> success or fail

function hrAdmincall(){
    //API call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        if(!error){
            //call for 1st tech interview
            cl(`Candidate is shortlisted for 1st tech interview`)
            firstTechInterview();
        }else{

            console.error(`Looking for a cadidate`)
        }

    }, 3000);
}

function firstTechInterview(){
    // API call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        if(!error){
            cl(`candidate is good in basics and he/she is selected for 2nd tech interview`)
            secondTechInterview()
        }else{
            console.error(`candidate is week in basic,plz look for another canditate`)
        }

    }, 1000);
}


function secondTechInterview(){
    //API Call
    let error = Math.random() >= .5 ? false : true;
    if(!error){
        cl(`Candidate is very good in Javascript and Angular is selected 3rd tech`);
        managerRound()
    }else{
        console.error(`Candidate is week in advaced Js ,plz look for another candidate`)
    }
}

function managerRound(){
    //API Call
    let error = Math.random() >= .5 ? false : true;
    if(!error){
        cl(`We got a Angular Developer`);
    }else{
        console.error(`Candidate is not suitable for given role`)
    }
}
hrAdmincall();
