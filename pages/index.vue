<script setup>
import quizList from './../quizList'

const router = useRouter()

function startQuiz() {
    router.push('/quiz/1')
}

</script>

<template>
    <section>
        <div class="row">
            <div class="col-md-6" v-for="(quiz, index) in quizList" :key="index">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <th>Quiz</th>
                                <th>Topic</th>
                                <th>Questions</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Quiz {{ quiz.id }}</td>
                                    <td>{{ quiz.title }}</td>
                                    <td>{{ quiz.questions.length }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="text" class="form-control mb-3" v-model="quiz.username"
                            placeholder="enter your name to continue">
                        <button :disabled="!quiz.username.length" @click="startQuiz()" class="btn btn-primary w-100" to="">Start Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>