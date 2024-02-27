<template>
    <div class="service" id="service">
        <img src="/images/Logo.png" alt="logo">
        <h2>{{  $t('submitApplicationTitle')}}</h2>
        <div>
            <input type="text" style="margin-top: 32px;" :mask=" '(###)-###-####'" :placeholder="$t('name') ">
        </div>
        <input type="text" style="margin-top: 8px;" :placeholder="$t('phone') ">
        <input type="number" style="margin-top: 8px;" :placeholder="$t('subInfo') ">
        <div class="btn">
            <button class="btn-navigate">{{  $t('submitApplication')}}</button>
            <div class="icon">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 17.0832H6.33341C3.83341 17.0832 2.16675 15.8332 2.16675 12.9165V7.08317C2.16675 4.1665 3.83341 2.9165 6.33341 2.9165H14.6667C17.1667 2.9165 18.8334 4.1665 18.8334 7.08317V12.9165C18.8334 15.8332 17.1667 17.0832 14.6667 17.0832Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6666 7.5L12.0582 9.58333C11.1999 10.2667 9.79158 10.2667 8.93325 9.58333L6.33325 7.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
    .service {
        background-color: #F6F6F6;
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
            line-height: 48px;
            letter-spacing: 0em;
            text-align: center;
            width: 416px;
            @media (max-width: 762px) { 
                width: 343px;
                font-size: 24px;
            }

        }
        input {
            width: 360px;
            height:48px;
            padding: 14px, 24px, 14px, 24px;
            border-radius: 24px;
            border: 1px;
            gap: 10px;
            border: 1px solid #1C1C1C;
            &::placeholder { 
                color: #AAAAAA; 
                font-size: 16px;
                font-weight: 500;
                padding-left: 26px;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 762px) { 
                width: 300px;
            }
        }
    }

    .btn {
        margin-top: 32px;
        display: flex;
        margin-bottom: 72px;
        button {
            cursor: pointer;
            width: 100%;
        }
    }
</style>