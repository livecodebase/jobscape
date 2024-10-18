<template>
    <section class="py-20 bg-gray-50 dark:bg-neutral-700">
                        <div class="container mx-auto">
                            <div class="grid grid-cols-1 gap-5">
                                <div class="mb-5 text-center">
                                    <h3 class="mb-3 text-3xl text-gray-900 dark:text-gray-50">New & Random Jobs</h3>
                                    <p class="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">Post a job to tell us about your project. We'll quickly match you with the right <br> freelancers.</p>
                                </div>
                            </div>
                            <div class="nav-tabs chart-tabpill">
                                <div class="grid grid-cols-12">
                                    <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                                        <div class="p-1.5 bg-white dark:bg-neutral-900 shadow-lg shadow-gray-100/30 rounded-lg dark:shadow-neutral-700">
                                            <ul class="items-center text-sm font-medium text-center text-gray-700 nav md:flex">
                                                <li class="w-full">
                                                    <a href="javascript:void(0);" data-tw-toggle="tab" data-tw-target="recent-job" class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50 active" aria-current="page">Recent Jobs</a>
                                                </li>
                                                <li class="w-full">
                                                    <a href="javascript:void(0);" data-tw-toggle="tab" data-tw-target="featured-jobs-tab" class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Featured Jobs</a>
                                                </li>
                                                <li class="w-full">
                                                    <a href="javascript:void(0);" data-tw-toggle="tab" data-tw-target="freelancer-tab" class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Freelancer</a>
                                                </li>
                                                 <li class="w-full">
                                                    <a href="javascript:void(0);" data-tw-toggle="tab" data-tw-target="part-time-tab" class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Part Time</a>
                                                </li>
                                                 <li class="w-full">
                                                    <a href="javascript:void(0);" data-tw-toggle="tab" data-tw-target="full-time-tab" class="inline-block w-full py-[12px] px-[18px] dark:text-gray-50">Full Time</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-content">
                                    <div class="block w-full tab-pane" id="recent-job">
                                        <div class="pt-8 ">
                                            <div class="space-y-8">
                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs hover:border-violet-500      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600 ">
                                                        <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                            <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                        </div>
                                                        <div class="p-4">
                                                            <div class="grid items-center grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="mb-4 text-center mb-md-0">
                                                                        <a href="company-details.html"><img src="/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 mb-md-0">
                                                                        <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Web Developer</a>
                                                                        </h5>
                                                                        <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web Technology pvt.Ltd</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 lg:flex">
                                                                        <div class="flex-shrink-0">
                                                                            <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                        </div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge Lane ssRichardson</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div>
                                                                        <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="flex flex-wrap gap-1.5">
                                                                        <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                        <span class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                        <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                            <div class="grid grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-4">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 1
                                                                            - 2 years</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-6">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                            languages only differ in their grammar. </p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-3 lg:col-span-2">
                                                                    <div class="text-start text-md-end dark:text-gray-50">
                                                                        <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group hover:border-violet-500      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-02.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Pixel Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>800-1800/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                    <span class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                                                                    <span class="badge bg-yellow-500/20 text-yellow-500 text-13 px-2 py-0.5 font-medium rounded">Urgent</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 0
                                                                        - 1 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group hover:border-violet-500      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-03.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Digital Marketing Manager</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Phoenix, Arizona</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                    <span class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs hover:border-violet-500      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-04.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Product Director</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Creative Agency</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Escondido, California</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                    <span class="badge bg-yellow-500/20 text-yellow-500 text-13 px-2 py-0.5 font-medium rounded">Urgent</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden w-full tab-pane" id="featured-jobs-tab">
                                        <div class="pt-8 ">
                                            <div class="space-y-8">
                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Web Developer</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge Lane Richardson</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-2">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                    <span class="badge bg-sky-500/20 text-sky-500 text-13 px-2 py-0.5 font-medium rounded">Private</span>
                                                                    <span class="badge bg-yellow-500/20 text-yellow-500 text-13 px-2 py-0.5 font-medium rounded">Urgent</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 0
                                                                        - 1 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                        <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                            <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                        </div>
                                                        <div class="p-4">
                                                            <div class="grid items-center grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="mb-4 text-center mb-md-0">
                                                                        <a href="company-details.html"><img src="/assets/images/featured-job/img-02.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 mb-md-0">
                                                                        <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a>
                                                                        </h5>
                                                                        <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Pixel Technology pvt.Ltd</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 lg:flex">
                                                                        <div class="flex-shrink-0">
                                                                            <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                        </div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div>
                                                                        <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>800-1800/m</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="flex flex-wrap gap-1.5">
                                                                        <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                        <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                            <div class="grid grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-4">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 1
                                                                            - 2 years</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-6">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                            languages only differ in their grammar. </p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-3 lg:col-span-2">
                                                                    <div class="text-start text-md-end dark:text-gray-50">
                                                                        <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-03.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Digital Marketing Manager</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Phoenix, Arizona</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-04.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Product Director</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Creative Agency</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Escondido, California</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-300">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden w-full tab-pane" id="freelancer-tab">
                                        <div class="pt-8 ">
                                            <div class="space-y-8">
                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                        <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                            <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                        </div>
                                                        <div class="p-4">
                                                            <div class="grid items-center grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="mb-4 text-center mb-md-0">
                                                                        <a href="company-details.html"><img src="/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 mb-md-0">
                                                                        <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Web Developer</a>
                                                                        </h5>
                                                                        <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web Technology pvt.Ltd</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 lg:flex">
                                                                        <div class="flex-shrink-0">
                                                                            <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                        </div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge Lane Richardson</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div>
                                                                        <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="flex flex-wrap gap-1.5">
                                                                        <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                        <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                            <div class="grid grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-4">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 1
                                                                            - 2 years</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-6">
                                                                    <div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                            languages only differ in their grammar. </p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-3 lg:col-span-2">
                                                                    <div class="text-start text-md-end dark:text-gray-50">
                                                                        <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-02.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Pixel Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>800-1800/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 2
                                                                        - 3 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-03.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Digital Marketing Manager</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Phoenix, Arizona</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-2">
                                                                    <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>                           

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-04.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Product Director</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Creative Agency</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Escondido, California</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-violet-500/20 text-violet-500 text-13 px-2 py-0.5 font-medium rounded">Freelancer</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden w-full tab-pane" id="part-time-tab">
                                        <div class="pt-8 ">
                                            <div class="space-y-8">
                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Web Developer</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge Lane Richardson</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-2">
                                                                    <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>

                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 1
                                                                        - 2 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                        <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                            <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                        </div>
                                                        <div class="p-4">
                                                            <div class="grid items-center grid-cols-12">
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="mb-4 text-center mb-md-0">
                                                                        <a href="company-details.html"><img src="/assets/images/featured-job/img-02.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 mb-md-0">
                                                                        <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a>
                                                                        </h5>
                                                                        <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Pixel Technology pvt.Ltd</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-3">
                                                                    <div class="mb-2 lg:flex">
                                                                        <div class="flex-shrink-0">
                                                                            <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                        </div>
                                                                        <p class="mb-0 text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div>
                                                                        <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>800-1800/m</p>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                                <div class="col-span-12 lg:col-span-2">
                                                                    <div class="flex flex-wrap gap-1.5">
                                                                        <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                    </div>
                                                                </div>
                                                                <!--end col-->
                                                            </div>
                                                            <!--end row-->
                                                        </div>
                                                           
                                                        <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 0
                                                                        - 1 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-50"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                 <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-03.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Digital Marketing Manager</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Phoenix, Arizona</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-04.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Product Director</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Creative Agency</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Escondido, California</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-red-500/20 text-red-500 text-13 px-2 py-0.5 font-medium rounded">Part Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                       
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 2 - 3 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>

                                    <div class="hidden w-full tab-pane" id="full-time-tab">
                                        <div class="pt-8 ">
                                            <div class="space-y-8">
                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Web Developer</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Web Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Oakridge Lane Richardson</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-2">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>

                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 1
                                                                        - 2 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                               <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500      p-[6px] text-center">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-02.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Business Associate</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Pixel Technology pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Dodge City, Louisiana</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>800-1800/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                           
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-4">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 0
                                                                        - 1 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Notes :</span>
                                                                        languages only differ in their grammar. </p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-3 lg:col-span-2">
                                                                <div class="text-start text-md-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-03.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Digital Marketing Manager</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Phoenix, Arizona</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1500-2400/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 4+ years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                </div>

                                                <div class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs      hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
                                                    <div class="w-48 absolute -top-[5px] -left-20 -rotate-45 bg-violet-500/20 /20 /20 /20 /20 /20 group-hover/jobs:bg-violet-500      transition-all duration-500 ease-in-out p-[6px] text-center dark:bg-violet-500/20">
                                                        <a href="javascript:void(0)" class="text-2xl text-white align-middle"><i class="mdi mdi-star"></i></a>
                                                    </div>
                                                    <div class="p-4">
                                                        <div class="grid items-center grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="mb-4 text-center mb-md-0">
                                                                    <a href="company-details.html"><img src="/assets/images/featured-job/img-04.png" alt="" class="mx-auto img-fluid rounded-3"></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 mb-md-0">
                                                                    <h5 class="mb-1 fs-18"><a href="job-details.html" class="text-gray-900 dark:text-gray-50">Product Director</a>
                                                                    </h5>
                                                                    <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">Creative Agency</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-3">
                                                                <div class="mb-2 lg:flex">
                                                                    <div class="flex-shrink-0">
                                                                        <i class="mr-1 text-violet-500      mdi mdi-map-marker"></i>
                                                                    </div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300">Escondido, California</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div>
                                                                    <p class="mb-2 text-gray-500 dark:text-gray-300"><span class="text-violet-500     ">$</span>1000-1200/m</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            <div class="col-span-12 lg:col-span-2">
                                                                <div class="flex flex-wrap gap-1.5">
                                                                    <span class="badge bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">Full Time</span>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                       
                                                    <div class="p-3 bg-gray-50 dark:bg-neutral-700">
                                                        <div class="grid grid-cols-12">
                                                            <div class="col-span-12 lg:col-span-6">
                                                                <div>
                                                                    <p class="mb-0 text-gray-500 dark:text-gray-300"><span class="text-gray-900 dark:text-gray-50">Experience :</span> 2 - 3 years</p>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                            
                                                            <div class="col-span-12 lg:col-span-5">
                                                                <div class="text-start lg:text-end dark:text-gray-50">
                                                                    <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
                                                                </div>
                                                            </div>
                                                            <!--end col-->
                                                        </div>
                                                        <!--end row-->
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8">
                                <div class="grid grid-cols-1">
                                    <div class="text-center">
                                        <a href="job-categories.html" class="text-white border-transparent bg-violet-500      btn focus:ring focus:ring-custom-500/20">View More  <i class="uil uil-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
</template>