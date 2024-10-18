<template>
    <div>
              <div class="relative dropdown ltr:mr-4 rtl:ml-4">
                <button
                  type="button"
                  class="flex items-center px-4 py-5 dropdown-toggle"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <img
                    class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                    src="/assets/images/user/img-02.jpg"
                    alt="Header Avatar"
                  />
                  <span class="hidden fw-medium xl:block dark:text-gray-50"
                    >Shawn L.</span
                  >
                </button>
                <ul
                  class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                  id="profile/log"
                  aria-labelledby="navNotifications"
                >
                  <li
                    class="p-2 dropdown-item group/dropdown dark:text-gray-300"
                  >
                    <a
                      class="text-15 font-medium text-gray-800 group-hover/dropdown:text-violet-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                      href="manage-jobs.html"
                      >Manage Jobs</a
                    >
                  </li>
                  <li
                    class="p-2 dropdown-item group/dropdown dark:text-gray-300"
                  >
                    <a
                      class="text-15 font-medium text-gray-800 group-hover/dropdown:text-violet-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                      href="bookmark-jobs.html"
                      >Bookmarks Jobs</a
                    >
                  </li>
                  <li
                    class="p-2 dropdown-item group/dropdown dark:text-gray-300"
                  >
                    <a
                      class="text-15 font-medium text-gray-800 group-hover/dropdown:text-violet-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                      href="profile.html"
                      >My Profile</a
                    >
                  </li>
                  <li
                    class="p-2 dropdown-item group/dropdown dark:text-gray-300"
                  >
                    <a
                      class="text-15 font-medium text-gray-800 group-hover/dropdown:text-violet-500  group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50"
                      href="sign-out.html"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </div>
</template>