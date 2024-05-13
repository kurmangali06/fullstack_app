<template>
    <div class="service" id="service">
        <img src="/images/logo.png" alt="logo" />
        <h2>{{ $t("submitApplicationTitle") }}</h2>
        <div class="service__input">
            <input v-model="state.name" type="text" :placeholder="$t('name')" />
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.99992 9.99984C12.3011 9.99984 14.1666 8.13436 14.1666 5.83317C14.1666 3.53198 12.3011 1.6665 9.99992 1.6665C7.69873 1.6665 5.83325 3.53198 5.83325 5.83317C5.83325 8.13436 7.69873 9.99984 9.99992 9.99984Z"
                    stroke="#1C1C1C"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
                    stroke="#1C1C1C"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div class="service__input">
            <input
                v-model="state.phone"
                v-maska="'8-(###)-###-##-##'"
                :placeholder="$t('phone')"
            />
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.3084 14.2748C17.3084 14.5748 17.2417 14.8832 17.1001 15.1832C16.9584 15.4832 16.7751 15.7665 16.5334 16.0332C16.1251 16.4832 15.6751 16.8082 15.1667 17.0165C14.6667 17.2248 14.1251 17.3332 13.5417 17.3332C12.6917 17.3332 11.7834 17.1332 10.8251 16.7248C9.86675 16.3165 8.90842 15.7665 7.95842 15.0748C7.00008 14.3748 6.09175 13.5998 5.22508 12.7415C4.36675 11.8748 3.59175 10.9665 2.90008 10.0165C2.21675 9.0665 1.66675 8.1165 1.26675 7.17484C0.866748 6.22484 0.666748 5.3165 0.666748 4.44984C0.666748 3.88317 0.766748 3.3415 0.966748 2.8415C1.16675 2.33317 1.48341 1.8665 1.92508 1.44984C2.45841 0.924837 3.04175 0.666504 3.65841 0.666504C3.89175 0.666504 4.12508 0.716504 4.33341 0.816504C4.55008 0.916504 4.74175 1.0665 4.89175 1.28317L6.82508 4.00817C6.97508 4.2165 7.08341 4.40817 7.15841 4.5915C7.23341 4.7665 7.27508 4.9415 7.27508 5.09984C7.27508 5.29984 7.21675 5.49984 7.10008 5.6915C6.99175 5.88317 6.83341 6.08317 6.63341 6.28317L6.00008 6.9415C5.90841 7.03317 5.86675 7.1415 5.86675 7.27484C5.86675 7.3415 5.87508 7.39984 5.89175 7.4665C5.91675 7.53317 5.94175 7.58317 5.95842 7.63317C6.10842 7.90817 6.36675 8.2665 6.73341 8.69984C7.10841 9.13317 7.50841 9.57484 7.94175 10.0165C8.39175 10.4582 8.82508 10.8665 9.26675 11.2415C9.70008 11.6082 10.0584 11.8582 10.3417 12.0082C10.3834 12.0248 10.4334 12.0498 10.4917 12.0748C10.5584 12.0998 10.6251 12.1082 10.7001 12.1082C10.8417 12.1082 10.9501 12.0582 11.0417 11.9665L11.6751 11.3415C11.8834 11.1332 12.0834 10.9748 12.2751 10.8748C12.4667 10.7582 12.6584 10.6998 12.8667 10.6998C13.0251 10.6998 13.1917 10.7332 13.3751 10.8082C13.5584 10.8832 13.7501 10.9915 13.9584 11.1332L16.7167 13.0915C16.9334 13.2415 17.0834 13.4165 17.1751 13.6248C17.2584 13.8332 17.3084 14.0415 17.3084 14.2748Z"
                    stroke="#1C1C1C"
                    stroke-width="1.25"
                    stroke-miterlimit="10"
                />
            </svg>
        </div>
        <div class="service__input">
            <input
                v-model="state.description"
                type="text"
                :placeholder="$t('subInfo')"
            />
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.08341 15.8332H6.66675C3.33341 15.8332 1.66675 14.9998 1.66675 10.8332V6.6665C1.66675 3.33317 3.33341 1.6665 6.66675 1.6665H13.3334C16.6667 1.6665 18.3334 3.33317 18.3334 6.6665V10.8332C18.3334 14.1665 16.6667 15.8332 13.3334 15.8332H12.9167C12.6584 15.8332 12.4084 15.9582 12.2501 16.1665L11.0001 17.8332C10.4501 18.5665 9.55008 18.5665 9.00008 17.8332L7.75008 16.1665C7.61675 15.9832 7.30841 15.8332 7.08341 15.8332Z"
                    stroke="#1C1C1C"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div class="btn">
            <button @click="sendAplication" class="btn-navigate">
                {{ $t("submitApplication") }}
            </button>
            <p>{{ $t("conditation")  }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const state = reactive({
    name: "",
    phone: "",
    description: "",
});

const sendAplication = () => {
    console.log(state);
};
</script>
<style lang="scss" scoped>
.service {
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1024px) {
        max-width: 1024px;
    }
    img {
        width: 180px;
        margin-top: 72px;
        height: 54px;
    }
    h2 {
        font-family: Gilroy;
        font-size: 40px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: center;
        width: 416px;
        color: #043B40;
        @media (max-width: 762px) {
            width: 343px;
            font-size: 24px;
        }
    }
    &__input {
        position: relative;
        margin-top: 32px;
        input {
            width: 360px;
            height: 48px;
            padding-left: 30px;
            border-radius: 24px;
            border: 1px;
            gap: 10px;
            border: 1px solid #1c1c1c;
            &::placeholder {
                color: #aaaaaa;
                font-size: 16px;
                font-weight: 500;
                padding-left: 30px;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 762px) {
                width: 300px;
            }
        }
        svg {
            position: absolute;
            top: 15px;
            left: 10px;
        }
    }
}

.btn {
    margin-top: 32px;
    margin-bottom: 72px;
    width: 213px;
    text-align: center;
    button {
        cursor: pointer;
        width: 100%;
    }
    p {
        margin-top: 12px;
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
    }
}
</style>