const output = async () => {
    for (let i = 1; i <= 3; i++) {
        await new Promise(resolve => 
            setTimeout(resolve, 1000))
        console.log(`${i},`);
    }
    console.log('Done');
}
output()
