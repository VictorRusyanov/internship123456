import {encoded, translations} from './data.js'


function quest(encoded, translations) {
    console.log('Расшифрованный список: ')
    for (let group of encoded) {
        for (let key in group) {
            for (let translation in translations) {
                if (group[key] === translation) {
                    group[key] = translations[translation]
                    break
                }
            }
        }
        console.log(group)
    }
}
function getUniqueId(encoded) {
    console.log('Стоит понимать, что эта функция не оставляет по-настоящему уникальные значения, а лишь удаляет повторения. Но я решил её оставить, т.к. вполне возможно, что именно это и требовалось в задаче. Ниже написал функцию, которая оставляет по-настоящему уникальные значения в форме списка(объекта). На мой взгляд, лучше постараться и дать работодателю чуть-чуть больше, чем он просил изначально.')
    const uniqueIds = new Set();

    for (let item of encoded) {
        for (let key in item) {
            if (key.includes("Id")) {
                uniqueIds.add(key + ' ' + item[key]);
            }
        }
    }

    return Array.from(uniqueIds);
}
function getRealUniqueId(encoded) {
    console.log("По-настоящему УНИКАЛЬНЫЕ значения: ")
    const cntId = []
    for (let group of encoded) {
        for (let key in group) {
            if (key.endsWith("Id") && (key in cntId === false)) {
                cntId[key] = group[key]
            } else if (key.endsWith("Id") && (key in cntId)) {
                cntId[key] += ', ' + group[key]
            }
        }
    }
    for (let key in cntId) {
        cntId[key] = cntId[key].split(', ')
    }
    for (let key in cntId) {
        const x = cntId[key].filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
        if (x.length > 0) {
            console.log(`Ключ: ${key}, уникальное значение: ${x}`)
        }
    }
}

console.log(getUniqueId(encoded))
getRealUniqueId(encoded)
quest(encoded, translations)
