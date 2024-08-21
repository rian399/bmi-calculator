const maleOption = document.getElementById(`male`)
const femaleOption = document.getElementById(`female`)
const genderInput = document.getElementById(`gender`)
const heightinput = document.getElementById(`height`)
const weightinput = document.getElementById(`weight`)
const submitBtn = document.getElementById(`submit`)
const result = document.getElementById(`result`)

function genderChange(gender){
    genderInput.value = gender

    if (gender == `male`) {
        maleOption.classList.add(`active`)
        femaleOption.classList.remove(`active`)
    } else {
        maleOption.classList.remove(`active`)
        femaleOption.classList.add(`active`)
    }

    console.log(genderInput.value)
}

maleOption.addEventListener(`click`, () => {
    genderChange(`male`)
})

femaleOption.addEventListener(`click`, () => {
    genderChange(`female`)
})

function calculateBmi() {
    const bmi = Math.round( 10000 * weightinput.value / (heightinput.value * heightinput.value)) ;

    const gender = genderInput.value

    if ( gender === `male`) {
        if(bmi < 20) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu kurang!`
        } else if(bmi > 20 && bmi <= 25.9) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu idela`
        } else if(bmi > 26 && bmi <= 30.9) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu lebih!`
        }
    } else {
        if(bmi < 18.5) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu kurang!`
        } else if(bmi > 18.5 && bmi <= 24.9) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu idela`
        } else if(bmi > 25 && bmi <= 29.9) {
            result.innerHTML = `BMI Kamu ${bmi}, berat badan kamu lebih!`
        }
    }
}

submitBtn.addEventListener(`click`, (Event) => {
    Event.preventDefault()

    if (!genderInput.value || !heightinput.value || !weightinput.value) {
        alert(`Isi semua data terlebih dahulu`)

        return
    }
    
    calculateBmi()
})