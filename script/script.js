function cadastro()
{
    let contador=0, numH, sexo, salario, totalS=0, totalS2=0, fem8=0, salarioM=0, mulher=0, homen=0;


while(contador<3)
{
sexo=(window.prompt("Digite seu sexo (F)eminino ou (M)asculino"));
sexo=sexo.toUpperCase();

numH=(window.prompt("Você trabalha (6) horas ou (8)?"));
numH=parseInt(numH);

salario=(window.prompt("Digite seu salario"));
salario=parseFloat(salario);

if(sexo ='M')
{
homen++;

}
else{
 mulher++;
}
// ----------------------------------

if(sexo = 'M' && numH == 8)
{
    salarioM = salarioM + salario;
}

// ----------------------------------

if(sexo='F' && numH == 8)
{
    fem8++;
}

// ----------------------------------
    
if(numH == 6)
{
    totalS = totalS + salario;
}
else if(numH == 8)
{
    totalS2 = totalS2+ salario;
}

contador++;
// ----------------------------------
}
    alert("A soma do salario dos trabalhadores que trabalham 6 horas : "+totalS+
    "\nDos que trabalham 8 horas : "+totalS2+
    "\n\nmulheres que trabalham 8 horas: "+fem8+
    "\nA soma do salario do sexo masculino das 8 horas: "+salarioM+
    "\nO percentual de mulheres que trabalham "+mulher/10*100+
    "%\nO percentual de homens que trabalham"+homen/10*100+"%")

}