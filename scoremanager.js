let socre=[35,45,67,34,67,98,65,78,79,41]

for(i=0;i<socre.length;i++)
{
    if(socre[i]<40)
{
    socre[i]+=20
}
else if(socre[i]>90)
{
    socre[i]=90
}
}

let score2=socre
let pass=0


for(j=0;j<score2.length;j++)
{
    if(score2[j]>=50){
        pass=pass+1
}
}

console.log("update arr:",score2)
console.log("passed",pass)