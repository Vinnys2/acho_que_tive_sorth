function sortFunction(v1, v2){  // Funcão sorte compara os valores (verificando os que são maiores e os que são menores assim mudando-os de posição), e classifica-os em ordem crescente
    return (v1-v2);
}

var point = [34, 12, 78, 22, 90, 56, 88, 103];

console.log (point.sort(sortFunction));


// site de auxilio www.w3schools.com