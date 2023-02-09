let n=5;
let count=0;
for (let i=1;i<=n;i++)
{
	if(n%i==0){
	count++}
}(count==2)?console.log("prime"):console.log("Not a prime")