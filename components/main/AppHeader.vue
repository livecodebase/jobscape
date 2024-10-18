<script setup>
import AppLogo from '@/assets/img/logo.svg'
import HeaderNotifications from '@/components/main/HeaderNotifications.vue'
import AppNavigation from '../AppHeader/AppNavigation.vue';

</script>

<template>
  <header>
    <nav
      class="navbar  px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
      id="navbar"
    >
      <div class="mx-auto container-fluid">
        <div class="flex flex-wrap items-center justify-between mx-auto">
          <a href="index.html" class="flex items-center">
            <img
              :src="AppLogo"
              alt=""
              class="logo-dark h-[22px]"
            />
          </a>
  
          <div class="flex items-center lg:order-2">
            <!-- <HeaderNotifications /> -->
            
          </div>

          <AppNavigation />
        </div>
      </div>
    </nav>
  </header>
</template>
