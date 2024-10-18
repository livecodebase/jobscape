<script setup>
</script>
<template>
  <div>
    <div class="relative dropdown">
      <div class="relative">
        <button
          type="button"
          class="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-300"
          aria-expanded="false"
          data-dropdown-toggle="notification"
        >
          <i class="text-2xl mdi mdi-bell"></i>
        </button>
        <span
          class="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-3 ring-2 ring-white dark:ring-neutral-800"
          >3</span
        >
      </div>

      <div
        class="absolute right-0 top-auto left-auto z-50 hidden list-none bg-white rounded shadow dropdown-menu w-72 dark:bg-neutral-800"
        id="notification"
      >
        <div
          class="border rounded border-gray-50 dark:border-neutral-600"
          aria-labelledby="notification"
        >
          <div class="grid grid-cols-1">
            <div class="p-4 bg-gray-50 dark:bg-neutral-700">
              <h6 class="mb-1 text-gray-800 dark:text-gray-50">Notification</h6>
              <p class="mb-0 text-gray-500 text-13 dark:text-gray-300">
                You have 4 unread Notification
              </p>
            </div>
          </div>
          <div class="h-60" data-simplebar="init">
            <div class="simplebar-wrapper" style="margin: 0px">
              <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
              </div>
              <div class="simplebar-mask">
                <div class="simplebar-offset" style="right: 0px; bottom: 0px">
                  <div
                    class="simplebar-content-wrapper"
                    style="height: auto; overflow: hidden"
                  >
                    <div class="simplebar-content" style="padding: 0px">
                      <div>
                        <a href="#!">
                          <div
                            class="flex p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50"
                          >
                            <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                              <div
                                class="h-10 w-10 bg-violet-500/20 rounded-full text-center leading-[2.8]"
                              >
                                <i
                                  class="text-lg text-violet-500 uil uil-user-check"
                                ></i>
                              </div>
                            </div>
                            <div class="flex-grow">
                              <h6
                                class="mb-1 text-sm text-gray-700 dark:text-gray-300"
                              >
                                22 verified registrations
                              </h6>
                              <div
                                class="text-gray-600 text-13 dark:text-gray-300"
                              >
                                <p class="mb-0">
                                  <i
                                    class="mdi mdi-clock-outline dark:text-gray-300"
                                  ></i>
                                  <span>3 hour ago</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href="#!">
                          <div
                            class="flex items-center p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50"
                          >
                            <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                              <img
                                src="/assets/images/user/img-01.jpg"
                                class="w-10 h-10 rounded-full"
                                alt="user-pic"
                              />
                            </div>
                            <div class="flex-grow">
                              <h6
                                class="mb-1 text-sm text-gray-700 dark:text-gray-300"
                              >
                                Kevin Stewart
                              </h6>
                              <div
                                class="text-gray-600 text-13 dark:text-gray-300"
                              >
                                <p class="mb-0">
                                  <i
                                    class="mdi mdi-clock-outline dark:text-gray-300"
                                  ></i>
                                  <span>1 hour ago</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href="#!">
                          <div
                            class="flex items-center p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50"
                          >
                            <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                              <img
                                src="/assets/images/featured-job/img-04.png"
                                class="w-10 h-10 rounded-full"
                                alt="user-pic"
                              />
                            </div>
                            <div class="flex-grow">
                              <h6
                                class="mb-1 text-sm text-gray-700 dark:text-gray-300"
                              >
                                Applications has been approved
                              </h6>
                              <div
                                class="text-gray-600 text-13 dark:text-gray-300"
                              >
                                <p class="mb-0">
                                  <i
                                    class="mdi mdi-clock-outline dark:text-gray-300"
                                  ></i>
                                  <span>45 min ago</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href="#!">
                          <div
                            class="flex items-center p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50"
                          >
                            <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                              <img
                                src="/assets/images/user/img-02.jpg"
                                class="w-10 h-10 rounded-full"
                                alt="user-pic"
                              />
                            </div>
                            <div class="flex-grow">
                              <h6
                                class="mb-1 text-sm text-gray-700 dark:text-gray-300"
                              >
                                Salena Layfield
                              </h6>
                              <div
                                class="text-gray-600 text-13 dark:text-gray-300"
                              >
                                <p class="mb-0">
                                  <i
                                    class="mdi mdi-clock-outline dark:text-gray-300"
                                  ></i>
                                  <span>15 min ago</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>

                        <a href="#!">
                          <div
                            class="flex items-center p-4 hover:bg-gray-50/30 dark:hover:bg-neutral-600/50"
                          >
                            <div class="flex-shrink-0 ltr:mr-3 rtl:ml-3">
                              <img
                                src="/assets/images/featured-job/img-01.png"
                                class="w-10 h-10 rounded-full"
                                alt="user-pic"
                              />
                            </div>
                            <div class="flex-grow">
                              <h6
                                class="mb-1 text-sm text-gray-700 dark:text-gray-300"
                              >
                                Creative Agency
                              </h6>
                              <div
                                class="text-gray-600 text-13 dark:text-gray-300"
                              >
                                <p class="mb-0">
                                  <i
                                    class="mdi mdi-clock-outline dark:text-gray-300"
                                  ></i>
                                  <span>15 min ago</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="simplebar-placeholder"
                style="width: 0px; height: 0px"
              ></div>
            </div>
            <div
              class="simplebar-track simplebar-horizontal"
              style="visibility: hidden"
            >
              <div
                class="simplebar-scrollbar"
                style="transform: translate3d(0px, 0px, 0px); display: none"
              ></div>
            </div>
            <div
              class="simplebar-track simplebar-vertical"
              style="visibility: hidden"
            >
              <div
                class="simplebar-scrollbar"
                style="transform: translate3d(0px, 0px, 0px); display: none"
              ></div>
            </div>
          </div>
          <div
            class="grid p-1 border-t border-gray-50 dark:border-zinc-600 justify-items-center bg-gray-50 dark:bg-neutral-700"
          >
            <a
              class="border-0 text-violet-500 btn dark:text-gray-50"
              href="javascript:void(0)"
            >
              <i class="mr-1 mdi mdi-arrow-right-circle"></i>
              <span>View More..</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
