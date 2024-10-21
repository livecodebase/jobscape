<template>
  <div
    id="navbar-collapse"
    class="items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block hidden"
  >
    <ul
      class="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row"
      id="navigation-menu"
    >
      <!-- <li class="relative dropdown">
        <button
          class="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]"
          id="home"
          data-bs-toggle="dropdown"
        >
          Home
          <i class="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1"></i>
        </button>

        <ul
          class="relative top-auto z-50 w-full py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3 lg:w-48 lg:shadow-lg dark:bg-neutral-800"
          aria-labelledby="home"
        >
          <li class="w-full">
            <a
              class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 hover:text-violet-500  uppercase group-data-[mode=dark]:text-gray-50"
              href="index.html"
              >Home 1</a
            >
          </li>
          <li class="w-full">
            <a
              class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 hover:text-violet-500  uppercase group-data-[mode=dark]:text-gray-50"
              href="index-2.html"
              >Home 2</a
            >
          </li>
          <li class="w-full">
            <a
              class="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 hover:text-violet-500  uppercase group-data-[mode=dark]:text-gray-50"
              href="index-3.html"
              >Home 3</a
            >
          </li>
        </ul>
      </li> -->
      <li class="py-5 lg:px-4">
        <a
          href="contact.html"
          class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50"
          >Home
        </a>
      </li>
      <li class="py-5 lg:px-4">
        <a
          href="contact.html"
          class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50"
          >Companies
        </a>
      </li>
      <!-- Add login button -->
      <li class="py-5 lg:px-4">
        <NuxtLink
          to="/login"
          class="py-2 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors duration-300"
        >
          Login
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
