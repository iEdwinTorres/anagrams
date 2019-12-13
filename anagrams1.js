document.getElementById("findButton").onclick = function () {
    let anagrams = []
    let typedText = document.getElementById("input").value;
    for (let word of words) {
        let orderedText = alphabetize(typedText)
        if (orderedText.length === word.length && orderedText === alphabetize(word)) {
            anagrams.push(word)
        }
    }
    createDiv(anagrams.join(", "))
}



function createDiv (content) {
    let newDiv = document.createElement("div")
    let textNode = document.createTextNode(content)
    newDiv.appendChild(textNode)
    let destination = document.getElementById("d1")
    destination.appendChild(newDiv)
} 



function alphabetize(input) {
    return input.toLowerCase().split("").sort().join("").trim();
}