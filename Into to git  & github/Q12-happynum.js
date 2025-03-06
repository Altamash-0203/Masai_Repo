function happy(num)
{
let snum=String(num)
let bag=0
for(i=0;i<snum.length;i++)
{
    bag+=(snum[i]**2)
}

if(bag!=1)
{
    happy(bag)
}
else
{
    console.log("Happy num")
}

}
happy(19)
// happy(82)
// happy(68)
// happy(100)