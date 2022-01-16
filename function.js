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