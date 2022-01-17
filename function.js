function s(value){
    let selector = document.querySelectorAll(value);
    let result = [];
    if(selector.length == 1){
        return selector = selector[0];
    }else{
        selector.forEach((get) => {
            result.push(get);
        });
    }
    return result;
}
function s1(value){
    let selector = document.querySelector(value);
    return selector;
}

// ------------------------

//result details function start
function grade(mark){
    if(mark < 0 || mark > 100){
        return 'Invalid !';
    }else if(mark < 32){
        return 'F';
    }else if(mark >= 33 && mark <= 39){
        return 'D'
    }else if(mark >= 40 && mark <= 49){
        return 'C'
    }else if(mark >= 50 && mark <= 59){
        return 'B'
    }else if(mark >= 60 && mark <= 69){
        return 'A-'
    }else if(mark >= 70 && mark <= 79){
        return 'A'
    }else if(mark >= 80 && mark <= 100){
        return 'A+'
    }
}
//result details function end