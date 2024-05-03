
let words=[
    'HOLA',
    'COMO',
    'ESTAS',
]

export const getRandomWord = () => {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}