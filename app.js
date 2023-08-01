const responses = ["c", "a", "b", "a", "c"];
const emojis = ["😭", "👎", "👀", "✔️", "✨"];
const groupNames = ["emperor", "independance", "empire", "capital", "civilisation"];
const globalForm = document.querySelector("form");
const submitButton = document.getElementById('send-response');
const allQuestionContainer = document.querySelectorAll('.question-container');
const summaryPart = document.querySelector('.summary-part')


const takeResponse = (indexGroup) => {

    const radios = document.getElementsByName(groupNames[indexGroup])

    for (let i = 0; i < radios.length; i++) {

        const radio = radios[i];

        if (radio.checked) {
            radioCheck = radio.value
            return radioCheck
        }
    }
}


const responseCheck = (indexGroup) => {

    if (takeResponse(indexGroup) === responses[indexGroup]) {

        allQuestionContainer[indexGroup].classList.remove('bad-anwser')
        allQuestionContainer[indexGroup].classList.add('good-anwser')

    } else {

        allQuestionContainer[indexGroup].classList.remove()
        allQuestionContainer[indexGroup].classList.add("bad-anwser")

    }
}




const displayNumberGoodAnwser = () => {

    // const emojis = ["😭", "👎", "👀", "✔️", "✨"];

    const goodAnwser = document.getElementsByClassName('good-anwser');

    const totalQuestions = allQuestionContainer.length;

    let emojiIndex;

    switch (goodAnwser.length) {
        case 0:
            emojiIndex = 0;
            break;

        case 1:
            emojiIndex = 1;
            break;

        case 2:
            emojiIndex = 2;
            break;

        case 3:
            emojiIndex = 3;
            break;

        case 4:
            emojiIndex = 4;
            break;

        default:

    }
    //il y a 6 cas pas asse d'emojis



    const summaryMessage = `
        <div>
            Vous avez eu ${goodAnwser.length} sur ${totalQuestions} ${emojis[emojiIndex]}
        </div>
    `;

    summaryPart.innerHTML = summaryMessage;
};












// const displayNumberGoodAnwser = () => {

//     const goodAnwser = document.getElementsByClassName('good-anwser')



//     if (goodAnwser.length === 0) {

//         summaryPart.innerHTML =
//             `
//         <div>

//         Vous avez eu ${goodAnwser.length} sur ${allQuestionContainer.length} ${emojis[3]}

//         </div>
//         `
//     } else if (goodAnwser.length === 1) {

//         summaryPart.innerHTML =
//             `
//         <div>

//         Vous avez eu ${goodAnwser.length} sur ${allQuestionContainer.length} ${emojis[4]}

//         </div>
//         `

//     } else if (goodAnwser.length === 3) {

//         summaryPart.innerHTML =
//             `
//         <div>

//         Vous avez eu ${goodAnwser.length} sur ${allQuestionContainer.length} ${emojis[2]}

//         </div>
//         `
//     } else if (goodAnwser.length === 4) {

//         summaryPart.innerHTML =
//             `
//         <div>

//         Vous avez eu ${goodAnwser.length} sur ${allQuestionContainer.length} ${emojis[0]}

//         </div>
//         `
//     } else {
//         (goodAnwser.length === 5)

//         summaryPart.innerHTML =
//             `
//         <div>

//         Vous avez eu ${goodAnwser.length} sur ${allQuestionContainer.length} ${emojis[1]}

//         </div>
//         `
//     }
// }







globalForm.addEventListener('submit', (e) => {

    e.preventDefault()

    for (let i = 0; i < groupNames.length; i++) {

        responseCheck(i)

    }

    displayNumberGoodAnwser()


})



