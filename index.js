function saturdayFun(fun) {
    if (fun != null) {
        return "This Saturday, I want to bathe my dog!";
    } else {
        return "This Saturday, I want to roller-skate!";
    }
}

function mondayWork(work) {
    if (work != null) {
        return "This Monday, I will work from home.";
    } else {
        return "This Monday, I will go to the office.";
    }
}

function wrapAdjective(thing) {

    if (thing === "*") {
        function emphatic() {
            return "You are *a hard worker*!";
        }
        return emphatic
    } else if (thing === "||"){
        function emphatic() {
            return "You are ||a dedicated programmer||!"
        }
        return emphatic;
    }
}