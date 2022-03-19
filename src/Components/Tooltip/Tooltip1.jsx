const Tooltip1 = () => {
    return (
        // <li class="relative inline-flex items-center justify-between w-full space-x-3">
        //     <span class="text-magnesium text-opacity-90 text-base"> Tool Tip</span>
            <div class="group inline ml-auto cursor-pointer">
                <span class="text-magnesium">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" viewBox="0 0 24 24" fill="none" class="group-hover:text-magnesium w-4 h-4 transition duration-150">
                        <path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <div class="p-5 group-hover:visible text-magnesium bg-nero backdrop-filter backdrop-blur firefox:bg-opacity-100 bg-opacity-60 absolute top-0 left-0 z-10 invisible w-full max-w-xs px-4 py-2 space-y-1 text-sm rounded-md shadow-2xl absolute -left-100" role="tooltip" aria-hidden="true">
                    <img src="https://github.com/mdnmnahmed/personal-resourses/blob/master/projects-design-layouts/mobile-first-design_layout.png?raw=true" />
                    <p>You will get Free Updates that contains bug fixes and new features for the mentioned time depending on the license you bought. After that, if you need our latests Updates you have to purchase the Product again. If you not, you can continue using our products for lifetime.</p>
                </div>
            </div>
        // </li>

    )
}

export default Toooltip1;