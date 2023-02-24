<template>
    <main class="flex flex-col">
        <header class="text-center my-40">
            <UtilsMainTitle>Contact</UtilsMainTitle>
            <p class="text-2xl">
                Vous pouvez me contacter via mails ou avec les différents
                réseaux sociaux ci-dessous.
            </p>
        </header>
        <UtilsSkewSection>
            <div class="flex md:flex-row flex-col items-center justify-center">
                <a
                    v-for="social in socials"
                    :key="social.link"
                    target="_blank"
                    :class="[
                        'flex flex-col items-center lg:mx-20 md:mx-5 my-5',
                        social.color ? `text-${social.color}`: null
                    ]"
                    :href="social.link"
                >
                    <mdicon
                        :name="social.icon.name"
                        :size="90"
                    /><p class="text-2xl">
                        {{ social.title }}</p>
                    <p class="text-center">Maxime Ben Hassen</p>
                </a>
            </div>
        </UtilsSkewSection>
    </main>
</template>

<script setup lang="ts">
import { Social } from '~/types'

const socials: Social[] = [
    {
        title: 'Linkedin',
        subtitle: 'Maxime Ben Hassen',
        link: 'https://www.linkedin.com/in/maxime-ben-hassen-a9aa2a21a/',
        icon: {
            name: 'linkedin'
        }
    },
    {
        title: 'Courriel',
        subtitle: 'maxime.benhassen@fedabian.fr',
        link: 'mailto:maxime.benhassen@fedabian.fr',
        color: 'primary',
        icon: {
            name: 'email-box'
        }
    },
    {
        title: 'Github',
        subtitle: 'Maxime Ben Hassen',
        link: 'https://github.com/da-max',
        icon: {
            name: 'github'
        }
    },
    {
        title: 'Gitlab',
        subtitle: 'Maxime Ben Hassen',
        color: 'primary',
        link: 'https://gitlab.com/damax',
        icon: {
            name: 'gitlab'
        }
    }
]
</script>
