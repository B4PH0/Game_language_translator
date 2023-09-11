export async function GetResponse(text, translation) {
    try {
        const response = await fetch(`https://api.funtranslations.com/translate/${translation}.json?text=${text}`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}