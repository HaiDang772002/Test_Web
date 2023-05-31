async function app() {
    const dang = await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dang')
            resolve(123)
        }, 2000);

    })
    console.log(dang)
}
app()