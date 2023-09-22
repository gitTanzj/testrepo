

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
    const ans = [
        `Isik isikukoodiga ${kood} on ${data.sex},`,
        `kes on syndinud ${data.day}. ${months[data.month]}il ${getCentury(kood[0])}${data.year}. aastal.`,
        `Tema isikukood registreeriti`,
        `Ja sel paeval oli ta ${data.qNumber}. ${data.sex}`,
        `Isikukoodi kontrollnumbriks on ${data.cNumber}`
    ]
    return ans
}

console.log(isikukood("50604292787"))