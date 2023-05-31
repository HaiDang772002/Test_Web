let count = 0;
function increaseCount() {
    setInterval(() => {
        count = count + 1;
        console.log(count)
    }, 1000);
}