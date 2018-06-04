let lastName = "Henderson";
const logName = () => {
    if (lastName.length < 7){
        console.log(lastName);
    }
    else {
        console.log("I can't pronounce this last name.");    
    }
}
logName();