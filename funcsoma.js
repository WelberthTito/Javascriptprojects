function soma()
{ 
   var tn1 = window.document.getElementById('num1');
    var tn2 = window.document.getElementById('num2');
   var res = window.document.getElementById('res');
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)

    res.innerHTML = `O valor da soma de  ${n1} e ${n2} é:${n1+n2}`   
}                                                      