//** Kullanicidan bir sayi girisi 
var myNum=Number(prompt("Bir sayi giriniz"))


//*? 1'den buyuk bir sayinin girilmesinin kontrolu
while(myNum<1){
    myNum=Number(prompt("1'den buyuk bir sayi giriniz."))
}
if(myNum===44){
    document.write("<br><br>"+ "Secret-key girdiniz.")
}else{
    homeWork(myNum)
}



function total(num1){
    var result=0
    for(var i=1;i<=num1;i++){
        result+=i
    }
    return result
}
function count(num2){
    var counter=0
    for(var i=1;i<=num2;i++){
        counter++
    }
    return counter
}
//*! Tek sayi operasyonlari
function oddCount(num3){
    var oddCounter=0
    for(var i=1;i<=num3;i++){
        if(i==7) continue
        if(i%2===1){
            oddCounter++
        }
    }
    return oddCounter
}
function oddNumbers(num4){
    
    for(var i=1;i<=num4;i++){
        if(i==7){
            continue
        }
        if(i%2==1){
            document.write(" "+i)
        }
    }
}
function oddTotal(num5){
    var oddNumTotal=0
    for(var i=1;i<=num5;i++){
        if(i%2==1){
            oddNumTotal+=i
        }
    }
    return oddNumTotal
}

//*! Cift sayi operasyonlari
function evenCount(num6){
    var evenCounter=0
    for(var i=1;i<=num6;i++){
        if(i%2==0){
            evenCounter++
        }
    }
    return evenCounter
}
function evenNumbers(num7){
    for(var i=1;i<=num7;i++){
        if(i%2==0){
            document.write(" "+i)
        }
    }
}
function evenTotal(num8){
    var evenNumTotal=0
    for(var i=1;i<=num8;i++){
        if(i%2==0){
            evenNumTotal+=i
        }
    }
    return evenNumTotal
}

function homeWork(num){
    if(num>100){
        num=100
    }

    document.write("<br><br>"+ "Girdiginiz sayilarin toplami: "+total(num))
    document.write("<br><br>"+ "Girdiginiz sayilarin adeti: "+count(num))

    document.write("<br><br>"+ "Girdiginiz tek sayilarin adeti: "+oddCount(num))
    document.write("<br><br>"+ "Girdiginiz tek sayilar: ")
    oddNumbers(num)
    document.write("<br><br>"+ "Girdiginiz tek sayilarin toplami: "+oddTotal(num))

    document.write("<br><br>"+ "Girdiginiz cift sayilarin adeti: "+evenCount(num))
    document.write("<br><br>"+ "Girdiginiz cift sayilar: ")
    evenNumbers(num)
    document.write("<br><br>"+ "Girdiginiz cift sayilarin toplami: "+evenTotal(num))

}

