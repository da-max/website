import { H3Event } from 'h3'

export default defineEventHandler(async (_: H3Event) => {
    const res = await useStorage().getItem('fs:projects')
    return res
})
