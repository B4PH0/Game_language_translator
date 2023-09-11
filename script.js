import { GetResponse } from "./modules/Translated.js";

async function TranslateTextForAlternativeLanguage(text, translation){
    const api = await GetResponse(text, translation);
    return api.contents.translated;
    console.log('Troque a vpn para reiniciar o rate limit da api!');
}

window.Traduzir = async () => {
    let ValueForTranslate = window.document.getElementById('ForTranslate').value;
    let InputForValueTranslated = window.document.getElementById('Translated');
    const OptionTranslation = window.document.getElementById('TypesTranslation').value;
    switch (OptionTranslation) {
        case 'dothraki':
            const dothraki = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'dothraki');
            InputForValueTranslated.value = dothraki;
            break;
        
        case 'valyrian':
            const valyrian = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'valyrian');
            InputForValueTranslated.value = valyrian;
            break;
        
        case 'minion':
            const minion = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'minion');
            InputForValueTranslated.value = minion;
            break;
        
        case 'yoda':
            const yoda = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'yoda');
            InputForValueTranslated.value = yoda;
            break;
        
        case 'sith':
            const sith = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'sith');
            InputForValueTranslated.value = sith;
            break;
        
        case 'gungan':
            const gungan = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'gungan');
            InputForValueTranslated.value = gungan;
            break;
        
        case 'huttese':
            const huttese = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'huttese');
            InputForValueTranslated.value = huttese;
            break;
        
        case 'mandalorian':
            const mandalorian = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'mandalorian');
            InputForValueTranslated.value = mandalorian;
            break;
        
        case 'cheunh':
            const cheunh = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'cheunh');
            InputForValueTranslated.value = cheunh;
            break;
        
        case 'groot':
            const groot = await TranslateTextForAlternativeLanguage(ValueForTranslate, 'groot');
            InputForValueTranslated.value = groot;
            break;
        
        default:
            console.log('This options is invalid');
            break;
    }
    
}