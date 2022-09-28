<script setup>
import quizList from './../quizList'
</script>

<template>
    <section>
        <div class="row">
            <div class="col-md-6" v-for="(quiz, index) in quizList" :key="index">
                <div class="card">
                    <div class="card-body">
                        <p>Quiz {{ quiz.id }}</p>
                        <p>Topic: {{ quiz.title }}</p>
                        <p>Questions: {{ quiz.questions.length }}</p>
                        <NuxtLink class="btn btn-primary w-100" to="/quiz/1">Start Quiz</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>