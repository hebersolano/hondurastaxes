console.log("Hello Word");

/*incomes*/
var salaryM = 40000;
var salaryT = salaryM * 12; 
var othersI = 0;
var totalI = salaryT + othersI;

/*deductions*/
var spendsM = 40000;
var age3 = 0;
var injupem = 0;
var ihss = 0;
var totalG = totalI -(spendsM + age3 + injupem + ihss);

var isr

/*isr table values*/
var tbExent = 110000;
var diferencia = 0.01;
var tbQuince = 200000;
var tbVeinte = 500000;

console.log("Sueldo Gravable: "+ totalG);

if (totalG < tbExent) {
	isr = 0;
	
}
	if (totalG > tbExent) {
		if (totalG <= tbQuince) {
			isr = (totalG - tbExent) * 0.15;
			
		} if (totalG > tbQuince) {
			if (totalG <= tbVeinte) {
				isr = ((tbQuince-tbExent)*0.15) + ((totalG - tbQuince)*0.20);
				
			} else {
				isr = ((tbQuince-tbExent)*0.15) + ((tbVeinte - tbQuince)*0.20) + ((totalG - tbVeinte)*0.25);
				
				}
		}
	}


console.log("ISR a pagar: " + isr);
console.log("ISR mensual a pagar: " + (isr/12));

var taste = document.getElementById("sueldoM");
console.log(taste);
alert("Este es "+ taste);

function sacarTexto(){
var codigo=document.getElementById("capa").innerText;
document.getElementById("texto").value=codigo;
}
