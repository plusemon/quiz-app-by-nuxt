<script setup>
import quizList from './../quizList'

const quiz = ref(quizList[0])
const showResult = ref(false)



const correctAnswares = () => {
    return quiz.value.questions.filter(question => {
        return isCorrectAns(question)
    }).length
}
const answared = () => {
    return quiz.value.questions.filter(question => {
        return question.choosen_ans.length > 0
    }).length
}

function isCorrectAns(question) {
    return question.correct_ans.every(option => question.choosen_ans.includes(option))
}


const totalScore = () => {
    return correctAnswares() / quiz.value.questions.length * 100
}

</script>

<template>
    <section>
        <div class="card mb-3 text-center">
            <div class="card-body">
                <h6 class="text-center fw-bold">Topic: {{ quiz.title }}</h6>
                <hr>
                <h1 :class="[totalScore() ? 'text-success':'text-danger']">{{ totalScore() ? 'Congratulations':'Opps' }}</h1>
                <h3 class="text-primary fw-bold">Your Score: {{ totalScore() }}</h3>
                <hr>
                <div class="d-flex justify-content-around">
                    <!-- <h6>Total Answared: {{ answared() }} /{{ quiz.questions.length }}</h6> -->
                    <h6>Correct Answar: {{ correctAnswares() }} /{{ quiz.questions.length }}</h6>
                </div>
            </div>
        </div>



        <div v-if="showResult" class="card">
            <div class="card-body">
                <h3 class="bg-primary border-bottom card-title mb-4 py-3 rounded text-center text-white">Detailed Quiz Result</h3>
                <div v-if="showResult" class="card mb-2"
                    :class="[isCorrectAns(question) ? 'bg-success bg-opacity-25':'bg-danger bg-opacity-10']"
                    v-for="(question, index) in quiz.questions">
                    <div class="card-body">
                        <p class="fw-bold">{{ index+1 }}. {{ question.title }}</p>
                        <div class="d-flex flex-column gap-3 options">
                            <span class="border p-2 option rounded" :class="
                            {
                                'green-border'          : question.correct_ans.includes(index),
                                'bg-success text-white' : question.correct_ans.includes(index) && question.choosen_ans.includes(index),
                                'bg-danger text-white' : !question.correct_ans.includes(index) && question.choosen_ans.includes(index),
                            }" v-for="(option,index) in question.options"> {{ option }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="text-center">
            <button class="btn btn-outline-dark" v-if="!showResult" @click="showResult = true" >Show Detailed Result</button>
        </div>


    </section>
</template>

<style scoped>
.green-border {
    border: 2px solid green !important;
}
</style>