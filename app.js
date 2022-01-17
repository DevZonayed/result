s('input[type = number]').map((get)=>{
    get.onkeyup = () => {
        if(get.value < 0){
            get.style.border = '2px solid red'
            get.previousElementSibling.style.border = '2px solid red'
        }else{
            get.style.border = '1px solid #ced4da'
            get.previousElementSibling.style.border = '1px solid #ced4da'
        }
    }
});
let bn = s('#bn');
let en = s('#en');
let math = s('#math');
let ss = s('#ss');
let rel = s('#rel');
let phy = s('#phy');
let che = s('#che');
let bio = s('#bio');

let fnamee = s('#fname');
let lnamee = s('#lname');
let father = s('#father');
let mother = s('#mother');
let birth = s('#birthdate');
let institution = s('#institution');
let roll = s('#roll');
let reg = s('#reg');


s1('#finalresult').onclick = () => {

    let valid = [];
    let condition = s('input').map((get) => {
        valid.push(get.value == '');
    })

    if((/true/i.test(valid))){
        s('input').map((get) => {
            if(get.value == ''){
                get.style.border = '2px solid red'
                get.previousElementSibling.style.border = '2px solid red'
            }else{
                get.style.border = '1px solid #ced4da'
                get.previousElementSibling.style.border = '1px solid #ced4da'
            }
        })
    }else{
        
    s1('.st-nam').innerHTML = fnamee.value + ' ' + lnamee.value;
    s1('.sf-nam').innerHTML = father.value;
    s1('.sm-nam').innerHTML = mother.value;
    s1('.ins-nam').innerHTML = institution.value;
    s1('.roll-number').innerHTML = roll.value;
    s1('.reg-number').innerHTML = reg.value;
    s1('.birth-date').innerHTML = birth.value;

    s('.bn').map((get , i) => {
        (s('.bn')[0]).innerHTML = bn.value;
        (s('.bn')[1]).innerHTML = grade(bn.value)
    });
    s('.en').map((get , i) => {
        (s('.en')[0]).innerHTML = en.value;
        (s('.en')[1]).innerHTML = grade(en.value)
    });
    s('.math').map((get , i) => {
        (s('.math')[0]).innerHTML = math.value;
        (s('.math')[1]).innerHTML = grade(math.value)
    });
    s('.ss').map((get , i) => {
        (s('.ss')[0]).innerHTML = ss.value;
        (s('.ss')[1]).innerHTML = grade(ss.value)
    });
    s('.rel').map((get , i) => {
        (s('.rel')[0]).innerHTML = rel.value;
        (s('.rel')[1]).innerHTML = grade(rel.value)
    });
    s('.phy').map((get , i) => {
        (s('.phy')[0]).innerHTML = phy.value;
        (s('.phy')[1]).innerHTML = grade(phy.value)
    });
    s('.che').map((get , i) => {
        (s('.che')[0]).innerHTML = che.value;
        (s('.che')[1]).innerHTML = grade(che.value)
    });
    s('.bio').map((get , i) => {
        (s('.bio')[0]).innerHTML = bio.value;
        (s('.bio')[1]).innerHTML = grade(bio.value)
    });

    s1('.totalgpa').innerHTML = (grade((bn.value + en.value + math.value + ss.value + rel.value + phy.value + che.value + bio.value) / 8))
    let now = new Date();
    s1('.publish').innerHTML = `${now.getDay()+1}/${now.getMonth()}/${now.getFullYear()}`
    s1('.result-section').style.display = 'block';
    }

    
}

s1('.btn-close').onclick = () => {
    s1('.result-section').style.display = 'none';
}