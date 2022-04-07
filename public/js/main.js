var answerContainerEl = document.querySelector('.answer-container')
// Hide empty inputs when JS is loaded & show add/remove buttons to enhance UX
;(function () {
    document.querySelector('.hidden').classList.remove('hidden')
    var hideAnswersEl = document.querySelectorAll('.js-hide')
    for (var i = 0; i < hideAnswersEl.length; i++) {
        answerContainerEl.removeChild(hideAnswersEl[i])
    }
})()

// Count inputs that weren't hidden by the hide function, amount can be 2 on the add page or 2-6 on the concept page
var answersEl = document.querySelectorAll('.answer-container li')
var inputAmount = answersEl.length

// Remove input if input amount is higher than 2
function removeLastInput() {
    if (inputAmount > 2) {
        inputAmount--
        answerContainerEl.removeChild(answerContainerEl.lastElementChild)
    }
}

// Add input if input amount is below 6
function addExtraInput() {
    if (inputAmount < 6) {
        inputAmount++
        var listItem = document.createElement('li')
        var input = document.createElement('input')
        input.type = 'text'
        input.name = 'answers'
        input.placeholder = 'Antwoord ' + inputAmount
        // input.required = true
        listItem.appendChild(input)
        answerContainerEl.appendChild(listItem)
    }
}

var removeAnswerEl = document.querySelector('#remove-answer')
removeAnswerEl.addEventListener('click', function () {
    removeLastInput()
})

var addAnswerEl = document.querySelector('#add-answer')
addAnswerEl.addEventListener('click', function () {
    addExtraInput()
})
