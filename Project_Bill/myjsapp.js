
function test1111()
{
	

var a=document.getElementById("Test1").value; //get element by id
var b=document.getElementById("Test2").value;
var c=document.getElementById("Test3").value;
var d=document.getElementById("Test4").value;
var e=document.getElementById("Test5").value;
var f=document.getElementById("Test6").value;
var g=document.getElementById("Test7").value;

var total= (50*a)+(60*b)+(70*c)+80*d+90*e+100*f+110*g; //Calculating Total Price

document.write("<h2>**********Bill Details**********</h2>");
document.write("<h3>"+"ITEM"+"\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+"QUANTITY"+"\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+"PRICE"+"</h3>");
//If the iteam is there then add it to bill
if(a>0)    
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +a+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+a*50+"<h4>");

if(b>0)
	document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +b+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+b*60+"<h4>");


if(c>0)
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +c+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+c*70+"<h4>");


if(d>0)
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +d+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+d*80+"<h4>");


if(e>0)
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +e+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+e*90+"<h4>");


if(f>0)
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +f+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+f*100+"<h4>");


if(g>0)
document.write("<h4>"+"French Fries"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0"+ "\u00A0" +g+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ 
 "\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+ "\u00A0"+g*110+"<h4>");


document.write("********************************************");
document.write("\u00A0"+ "\u00A0"+"\u00A0"+ "\u00A0"+"<h2>"+"Total Price"+ "\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+ "\u00A0"+"\u00A0"+"\u00A0"+"\u00A0"+"Rs."+total+"<h2>");

document.write("<h2>**********Thank You**********</h2>");
}