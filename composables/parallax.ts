import { Ref } from 'vue'

export const useParallax = () => {
    const ratio: Ref<number | null> = ref(null)
    const elementY: Ref<number | null> = ref(null)
    const element: Ref<HTMLElement | null> = ref(null)
    const { offsetTop } = useUtils()

    function newParallax (el: HTMLElement) {
        if (el.dataset.parallax) {
            element.value = el
            ratio.value = parseFloat(el.dataset.parallax)
            elementY.value = offsetTop(el, 0) + el.offsetHeight / 2
            const observer: IntersectionObserver = new IntersectionObserver(
                onIntersection)
            observer.observe(el)
            onScroll()
        }
    }

    function onScroll () {
        window.requestAnimationFrame(() => {
            if (elementY.value && ratio.value) {
                const screenY: number = window.scrollY + window.innerHeight / 2
                const diffY = elementY.value - screenY
                element.value?.style.setProperty('transform',
                    `translateY(${diffY * -1 * ratio.value}px)`)
            }
        })
    }

    function onIntersection (entries: IntersectionObserverEntry[]) {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && element.value) {
                document.addEventListener('sroll', onScroll)
                elementY.value = offsetTop(element.value, 0) +
                    element.value?.offsetHeight / 2
            } else {
                document.removeEventListener('sroll', onScroll)
            }
        })
    }

    function bindParallax (): void {
        Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
            .forEach((el: HTMLElement) => {
                newParallax(el)
            })
    }

    return {
        newParallax,
        bindParallax
    }
}
