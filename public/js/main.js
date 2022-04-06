var addAnswerEl = document.querySelector('#add-answer')
var removeAnswerEl = document.querySelector('#remove-answer')
var answerContainerEl = document.querySelector('.answer-container')
var answersEl = document.querySelectorAll('.answer-container li')
var inputAmount = answersEl.length

removeAnswerEl.addEventListener('click', function () {
    if (inputAmount > 2) {
        inputAmount--
        answerContainerEl.removeChild(answerContainerEl.lastElementChild)
    }
})

addAnswerEl.addEventListener('click', function () {
    if (inputAmount < 6) {
        inputAmount++
        var listItem = document.createElement('li')
        var input = document.createElement('input')
        input.type = 'text'
        input.name = 'answers'
        input.placeholder = 'Antwoord ' + inputAmount
        input.required = true
        listItem.appendChild(input)
        answerContainerEl.appendChild(listItem)
    }
})
