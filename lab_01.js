//task1
function addition(a, b)
{
    return a+b;
}
console.log("Task 1");
console.log(addition(3,4));

//task2
function bitwiseAND(a,b)
{
    return (a*b);
}
console.log("Task 2");
console.log(bitwiseAND(3.75,1.22));
function bitwiseOR(a,b)
{
    return (a+b);
}
console.log(bitwiseOR(4.67,7.98));
function bitwiseXOR(a,b)
{
    return (a^b);
}
console.log(bitwiseXOR(2,8));

//task3
function addUp(a)
{
    let sum=0;
    for(let i=1; i<=a; i++)
        sum=sum+i;
    return sum;
}
console.log("Task 3");
console.log(addUp(4));

//task4
function progressBar(a) 
{
let bar="";
for (let i=1; i<=10; i++) {
    if (i<=a/10) {
        bar=bar+"#";
    } else 
        bar=bar+"-";
    }
    return bar;
}
console.log("Task 4");
console.log(progressBar(30));

//task5
function minMax(arr)
{
    let min=arr[0];
    let max=arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<min)
        min=arr[i];
        if(arr[i]>max)
        max=arr[i];
    }
        
    return [min,max];
}
console.log("Task 5");
console.log(minMax([3,2,1,4,5,6]));

//task6
function calculateRepoStats(repos)
{
    const stars = repos.map(function (repo) 
    {
        return repo.stars;
    });
    const result = minMax(stars);
    const minStars = result[0];
    const maxStars = result[1];
    let total=0;
    for(let i=0; i<stars.length; i++){
    total=total+stars[i];
    }
    return {
        maxStars:maxStars,
        minStars:minStars,
        avgStars:Math.floor(total/stars.length),
        varianceScore:Math.abs(maxStars-minStars),
    };
}
console.log("Task 6");
const repos = [
  { name: "repo-a", stars: 12 },
  { name: "repo-b", stars: 45 },
  { name: "repo-c", stars: 3 },
];
console.log(calculateRepoStats(repos));

//task7
function round2(number) {
  return Math.round(number * 100) / 100;
}
function calculateFinalPrice(basePrice, taxRate, discountPercentage) 
{
  const discounted = round2(basePrice * (1 - discountPercentage / 100));
  const tax = round2(discounted * (taxRate / 100));
  const finalPrice = round2(discounted + tax);
  const loyaltyPoints = Math.ceil(finalPrice);
 
  return {
    discountedPrice: discounted,
    tax: tax,
    finalPrice: finalPrice,
    loyaltyPoints: loyaltyPoints,
  };
}
console.log("Task 7");
console.log(calculateFinalPrice(19.99, 8.5, 15));

//task8
function paginateData(items, pageNumber, pageSize = 5) {
  const totalPages = Math.ceil(items.length / pageSize);
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
 
  return {
    data: items.slice(start, end),
    currentPage: pageNumber,
    totalPages: totalPages,
    hasNext: pageNumber < totalPages,
    hasPrev: pageNumber > 1,
  };
}
console.log("Task 8");
const allProducts = ["Laptop", "Mouse", "Keyboard", "Monitor", "Desk", "Chair", "Webcam", "Headphones"];
console.log(paginateData(allProducts, 2, 3));


