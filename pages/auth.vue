<template>
    <div>
        <a-form
            :model="formState"
            name="basic"
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            style="margin-top: 20px"
            @finish="onFinish"
            @finishFailed="onFinishFailed"
        >
        <a-typography-title :level="5"
          >Админ
        </a-typography-title>
            <a-form-item
                label="Username"
                name="username"
                :rules="[
                    { required: true, message: 'Please input your username!' },
                ]"
            >
                <a-input v-model:value="formState.username" />
            </a-form-item>

            <a-form-item
                label="Password"
                name="password"
                :rules="[
                    { required: true, message: 'Please input your password!' },
                ]"
            >
                <a-input-password v-model:value="formState.password" />
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive, watch } from "vue";
import { message } from "ant-design-vue";
import { useRouter } from 'vue-router'

interface FormState {
    username: string;
    password: string;
}
const authStore = useAuthStore();
const router = useRouter();
const formState = reactive<FormState>({
    username: "",
    password: "",
});

const onFinish = async (values: any) => {
    try {
        const response = await $fetch("/api/auth", {
            method: "post",
            body: values,
        });

            if (response && typeof response !== 'boolean') {
                localStorage.setItem('auth-token', JSON.stringify(`Bearer ${response}`))
                router.push({
                    name: 'admin'
                })
            } else {
                message.error('Не верные данные');
            }
    
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        message.error('Произошла ошибка при обработке запроса');
    }
};

watch(
    () => authStore.isAuth,
    () => {
        if (authStore.isAuth) router.push("/admin");
    }
);

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};
</script>

<style scoped>
div {
  margin: 40px auto;
  width: 300px;
  height: 50px;
}
</style>