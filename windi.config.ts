import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        extend: {
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'pulse-very-slow': `pulse 
                                    6s cubic-bezier(0.4, 0, 0.6, 1) 
                                    infinite`,
                'pulse-so-slow': `pulse 
                                    15s cubic-bezier(0.4, 0, 0.6, 1) 
                                    infinite`,
                'bounce-slow': 'bounce 2s cubic-bezier(0,0,0.2,1) infinite',
                'bounce-very-slow': `bounce 
                                    4s cubic-bezier(0,0,0.2,1) infinite`,
                'bounce-so-slow': `bounce 
                                    20s cubic-bezier(0,0,0.2,1) infinite`,
                'spin-slow': 'spin 2s linear infinite',
                'spin-very-slow': 'spin 4s linear infinite',
                'spin-so-slow': 'spin 20s linear infinite'
            },
            textColor: {},
            colors: {
                primary: '#006884',
                'primary-hover': '#056D89',
                'primary-background': '#F2F1EF',
                secondary: '#97BCC7',
                'secondary-background': '#F2F1EF',
                default: '#050A30',
                'default-background': '#F2F1EF'
            }
        }
    }
})