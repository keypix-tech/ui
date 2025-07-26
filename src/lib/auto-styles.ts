// Optimized auto-styles loader for Keypix UI
// This ensures styles work out of the box without manual configuration

const KEYPIX_STYLES_ID = 'keypix-ui-styles'
let stylesInjected = false

// CSS variables for light and dark themes (optimized)
const CSS_VARIABLES = `
/* Global reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-family: 'Inter', sans-serif;
}

*:focus,
*:active {
  outline: none;
}

html,
body {
  height: 100%;
}

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --chart: 221.2 83.2% 53.3%;
  --chart-foreground: 222.2 84% 4.9%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  --primary-foreground: 222.2 84% 4.9%;
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 224.3 76.3% 94.1%;
  --chart: 217.2 91.2% 59.8%;
  --chart-foreground: 210 40% 98%;
}

*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}

/* Accessibility improvements */
.keypix-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
.keypix-focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px}
.keypix-focus-visible:not(.keypix-focus-visible){outline:none}
.keypix-reduced-motion{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}
@media(prefers-reduced-motion:reduce){.keypix-reduced-motion{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important}}
@media(prefers-contrast:high){.keypix-button{border-width:2px}.keypix-input{border-width:2px}}
`

// Optimized component styles (minified)
const COMPONENT_STYLES = `
.keypix-button{display:inline-flex;align-items:center;justify-content:center;border-radius:calc(var(--radius) - 2px);font-weight:500;transition:all .2s;cursor:pointer;border:1px solid transparent;text-decoration:none;font-family:inherit;line-height:1}.keypix-button:disabled{opacity:.5;cursor:not-allowed}.keypix-button:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px}.keypix-button-default{background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}.keypix-button-default:hover:not(:disabled){background-color:hsl(var(--primary)/.9)}.keypix-button-secondary{background-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground))}.keypix-button-secondary:hover:not(:disabled){background-color:hsl(var(--secondary)/.8)}.keypix-button-destructive{background-color:hsl(var(--destructive));color:hsl(var(--destructive-foreground))}.keypix-button-destructive:hover:not(:disabled){background-color:hsl(var(--destructive)/.9)}.keypix-button-outline{background-color:transparent;color:hsl(var(--foreground));border-color:hsl(var(--border))}.keypix-button-outline:hover:not(:disabled){background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}.keypix-button-ghost{background-color:transparent;color:hsl(var(--foreground))}.keypix-button-ghost:hover:not(:disabled){background-color:hsl(var(--accent));color:hsl(var(--accent-foreground))}.keypix-button-link{background-color:transparent;color:hsl(var(--primary));text-decoration:underline;text-underline-offset:4px}.keypix-button-link:hover:not(:disabled){color:hsl(var(--primary)/.8)}.keypix-button-success{background-color:hsl(142 76% 36%);color:#fff}.keypix-button-success:hover:not(:disabled){background-color:hsl(142 76% 36%/.9)}.keypix-button-warning{background-color:hsl(38 92% 50%);color:#fff}.keypix-button-warning:hover:not(:disabled){background-color:hsl(38 92% 50%/.9)}.keypix-button-info{background-color:hsl(199 89% 48%);color:#fff}.keypix-button-info:hover:not(:disabled){background-color:hsl(199 89% 48%/.9)}.keypix-button-xs{height:1.5rem;padding:0 .5rem;font-size:.75rem}.keypix-button-sm{height:2rem;padding:0 .75rem;font-size:.875rem}.keypix-button-md{height:2.5rem;padding:0 1rem;font-size:.875rem}.keypix-button-lg{height:3rem;padding:0 1.5rem;font-size:1rem}.keypix-button-xl{height:3.5rem;padding:0 2rem;font-size:1.125rem}.keypix-button-icon{width:2.5rem;height:2.5rem;padding:0}.keypix-input{display:flex;height:2.5rem;width:100%;border-radius:calc(var(--radius) - 2px);border:1px solid hsl(var(--border));background-color:hsl(var(--background));padding:0 .75rem;font-size:.875rem;color:hsl(var(--foreground));transition:border-color .2s}.keypix-input:focus{outline:none;border-color:hsl(var(--ring));box-shadow:0 0 0 2px hsl(var(--ring)/.2)}.keypix-input:focus-visible{outline:2px solid hsl(var(--ring));outline-offset:2px}.keypix-input::placeholder{color:hsl(var(--muted-foreground))}.keypix-badge{display:inline-flex;align-items:center;border-radius:calc(var(--radius) - 2px);font-weight:500;font-size:.75rem;line-height:1;padding:.25rem .5rem;border:1px solid transparent}.keypix-badge-default{background-color:hsl(var(--primary));color:hsl(var(--primary-foreground))}.keypix-badge-secondary{background-color:hsl(var(--secondary));color:hsl(var(--secondary-foreground))}.keypix-badge-destructive{background-color:hsl(var(--destructive));color:hsl(var(--destructive-foreground))}.keypix-badge-outline{background-color:transparent;color:hsl(var(--foreground));border-color:hsl(var(--border))}.keypix-badge-success{background-color:hsl(142 76% 36%);color:#fff}.keypix-badge-warning{background-color:hsl(38 92% 50%);color:#fff}.keypix-badge-info{background-color:hsl(199 89% 48%);color:#fff}.keypix-card{border-radius:calc(var(--radius) - 2px);border:1px solid hsl(var(--border));background-color:hsl(var(--card));color:hsl(var(--card-foreground));box-shadow:0 1px 3px 0 rgb(0 0 0/.1),0 1px 2px -1px rgb(0 0 0/.1)}.keypix-card-header{display:flex;flex-direction:column;gap:1.5rem;padding:1.5rem}.keypix-card-title{font-size:1.5rem;font-weight:600;line-height:1;letter-spacing:-.025em}.keypix-card-content{padding:0 1.5rem 1.5rem}.keypix-avatar{position:relative;display:flex;height:2.5rem;width:2.5rem;overflow:hidden;border-radius:50%;background-color:hsl(var(--muted))}.keypix-avatar img{aspect-ratio:1/1;height:100%;width:100%;object-fit:cover}.keypix-avatar-fallback{display:flex;align-items:center;justify-content:center;height:100%;width:100%;background-color:hsl(var(--muted));color:hsl(var(--muted-foreground));font-size:.875rem;font-weight:500}.keypix-spinner{display:inline-block;width:1rem;height:1rem;border:2px solid currentColor;border-bottom-color:transparent;border-radius:50%;animation:keypix-spin 1s linear infinite}@keyframes keypix-spin{to{transform:rotate(360deg)}}.keypix-flex{display:flex}.keypix-inline-flex{display:inline-flex}.keypix-flex-col{flex-direction:column}.keypix-flex-col-reverse{flex-direction:column-reverse}.keypix-flex-row{flex-direction:row}.keypix-flex-row-reverse{flex-direction:row-reverse}.keypix-items-center{align-items:center}.keypix-justify-center{justify-content:center}.keypix-justify-between{justify-content:space-between}.keypix-space-x-2>*+*{margin-left:.5rem}.keypix-space-x-4>*+*{margin-left:1rem}.keypix-space-y-2>*+*{margin-top:.5rem}.keypix-space-y-4>*+*{margin-top:1rem}.keypix-space-y-8>*+*{margin-top:2rem}.keypix-gap-2{gap:.5rem}.keypix-gap-4{gap:1rem}.keypix-p-6{padding:1.5rem}.keypix-p-8{padding:2rem}.keypix-px-3{padding-left:.75rem;padding-right:.75rem}.keypix-py-1{padding-top:.25rem;padding-bottom:.25rem}.keypix-pl-10{padding-left:2.5rem}.keypix-pr-10{padding-right:2.5rem}.keypix-min-h-screen{min-height:100vh}.keypix-max-w-4xl{max-width:56rem}.keypix-mx-auto{margin-left:auto;margin-right:auto}.keypix-ml-2{margin-left:.5rem}.keypix-mr-2{margin-right:.5rem}.keypix-mt-2{margin-top:.5rem}.keypix-border{border-width:1px}.keypix-border-2{border-width:2px}.keypix-rounded{border-radius:.25rem}.keypix-rounded-full{border-radius:9999px}.keypix-rounded-lg{border-radius:.5rem}.keypix-flex-wrap{flex-wrap:wrap}.keypix-relative{position:relative}.keypix-absolute{position:absolute}.keypix-fixed{position:fixed}.keypix-inset-0{top:0;right:0;bottom:0;left:0}.keypix-top-0{top:0}.keypix-right-0{right:0}.keypix-bottom-0{bottom:0}.keypix-left-0{left:0}.keypix-top-1/2{top:50%}.keypix-right-3{right:.75rem}.keypix-left-3{left:.75rem}.keypix--translate-y-1/2{transform:translateY(-50%)}.keypix-z-50{z-index:50}.keypix-w-full{width:100%}.keypix-h-full{height:100%}.keypix-h-3{height:.75rem}.keypix-h-4{height:1rem}.keypix-h-6{height:1.5rem}.keypix-h-8{height:2rem}.keypix-h-10{height:2.5rem}.keypix-h-12{height:3rem}.keypix-h-16{height:4rem}.keypix-h-20{height:5rem}.keypix-w-3{width:.75rem}.keypix-w-4{width:1rem}.keypix-w-6{width:1.5rem}.keypix-w-8{width:2rem}.keypix-w-10{width:2.5rem}.keypix-w-12{width:3rem}.keypix-w-16{width:4rem}.keypix-w-20{width:5rem}.keypix-w-1{width:.25rem}.keypix-aspect-square{aspect-ratio:1/1}.keypix-object-cover{object-fit:cover}.keypix-overflow-hidden{overflow:hidden}.keypix-pointer-events-none{pointer-events:none}.keypix-text-xs{font-size:.75rem;line-height:1rem}.keypix-text-sm{font-size:.875rem;line-height:1.25rem}.keypix-text-base{font-size:1rem;line-height:1.5rem}.keypix-text-lg{font-size:1.125rem;line-height:1.75rem}.keypix-text-xl{font-size:1.25rem;line-height:1.75rem}.keypix-text-3xl{font-size:1.875rem;line-height:2.25rem}.keypix-font-medium{font-weight:500}.keypix-font-bold{font-weight:700}.keypix-leading-none{line-height:1}.keypix-leading-tight{line-height:1.25}.keypix-tracking-tight{letter-spacing:-.025em}.keypix-bg-background{background-color:hsl(var(--background))}.keypix-bg-card{background-color:hsl(var(--card))}.keypix-bg-muted{background-color:hsl(var(--muted))}.keypix-bg-white{background-color:#fff}.keypix-bg-black{background-color:#000}.keypix-bg-green-500{background-color:rgb(34 197 94)}.keypix-bg-gray-400{background-color:rgb(156 163 175)}.keypix-bg-yellow-500{background-color:rgb(234 179 8)}.keypix-bg-red-500{background-color:rgb(239 68 68)}.keypix-bg-black\\/50{background-color:rgb(0 0 0/.5)}.keypix-text-foreground{color:hsl(var(--foreground))}.keypix-text-card-foreground{color:hsl(var(--card-foreground))}.keypix-text-muted-foreground{color:hsl(var(--muted-foreground))}.keypix-text-primary{color:hsl(var(--primary))}.keypix-text-secondary-foreground{color:hsl(var(--secondary-foreground))}.keypix-text-destructive{color:hsl(var(--destructive))}.keypix-text-green-500{color:rgb(34 197 94)}.keypix-text-yellow-500{color:rgb(234 179 8)}.keypix-text-red-500{color:rgb(239 68 68)}.keypix-text-gray-600{color:rgb(75 85 99)}.keypix-text-white{color:#fff}.keypix-border-border{border-color:hsl(var(--border))}.keypix-border-destructive{border-color:hsl(var(--destructive))}.keypix-border-white{border-color:#fff}.keypix-border-gray-800{border-color:rgb(31 41 55)}.keypix-ring-2{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.keypix-ring-white{--tw-ring-color:#fff}.keypix-ring-gray-800{--tw-ring-color:rgb(31 41 55)}.keypix-shadow-sm{box-shadow:0 1px 2px 0 rgb(0 0 0/.05)}.keypix-shadow-lg{box-shadow:0 10px 15px -3px rgb(0 0 0/.1),0 4px 6px -4px rgb(0 0 0/.1)}.keypix-animate-pulse{animation:keypix-pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes keypix-pulse{0%,100%{opacity:1}50%{opacity:.5}}.keypix-transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}.keypix-outline-none{outline:2px solid transparent;outline-offset:2px}.keypix-cursor-pointer{cursor:pointer}.keypix-cursor-not-allowed{cursor:not-allowed}.keypix-block{display:block}.keypix-text-center{text-align:center}.keypix-shrink-0{flex-shrink:0}.keypix--space-x-1>*+*{margin-left:-.25rem}.keypix--space-x-2>*+*{margin-left:-.5rem}.keypix--space-x-3>*+*{margin-left:-.75rem}.keypix-flex-1{flex:1 1 0%}.dark .keypix-bg-gray-800{background-color:rgb(31 41 55)}.dark .keypix-text-gray-400{color:rgb(156 163 175)}.dark .keypix-ring-gray-800{--tw-ring-color:rgb(31 41 55)}.hover\\:keypix-text-foreground:hover{color:hsl(var(--foreground))}.hover\\:keypix-bg-black\\/10:hover{background-color:rgb(0 0 0/.1)}.hover\\:keypix-bg-white\\/10:hover{background-color:rgb(255 255 255/.1)}.focus\\:keypix-outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:keypix-text-foreground:focus{color:hsl(var(--foreground))}.focus\\:keypix-bg-black\\/10:focus{background-color:rgb(0 0 0/.1)}.focus\\:keypix-bg-white\\/10:focus{background-color:rgb(255 255 255/.1)}.focus\\:keypix-ring-destructive:focus{--tw-ring-color:hsl(var(--destructive))}
`

// Optimized style injection with performance improvements
export function injectKeypixStyles() {
  // Prevent multiple injections
  if (stylesInjected || document.getElementById(KEYPIX_STYLES_ID)) {
    return
  }

  // Use requestAnimationFrame for better performance
  if (typeof window !== 'undefined') {
    requestAnimationFrame(() => {
      const style = document.createElement('style')
      style.id = KEYPIX_STYLES_ID
      style.textContent = CSS_VARIABLES + COMPONENT_STYLES
      
      // Optimize insertion
      const head = document.head
      const firstChild = head.firstChild
      head.insertBefore(style, firstChild)
      
      stylesInjected = true
    })
  }
}

// Auto-inject styles when this module is imported (only once)
if (typeof document !== 'undefined' && !stylesInjected) {
  injectKeypixStyles()
} 