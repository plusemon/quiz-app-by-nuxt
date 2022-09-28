<script setup>
import quizList from './../../quizList'
const quiz = ref(quizList[0])

onBeforeMount(() => {
    quiz.value.questions = quiz.value.questions.map(question => {
        question.choosen_ans = []
        return question
    })
})

const activeQuestionIndex = ref(0)
const activeQuestionNo = computed(() => activeQuestionIndex.value + 1)
const activeQuestion = computed(() => quiz.value.questions[activeQuestionIndex.value])
const isLastQuestion = computed(() => activeQuestionNo.value == quiz.value.questions.length)


function nextQuestion() {
    if (quiz.value.questions.length > activeQuestionNo.value) {
        activeQuestionIndex.value += 1
    }
}

function jumpQuestion(index) {
    activeQuestionIndex.value = index
}

function toggleChoosenAns(opt) {
    if (activeQuestion.value.choosen_ans.includes(opt)) {
        activeQuestion.value.choosen_ans = activeQuestion.value.choosen_ans.filter(item => item != opt)
    } else {
        activeQuestion.value.choosen_ans.push(opt)
    }
}


</script>

<template>
    <section>
        <p class="text-center fw-bold">Topic: {{ quiz.title }}</p>
        <div class="d-flex m-3 gap-1">
            <span @click="jumpQuestion(index)" class="border p-2 px-3 qsn-no"
                :class="{ 'border-0 fw-bold' : index == activeQuestionIndex,'bg-warning': item.choosen_ans.length}"
                v-for="(item, index) in quiz.questions">{{
                index + 1
                }}</span>
        </div>

        <div class="card mb-2">
            <div class="card-body">
                <p class="fw-bold">{{ activeQuestionNo }}. {{ activeQuestion.title }}</p>
                <div class="d-flex flex-column gap-3 options">
                    <span @click="toggleChoosenAns(index)" class="border p-2 option"
                        :class="{'bg-black bg-opacity-10': activeQuestion.choosen_ans.includes(index)}"
                        v-for="(opt, index) in activeQuestion.options" :key="index"> {{ opt }}
                    </span>
                </div>
            </div>
        </div>
        <button v-if="!isLastQuestion" class="btn btn-success w-100 mt-3" @click="nextQuestion()">Continue</button>
        <NuxtLink v-else to="/result" class="btn btn-primary w-100">Finish</NuxtLink>
    </section>
</template>

<style scoped>
.options .option {
    cursor: pointer;
}

.options .option:hover {
    background-color: aliceblue;
}

.qsn-no {
    cursor: pointer;
    border-radius: 100px;
}
</style>
