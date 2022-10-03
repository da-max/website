import { Ref } from 'vue'

// class Parallax {
//     private element: HTMLElement
//     private ratio: number
//     private elementY: number

//     constructor (element: HTMLElement) {
//         this.element = element
//         this.ratio = parseFloat(element.dataset.parallax)
//         this.elementY = offsetTop(this.element, 0) +
//             this.element.offsetHeight / 2

//         const observer: IntersectionObserver = new IntersectionObserver(
//             this.onIntersection.bind(this))
//         observer.observe(element)
//         this.onScroll()
//     }

//     private onIntersection (entries: IntersectionObserverEntry[]) {
//         entries.forEach((entry: IntersectionObserverEntry) => {
//             if (entry.isIntersecting) {
//                 document.addEventListener('sroll', this.onScroll.bind(this))
//                 this.elementY = offsetTop(this.element, 0) +
//                     this.element.offsetHeight / 2
//             } else {
//                 document.removeEventListener('sroll',
//                      this.onScroll.bind(this))
//             }
//         })
//     }

//     private onScroll () {
//         window.requestAnimationFrame(() => {
//             const screenY: number = window.scrollY + window.innerHeight / 2
//             const diffY = this.elementY - screenY
//             this.element.style.setProperty('transform',
//                 `translateY(${diffY * -1 * this.ratio}px)`)
//         })
//     }

//     static bind (): Parallax[] {
//         return Array.from(document.querySelectorAll('data-parallax'))
//             .map((el: HTMLElement) =>
//                 new Parallax(el)
//             )
//     }
// }

export const useParallax = () => {
    const ratio: Ref<number | null> = ref(null)
    const elementY: Ref<number | null> = ref(null)
    const element: Ref<HTMLElement | null> = ref(null)
    const { offsetTop } = useUtils()

    function newParallax (el: HTMLElement) {
        element.value = el
        ratio.value = parseFloat(el.dataset.parallax)
        elementY.value = offsetTop(el, 0) + el.offsetHeight / 2
        const observer: IntersectionObserver = new IntersectionObserver(
            onIntersection)
        observer.observe(el)
        onScroll()
    }

    function onScroll () {
        window.requestAnimationFrame(() => {
            const screenY: number = window.scrollY + window.innerHeight / 2
            const diffY = elementY.value - screenY
            element.value?.style.setProperty('transform',
                `translateY(${diffY * -1 * ratio.value}px)`)
        })
    }

    function onIntersection (entries: IntersectionObserverEntry[]) {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
                document.addEventListener('sroll', onScroll)
                elementY.value = offsetTop(element.value, 0) +
                    element.value?.offsetHeight / 2
            } else {
                document.removeEventListener('sroll', onScroll)
            }
        })
    }

    function bindParallax (): void {
        console.log(document.querySelectorAll('[data-parallax]'))

        Array.from(document.querySelectorAll('[data-parallax]'))
            .forEach((el: HTMLElement) => {
                console.log(el)

                newParallax(el)
            }
            )
    }

    return {
        newParallax,
        bindParallax
    }
}
