

function isikukood(kood){
    const months = {
        "01":"jaanuar",
        "02":"veebruar",
        "03":"marts",
        "04":"aprill",
        "05":"mai",
        "06":"juuni",
        "07":"juuli",
        "08":"august",
        "09":"september",
        "10":"oktoober",
        "11":"november",
        "12":"detsember"
    }
    function getCentury(num){
        num = parseInt(num)
        const century = {
            2 : 18,
            4 : 19,
            6 : 20,
            8 : 21
        }
        if(num % 2 == 0){
            return century[num]
        }return century[num + 1]
    }
    
    const data = {
        sex: kood[0] % 2 == 0 ? "naine": "mees",
        year: kood.slice(1,3),
        month: kood.slice(3,5),
        day: kood.slice(5,7),
        qNumber : kood.slice(7,10),
        cNumber : kood.slice(-1)
    }
    const myControl = (code) => {
    const weight1 = [1,2,3,4,5,6,7,8,9,1]
    const weight2 = [3,4,5,6,7,8,9,1,2,3]

    // 49403136526

    let sum = 0
    for(let i = 0; i < code.length - 1; i++){
        sum = sum + parseInt(code[i]) * weight1[i]
    }
    if(sum % 11 < 10){
        return sum % 11
    }
    else{
        let sum2 = 0
        for(let i = 0; i < code.length -1; i++){
            sum2 = sum2 + parseInt(code[i]) * weight2[i]
        }
        if(sum2 % 11 < 10){
            return sum2 % 11
        }
        else{
            return 0
        }
    }

}
    const ans = [
        `Isik isikukoodiga ${kood} on ${data.sex},`,
        `kes on syndinud ${data.day}. ${months[data.month]}il ${getCentury(kood[0])}${data.year}. aastal.`,
        `Tema isikukood registreeriti`,
        `Ja sel paeval oli ta ${data.qNumber}. ${data.sex}`,
        `Isikukoodi kontrollnumbriks on ${myControl(kood)}`
    ]
    return ans
}

console.log(isikukood("50608095716"))