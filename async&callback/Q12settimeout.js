function set_time()
{
    console.log("message 1")

    setTimeout(() => {
        console.log("message 2")
    }, 2000);

    console.log("message 3")
}

set_time()