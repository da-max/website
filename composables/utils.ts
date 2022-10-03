interface IBgIcon {
    class: string,
    name: string,
    size?: number,
    activeClass?: string,
    blur: number
}

export const useUtils = function () {
    const availableImages: string[] = [
        '../assets/images/bg-1.jpg',
        '../assets/images/bg-2.jpg',
        '../assets/images/bg-3.jpg',
        '../assets/images/bg-4.jpg',
        '../assets/images/bg-5.jpg',
        '../assets/images/bg-6.jpg',
        '../assets/images/bg-7.jpg'
    ]
    const fogImages: string[] = [
        '../assets/images/fog1.png',
        '../assets/images/fog2.png'
    ]

    const onMouseOver = (event: Event, overClass: string) => {
        (event.currentTarget as HTMLElement)
            .classList.add(overClass)
    }

    const onMouseLeave = (event: Event, overClass: string) => {
        (event.currentTarget as HTMLElement).classList.remove(overClass)
    }

    const bgIcons: IBgIcon[] = [
        {
            name: 'language-typescript',
            class: `top-[20vh] 
            <md:hidden
            left-[80vw]
            lg:left-[90vw] 
            transform rotate-25 
            animate-pulse-so-slow 
            drop-shadow-2xl duration-150`,
            size: 100,
            activeClass: 'animate-pulse-slow',
            blur: 2
        },
        {
            name: 'vuejs',
            class: `top-[50vh]
            left-[70vw]
            lg:left-[85vw]
            text-primary
            animate-bounce-so-slow`,
            size: 110,
            activeClass: 'animate-bounce-slow',
            blur: 1
        },
        {
            name: 'react',
            class: `top-[15vh] 
            left-[60vw]
            animate-spin-so-slow`,
            activeClass: '!animate-spin-very-slow',
            size: 90,
            blur: 2
        },
        {
            name: 'language-javascript',
            class: `top-[100vh]
            left-[50vw] 
            sm:left-[70vw]
            lg:left-[86vw] 
            transform rotate-25 drop-shadow-2xl`,
            blur: 4
        },
        {
            name: 'git',
            class: 'top-[30vh] left-[10vw] <md:hidden',
            size: 150,
            blur: 7
        },
        {
            name: 'language-css3',
            class: `top-[80vh]             
            left-[75vw]
            transform -rotate-10 text-secondary
            transition-colors duration-15000`,
            size: 50,
            activeClass: '!text-default',
            blur: 1
        },
        {
            name: 'language-html5',
            class: 'top-[66vh] left-[60vw] transform skew-y-12 <md:hidden',
            size: 70,
            blur: 2
        },
        {
            name: 'docker',
            class: `top-[110vh] 
            left-[60vw] 
            sm:left-[80vw]
            lg:left-[70vw]
            transform rotate-10
            text-primary <lg:hidden`,
            activeClass: 'animate-spin-slow',
            size: 110,
            blur: 4
        },
        {
            name: 'sass',
            class: `top-[110vh]
            left-[90vw]
            <lg:hidden`,
            blur: 4,
            size: 100
        },
        {
            name: 'language-php',
            class: 'top-[10vh] left-[25vw] <md:hidden blur-2',
            blur: 2,
            size: 70
        },
        {
            name: 'language-python',
            class: 'top-[64vh] left-[2vw] sm:left-[30vw] text-secondary',
            blur: 1,
            size: 100
        },
        {
            name: 'language-go',
            class: 'top-[110vh] left-[40vw] text-primary',
            blur: 3,
            size: 60
        },
        {
            name: 'gitlab',
            class: 'top-[70vh] left-[25vw] <lg:hidden',
            blur: 7,
            size: 100
        },
        {
            name: 'laravel',
            class: 'top-[20vh] left-[40vw] <md:hidden text-primary',
            blur: 2,
            size: 90
        },
        {
            name: 'nuxt',
            class: 'top-[80vh] left-[50vw]',
            blur: 1,
            size: 70
        },
        {
            name: 'fedora',
            class: 'top-[85vh] left-[40vw] blur-4 text-primary <md:hidden',
            blur: 4
        },
        {
            name: 'centos',
            class: 'top-[90vh] left-[20vw] blur-7 <lg:hidden',
            blur: 7,
            size: 170
        },
        {
            name: 'debian',
            class: 'top-[10vh] left-[80vw] blur-5 text-secondary <md:hidden',
            blur: 5,
            size: 90
        },
        {
            name: 'wordpress',
            class: 'top-[20vh] sm:top-[60vh] left-[6vw] blur-2 text-primary',
            blur: 2,
            size: 100
        }
    ]

    function getRandomIntInclusive (min: number, max: number): number {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function offsetTop (element: HTMLElement, acc = 0): number {
        if (element.offsetParent) {
            return offsetTop((element.offsetParent as HTMLElement), acc + 1)
        } else {
            return acc + element.offsetTop
        }
    }

    return {
        getRandomIntInclusive,
        offsetTop,
        availableImages,
        fogImages,
        bgIcons,
        onMouseOver,
        onMouseLeave
    }
}
