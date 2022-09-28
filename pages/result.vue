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

</script>

<template>
    <section>
        <div class="card mb-3 text-center">
            <div class="card-body">
                <h6 class="text-center fw-bold">Topic: {{ quiz.title }}</h6>
                <hr>
                <h5>Answared: {{ answared() }} /{{ quiz.questions.length }}</h5>
                <h5>Correct Answar: {{ correctAnswares() }} /{{ quiz.questions.length }}</h5>
                <h3>Your Score: {{ correctAnswares() / quiz.questions.length * 100 }}</h3>
            </div>
        </div>

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

        <div class="text-center">
            <button class="btn btn-outline-dark" @click="showResult = !showResult">{{ showResult ? 'Hide':'View' }} Result</button>
        </div>


    </section>
</template>

<style scoped>
.green-border {
    border: 2px solid green !important;
}
</style>