export async function print(data){
    const facts = document.getElementById('facts');
    facts.innerHTML = await data;
} 