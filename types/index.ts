import { NuxtImg } from '~~/.nuxt/components'
import UtilsTag from '~/components/Utils/Tag.vue'
import UtilsModal from '~/components/Utils/Modal.vue'
import { SIZE } from '~/types/enums'

export interface IBgIcon {
    class: string,
    name: string,
    size?: number,
    activeClass?: string,
    blur: number
}

export interface ILink {
    src: string,
    text: string
}

export type NuxtImgProps = InstanceType<typeof NuxtImg>['$props']
export type TagProps = InstanceType<typeof UtilsTag>['$props']
export type UtilsModalType = InstanceType<typeof UtilsModal>

export type Social = {
    title: string,
    subtitle?: string,
    link: string,
    color?: string,
    icon: {
        name: string,
        size?: SIZE
    }
}
