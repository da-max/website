import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                inv: {
                    '0%, 100%': {
                        transform: 'rotate(0deg)'
                    },
                    '50%': {
                        transform: 'rotate(-360deg)'
                    }
                }
            },
            animation: {
                'ping-slow': 'ping 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
                'spin-so-slow': 'spin 20s linear infinite',
                'spin-much-slow': 'spin 40s linear infinite',
                'inv-spin-much-slow': 'inv 40s linear infinite'
            },
            textColor: {},
            colors: {
                primary: '#006884',
                'primary-hover': '#056D89',
                'primary-background': '#F2F1EF',
                secondary: '#97BCC7',
                'secondary-background': '#050A30',
                'secondary-hover': '#A2C1D2',
                default: '#050A30',
                'default-background': '#F2F1EF'
            }
        }
    }
})
