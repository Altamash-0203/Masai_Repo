function check(age)
{
    let res=age<=0?"Invalid Age":age>=60?"Eligible for Senior Discount":"Not Eligible for Senior Discount"
    console.log(res)
}
check(60)
check(-1)