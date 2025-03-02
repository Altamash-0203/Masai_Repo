function printsum(n,m){
    let arr = [
        [1,2],[3,4],[5,6],
        ]
        let bag=""
    for(i=0;i<n;i++)
    {
        for(j=0;j<m;j++)
        {
         bag+=i+j+" "
        }
        console.log(bag)
        bag=""
    }
    }
    printsum(3,2)
    