export const getApiData = async () =>{
    try {
        const result =  await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        //console.log(result);
        const data = await result.json();
        //console.log(data);
        return data.text;
    } catch (error) {
        return null;
    }
}
