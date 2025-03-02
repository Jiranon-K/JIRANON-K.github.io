tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit,minmax(200px, 1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: [ "Ovo", "serif"]
            },
            animation:{
                spin_slow: 'spin 6s linear infinite',
                fadeIn: 'fadeIn 0.8s ease-in-out forwards',
                slideUp: 'slideUp 0.8s ease-in-out forwards',
                slideRight: 'slideRight 0.8s ease-in-out forwards',
                glow: 'glow 2s ease-in-out infinite alternate',
                float: 'float 6s ease-in-out infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                typewriter: 'typewriter 3s steps(30) forwards',
                blink: 'blink 1s steps(1) infinite',
                parallaxBg: 'parallaxBg 25s ease infinite',
                appear: 'appear 0.8s ease-out forwards'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideRight: {
                    '0%': { transform: 'translateX(-30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #b820e6, 0 0 10px #b820e6' },
                    '100%': { boxShadow: '0 0 10px #da7d20, 0 0 20px #da7d20' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                typewriter: {
                    'from': { width: '0' },
                    'to': { width: '100%' }
                },
                blink: {
                    '50%': { borderColor: 'transparent' }
                },
                parallaxBg: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '25%': { backgroundPosition: '100% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '75%': { backgroundPosition: '0% 100%' },
                    '100%': { backgroundPosition: '0% 0%' }
                },
                appear: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            },
            colors:{
                lightHover:'#fcf4ff',
                darkHover:'#2a004a',
                darkTheme: '#11001F',
                glassLight: 'rgba(255, 255, 255, 0.1)',
                glassDark: 'rgba(0, 0, 0, 0.25)',
                neonPurple: '#b820e6',
                neonOrange: '#da7d20',
                charcoal: '#121212',
                softGray: '#e0e0e0',
                electricBlue: '#00FFFF'
            },
            boxShadow:{
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'neon': '0 0 10px #b820e6, 0 0 20px #b820e6',
                'card': '0 10px 20px rgba(0, 0, 0, 0.1)',
                'glass-card': '0 8px 32px rgba(31, 38, 135, 0.15)',
                'hover-glow': '0 0 15px rgba(184, 32, 230, 0.6)'
            },
            backdropBlur: {
                'xs': '2px',
                'sm': '4px',
                'md': '12px'
            }
        }
        
    },
    darkMode: 'selector'
}