<template>
  <header class="header">
    <div class="header__logo">
      <img src="/images/logo.png" alt="logo" />
      <nav class="header__menu" v-if="menu.length && screenWidth >= 763">
        <a :href="`#${item._id}`" v-for="item in menu" :key="item._id">
          {{ item[`navigate_${locale}`] }}</a
        >
        <a href="#service"> {{ $t("submitApplication") }}</a>
      </nav>
      <template v-if="screenWidth >= 763">
        <a-dropdown class="lang" :trigger="['click']" arrow>
          <a class="ant-dropdown-link" @click.prevent>
            {{ locale }}
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0" @click="setLocale('ru')"> ru </a-menu-item>
              <a-menu-item key="1" @click="setLocale('en')"> en </a-menu-item>
              <a-menu-item key="1" @click="setLocale('kz')"> kz </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
      <template v-else-if="menu?.length && screenWidth <= 762">
        <svg
          @click="showMenu = true"
          class="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7H21"
            stroke="#043B40"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 12H21"
            stroke="#043B40"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3 17H21"
            stroke="#043B40"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </template>
    </div>
    <div
      class="header__info"
      :style="`background-image: url('images/bg.png'); background-repeat: no-repeat; background-size: cover; background-position: center;`"
    >
      <h1>{{ header?.[`title_${locale}`] }}</h1>
      <h3>{{ header?.[`subtitle_${locale}`] }}</h3>
      <div class="btn">
        <a href="#service" class="btn-navigate">{{
          $t("submitApplication").toLocaleUpperCase()
        }}</a>
      </div>
    </div>
  </header>
  <Menu v-if="showMenu" v-model="showMenu" :menu="menu" />
</template>
<script setup lang="ts">
import { useContentStore } from "~/stores/contents";

const contentStore = useContentStore();

const { locale, setLocale } = useI18n();
const showMenu = ref(false);
const menu = computed(() => {
  if (contentStore.content.section) return contentStore.content.section;
  return [];
});
const screenWidth = ref(0);
const header = computed(() => {
  if (contentStore.content.header) return contentStore.content.header;
});
onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>
<style lang="scss" scoped>
.header {
  padding-top: 20px;
  width: 100%;
  &__menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
    @media (max-width: 1024px) {
    }
    a {
      text-decoration: none;
      font-weight: 400;
      color: #1c1c1c;
      font-size: 20px;
      line-height: 27px;
      width: fit-content;
    }
  }
  &__logo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
    img {
      @media (max-width: 762px) {
        width: 80px;
        height: 23px;
        margin-left: 16px;
      }
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 600px;
    margin-top: 32px;
    width: 100%;
    h3 {
      font-weight: 400;
      font-size: 30px;
      line-height: 40px;
      text-align: center;
      width: 800px;
      margin-bottom: 82px;
      @media (max-width: 1024px) {
        font-weight: 500;
        font-size: 24px;
      }
      @media (max-width: 762px) {
        font-size: 12px;
        text-align: center;
        line-height: 21.5px;
        width: 85%;
      }
    }
    h1 {
      font-weight: 700;
      font-size: 60px;
      line-height: 72.61px;
      width: 855px;
      text-align: center;
      @media (max-width: 1024px) {
        font-size: 45px;
      }
      @media (max-width: 762px) {
        font-size: 24px;
        width: 90%;
        line-height: 32.26px;
      }
    }
  }
}
.btn {
  display: flex;
  @media (max-width: 762px) {
    align-items: center;
    justify-content: center;
  }
}
.menu {
  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  padding: 26px;
}
.lang {
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 5px 5px 0px #080f340a;
}
</style>
