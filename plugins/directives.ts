import { DirectiveBinding } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('parallax',
        (el, binding: DirectiveBinding<number>) => {
            const { offsetTop } = useUtils()
            const onScroll = () => {
                window.requestAnimationFrame(() => {
                    const screenY: number =
                        window.scrollY + window.innerHeight / 2
                    const diffY = elementY - screenY
                    el.style.setProperty('margin-top',
                        `${diffY * -1 * ratio.value}px`)
                })
            }

            const onIntersection = (entries: IntersectionObserverEntry[]) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        document.addEventListener('scroll', onScroll)
                        elementY = offsetTop(el, 0) +
                        el.offsetHeight / 2
                    } else {
                        document.removeEventListener('scroll', onScroll)
                    }
                })
            }

            const ratio = binding
            let elementY = offsetTop(el, 0) + el.offsetHeight / 2
            const observer: IntersectionObserver = new IntersectionObserver(
                onIntersection)

            observer.observe(el)
            onScroll()
        })
})
