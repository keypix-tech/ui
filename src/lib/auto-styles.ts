// Optimized auto-styles loader for Keypix UI
// This ensures styles work out of the box without manual configuration

const KEYPIX_STYLES_ID = 'keypix-ui-styles'
let stylesInjected = false

// CSS variables for light and dark themes (optimized)
const CSS_VARIABLES = `
/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* Global reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-family: 'Inter', sans-serif;
}

*:focus,
*:focus-visible,
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

// Pure CSS component styles
const COMPONENT_STYLES = `
/* Button Component */
.keypix-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: calc(var(--radius) - 2px);
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  font-family: inherit;
  line-height: 1;
  position: relative;
  overflow: hidden;
}

.keypix-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.keypix-button:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

.keypix-button:active {
  transform: scale(0.98);
}

/* Button Variants */
.keypix-button-default {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-default:hover:not(:disabled) {
  background-color: hsl(var(--primary) / 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.keypix-button-secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-secondary:hover:not(:disabled) {
  background-color: hsl(var(--secondary) / 0.8);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.keypix-button-destructive {
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-destructive:hover:not(:disabled) {
  background-color: hsl(var(--destructive) / 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.keypix-button-outline {
  background-color: transparent;
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}

.keypix-button-outline:hover:not(:disabled) {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.keypix-button-ghost {
  background-color: transparent;
  color: hsl(var(--foreground));
}

.keypix-button-ghost:hover:not(:disabled) {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.keypix-button-link {
  background-color: transparent;
  color: hsl(var(--primary));
  text-decoration: underline;
  text-underline-offset: 4px;
}

.keypix-button-link:hover:not(:disabled) {
  color: hsl(var(--primary) / 0.8);
}

.keypix-button-success {
  background-color: hsl(142, 76%, 36%);
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-success:hover:not(:disabled) {
  background-color: hsl(142, 76%, 36%, 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.keypix-button-warning {
  background-color: hsl(38, 92%, 50%);
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-warning:hover:not(:disabled) {
  background-color: hsl(38, 92%, 50%, 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.keypix-button-info {
  background-color: hsl(199, 89%, 48%);
  color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.keypix-button-info:hover:not(:disabled) {
  background-color: hsl(199, 89%, 48%, 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Button Sizes */
.keypix-button-xs {
  height: 1.5rem;
  padding: 0 0.5rem;
  font-size: 0.75rem;
}

.keypix-button-sm {
  height: 2rem;
  padding: 0 0.75rem;
  font-size: 0.875rem;
}

.keypix-button-md {
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 0.875rem;
}

.keypix-button-lg {
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1rem;
}

.keypix-button-xl {
  height: 3.5rem;
  padding: 0 2rem;
  font-size: 1.125rem;
}

.keypix-button-icon {
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}

/* Input Component */
.keypix-input {
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  transition: border-color 0.2s;
}

.keypix-input:focus {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.keypix-input::placeholder {
  color: hsl(var(--muted-foreground));
}

/* Badge Component */
.keypix-badge {
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;
}

.keypix-badge-default {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.keypix-badge-secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
}

.keypix-badge-destructive {
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.keypix-badge-outline {
  background-color: transparent;
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}

.keypix-badge-success {
  background-color: hsl(142, 76%, 36%);
  color: white;
}

.keypix-badge-warning {
  background-color: hsl(38, 92%, 50%);
  color: white;
}

.keypix-badge-info {
  background-color: hsl(199, 89%, 48%);
  color: white;
}

/* Card Component */
.keypix-card {
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

.keypix-card-header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}

.keypix-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
}

.keypix-card-content {
  padding: 0 1.5rem 1.5rem;
}

/* Avatar Component */
.keypix-avatar {
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
  border-radius: 50%;
  background-color: hsl(var(--muted));
}

.keypix-avatar img {
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.keypix-avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  font-size: 0.875rem;
  font-weight: 500;
}

/* Spinner Component */
.keypix-spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: keypix-spin 1s linear infinite;
}

@keyframes keypix-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Utility Classes */
.keypix-flex { display: flex; }
.keypix-inline-flex { display: inline-flex; }
.keypix-flex-col { flex-direction: column; }
.keypix-flex-row { flex-direction: row; }
.keypix-items-center { align-items: center; }
.keypix-justify-center { justify-content: center; }
.keypix-justify-between { justify-content: space-between; }
.keypix-gap-2 { gap: 0.5rem; }
.keypix-gap-4 { gap: 1rem; }
.keypix-p-6 { padding: 1.5rem; }
.keypix-p-8 { padding: 2rem; }
.keypix-px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.keypix-py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
.keypix-min-h-screen { min-height: 100vh; }
.keypix-max-w-4xl { max-width: 56rem; }
.keypix-mx-auto { margin-left: auto; margin-right: auto; }
.keypix-border { border-width: 1px; }
.keypix-rounded { border-radius: 0.25rem; }
.keypix-rounded-lg { border-radius: 0.5rem; }
.keypix-relative { position: relative; }
.keypix-absolute { position: absolute; }
.keypix-w-full { width: 100%; }
.keypix-h-full { height: 100%; }
.keypix-text-center { text-align: center; }
.keypix-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.keypix-text-base { font-size: 1rem; line-height: 1.5rem; }
.keypix-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.keypix-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.keypix-text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.keypix-font-medium { font-weight: 500; }
.keypix-font-bold { font-weight: 700; }
.keypix-bg-background { background-color: hsl(var(--background)); }
.keypix-bg-card { background-color: hsl(var(--card)); }
.keypix-bg-muted { background-color: hsl(var(--muted)); }
.keypix-text-foreground { color: hsl(var(--foreground)); }
.keypix-text-card-foreground { color: hsl(var(--card-foreground)); }
.keypix-text-muted-foreground { color: hsl(var(--muted-foreground)); }
.keypix-text-primary { color: hsl(var(--primary)); }
.keypix-border-border { border-color: hsl(var(--border)); }
.keypix-shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.keypix-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1); }
.keypix-transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.keypix-cursor-pointer { cursor: pointer; }
.keypix-cursor-not-allowed { cursor: not-allowed; }

/* Dark mode support */
.dark .keypix-bg-background { background-color: hsl(var(--background)); }
.dark .keypix-text-foreground { color: hsl(var(--foreground)); }
.dark .keypix-border-border { border-color: hsl(var(--border)); }

/* Custom Scrollbar Styles - Applied globally */
* {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) transparent;
}

/* Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 4px;
  border: 1px solid transparent;
  background-clip: content-box;
  transition: background-color 0.2s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:active {
  background: hsl(var(--muted-foreground) / 0.7);
  background-clip: content-box;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

/* Horizontal scrollbar specific styles */
::-webkit-scrollbar:horizontal {
  height: 8px;
}

/* Dark mode scrollbar adjustments */
.dark ::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.4);
  background-clip: content-box;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.6);
  background-clip: content-box;
}

.dark ::-webkit-scrollbar-thumb:active {
  background: hsl(var(--muted-foreground) / 0.8);
  background-clip: content-box;
}

/* Firefox scrollbar */
* {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) transparent;
}

.dark * {
  scrollbar-color: hsl(var(--muted-foreground) / 0.4) transparent;
}

/* Smooth scrolling for better UX */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for specific components */
.keypix-custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--primary) / 0.3) transparent;
}

.keypix-custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.3);
  background-clip: content-box;
}

.keypix-custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
  background-clip: content-box;
}

.dark .keypix-custom-scrollbar {
  scrollbar-color: hsl(var(--primary) / 0.4) transparent;
}

.dark .keypix-custom-scrollbar::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.4);
  background-clip: content-box;
}

.dark .keypix-custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.6);
  background-clip: content-box;
}

/* Modal Component */
.keypix-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.keypix-modal-content {
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  padding: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-height: 90vh;
  overflow-y: auto;
}

.keypix-modal-sm { max-width: 24rem; }
.keypix-modal-md { max-width: 28rem; }
.keypix-modal-lg { max-width: 32rem; }
.keypix-modal-xl { max-width: 36rem; }
.keypix-modal-full { max-width: 100%; margin: 0 1rem; }

.keypix-modal-header {
  margin-bottom: 1rem;
}

.keypix-modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin: 0;
}

.keypix-modal-description {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.keypix-modal-close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  color: hsl(var(--foreground));
}

.keypix-modal-close:hover {
  opacity: 1;
}

/* Enhanced Spinner Component */
.keypix-spinner {
  display: inline-block;
  border: 2px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: keypix-spin 1s linear infinite;
}

.keypix-spinner-xs {
  width: 0.75rem;
  height: 0.75rem;
  border-width: 1px;
}

.keypix-spinner-sm {
  width: 1rem;
  height: 1rem;
  border-width: 1.5px;
}

.keypix-spinner-md {
  width: 1.25rem;
  height: 1.25rem;
  border-width: 2px;
}

.keypix-spinner-lg {
  width: 1.5rem;
  height: 1.5rem;
  border-width: 2.5px;
}

.keypix-spinner-xl {
  width: 2rem;
  height: 2rem;
  border-width: 3px;
}

/* Enhanced Input Component */
.keypix-input {
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: calc(var(--radius) - 2px);
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--background));
  padding: 0 0.75rem;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  transition: all 0.2s ease-in-out;
}

.keypix-input:focus {
  outline: none;
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
}

.keypix-input::placeholder {
  color: hsl(var(--muted-foreground));
}

.keypix-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Enhanced Badge Component */
.keypix-badge {
  display: inline-flex;
  align-items: center;
  border-radius: calc(var(--radius) - 2px);
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.keypix-badge-remove {
  margin-left: 0.25rem;
  display: inline-flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.125rem;
  transition: all 0.2s ease-in-out;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
}

.keypix-badge-remove:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark .keypix-badge-remove:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Button animations */
.keypix-button:active {
  transform: scale(0.98);
  transition: transform 0.1s ease-in-out;
}

/* Data Table Component */
.keypix-data-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.keypix-data-table-search {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.keypix-data-table-container {
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

.keypix-data-table-wrapper {
  overflow-x: auto;
  border-radius: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--muted-foreground) / 0.3) transparent;
}

.keypix-data-table-wrapper::-webkit-scrollbar {
  height: 8px;
}

.keypix-data-table-wrapper::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

.keypix-data-table-wrapper::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.3);
  border-radius: 4px;
  border: 1px solid transparent;
  background-clip: content-box;
  transition: background-color 0.2s ease-in-out;
}

.keypix-data-table-wrapper::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.5);
  background-clip: content-box;
}

.dark .keypix-data-table-wrapper {
  scrollbar-color: hsl(var(--muted-foreground) / 0.4) transparent;
}

.dark .keypix-data-table-wrapper::-webkit-scrollbar-thumb {
  background: hsl(var(--muted-foreground) / 0.4);
  background-clip: content-box;
}

.dark .keypix-data-table-wrapper::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground) / 0.6);
  background-clip: content-box;
}

.keypix-data-table-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.keypix-data-table-thead {
  background-color: hsl(var(--muted) / 0.5);
  border-bottom: 1px solid hsl(var(--border));
}

.keypix-data-table-th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(var(--muted-foreground));
  transition: background-color 0.2s ease-in-out;
  position: relative;
}

.keypix-data-table-th-sortable {
  cursor: pointer;
}

.keypix-data-table-th-sortable:hover {
  background-color: hsl(var(--muted));
}

.keypix-data-table-th-content {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.keypix-data-table-sort-icon {
  font-size: 0.75rem;
  color: hsl(var(--primary));
  transition: transform 0.2s ease-in-out;
}

.keypix-data-table-tbody {
  background-color: hsl(var(--card));
}

.keypix-data-table-tr {
  border-bottom: 1px solid hsl(var(--border));
  transition: background-color 0.2s ease-in-out;
}

.keypix-data-table-tr:last-child {
  border-bottom: none;
}

.keypix-data-table-tr:hover {
  background-color: hsl(var(--muted) / 0.3);
}

.keypix-data-table-tr-clickable {
  cursor: pointer;
}

.keypix-data-table-td {
  padding: 0.75rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  vertical-align: middle;
}

.keypix-data-table-empty {
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.keypix-data-table-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.keypix-data-table-pagination-info {
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.keypix-data-table-pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.keypix-data-table-pagination-pages {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.keypix-data-table-pagination-page {
  width: 2rem;
  height: 2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
}

/* Loading state */
.keypix-data-table-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

/* Striped rows */
.keypix-data-table-striped .keypix-data-table-tr:nth-child(even) {
  background-color: hsl(var(--muted) / 0.1);
}

.keypix-data-table-striped .keypix-data-table-tr:nth-child(even):hover {
  background-color: hsl(var(--muted) / 0.4);
}

/* Compact table */
.keypix-data-table-compact .keypix-data-table-th,
.keypix-data-table-compact .keypix-data-table-td {
  padding: 0.5rem 0.75rem;
}

/* Bordered table */
.keypix-data-table-bordered .keypix-data-table-td {
  border-right: 1px solid hsl(var(--border));
}

.keypix-data-table-bordered .keypix-data-table-td:last-child {
  border-right: none;
}

/* Utility classes for spacing */
.keypix-mr-1 { margin-right: 0.25rem; }
.keypix-mr-2 { margin-right: 0.5rem; }
.keypix-ml-1 { margin-left: 0.25rem; }
.keypix-ml-2 { margin-left: 0.5rem; }
.keypix-p-1 { padding: 0.25rem; }
.keypix-p-2 { padding: 0.5rem; }
.keypix-rounded-full { border-radius: 9999px; }
.keypix-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* TimeChart Component */
.keypix-time-chart {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  border: 1px solid hsl(var(--border));
  background-color: hsl(var(--card));
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.keypix-time-chart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  border-bottom: 1px solid hsl(var(--border));
  background-color: hsl(var(--muted) / 0.2);
}

.keypix-time-chart-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.keypix-time-chart-zoom {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.keypix-time-chart-zoom-level {
  font-family: monospace;
  font-size: 0.875rem;
  min-width: 60px;
  text-align: center;
  color: hsl(var(--muted-foreground));
}

.keypix-time-chart-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(var(--foreground));
}

.keypix-time-chart-duration {
  font-family: monospace;
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
}

.keypix-time-chart-filter {
  position: relative;
}

.keypix-time-chart-filter-active {
  background-color: hsl(var(--primary) / 0.1);
  border-color: hsl(var(--primary));
}

.keypix-time-chart-filter-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  background-color: hsl(142, 76%, 36%);
  border-radius: 50%;
  font-size: 0.625rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keypix-time-chart-body {
  display: flex;
  overflow: hidden;
}

.keypix-time-chart-legend {
  width: 20rem;
  border-right: 1px solid hsl(var(--border));
  background-color: hsl(var(--muted) / 0.1);
  flex-shrink: 0;
}

.keypix-time-chart-legend-header {
  padding: 1rem;
  border-bottom: 1px solid hsl(var(--border));
  background-color: hsl(var(--muted) / 0.2);
}

.keypix-time-chart-legend-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: hsl(var(--foreground));
  margin-bottom: 0.5rem;
}

.keypix-time-chart-legend-items {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.keypix-time-chart-legend-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.keypix-time-chart-legend-color {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.125rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
}

.keypix-time-chart-legend-label {
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1;
}

.keypix-time-chart-legend-summary {
  text-align: right;
}

.keypix-time-chart-legend-duration {
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 500;
}

.keypix-time-chart-legend-value {
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
}

.keypix-time-chart-content {
  flex: 1;
  overflow: hidden;
}

.keypix-time-chart-scroll {
  position: relative;
  overflow-x: auto;
  cursor: grab;
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: hsl(var(--primary) / 0.3) transparent;
}

.keypix-time-chart-scroll:active {
  cursor: grabbing;
}

.keypix-time-chart-scroll::-webkit-scrollbar {
  height: 8px;
}

.keypix-time-chart-scroll::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 4px;
}

.keypix-time-chart-scroll::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.3);
  border-radius: 4px;
  border: 1px solid transparent;
  background-clip: content-box;
  transition: background-color 0.2s ease-in-out;
}

.keypix-time-chart-scroll::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.5);
  background-clip: content-box;
}

.keypix-time-chart-scroll::-webkit-scrollbar-thumb:active {
  background: hsl(var(--primary) / 0.7);
  background-clip: content-box;
}

.dark .keypix-time-chart-scroll {
  scrollbar-color: hsl(var(--primary) / 0.4) transparent;
}

.dark .keypix-time-chart-scroll::-webkit-scrollbar-thumb {
  background: hsl(var(--primary) / 0.4);
  background-clip: content-box;
}

.dark .keypix-time-chart-scroll::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary) / 0.6);
  background-clip: content-box;
}

.keypix-time-chart-timeline {
  min-width: 100%;
  padding: 1rem;
}

.keypix-time-chart-labels {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid hsl(var(--border));
}

.keypix-time-chart-label {
  flex: 1;
  text-align: center;
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  font-family: monospace;
  border-right: 1px solid hsl(var(--border) / 0.5);
  padding: 0.5rem 0;
  min-width: 60px;
}

.keypix-time-chart-label:last-child {
  border-right: none;
}

.keypix-time-chart-rows {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.keypix-time-chart-row {
  display: flex;
  align-items: center;
  height: 2rem;
}

.keypix-time-chart-timeline-area {
  flex: 1;
  position: relative;
  height: 100%;
  background-color: hsl(var(--muted) / 0.1);
  border-radius: 0.25rem;
  border: 1px solid hsl(var(--border));
}

.keypix-time-chart-bar {
  position: absolute;
  top: 0;
  bottom: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 2px;
}

.keypix-time-chart-bar:hover {
  opacity: 0.8;
  transform: scaleY(1.1);
}

.keypix-time-chart-duration-label {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  font-size: 0.75rem;
  font-family: monospace;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  z-index: 10;
}

.keypix-time-chart-event {
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 20;
}

.keypix-time-chart-event-line {
  width: 1px;
  height: 100%;
  border-left: 2px dashed hsl(0, 84%, 60%);
}

.keypix-time-chart-event-icon {
  position: absolute;
  top: 0;
  left: 0.25rem;
  width: 1rem;
  height: 1rem;
  background-color: hsl(0, 84%, 60%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  z-index: 30;
}

.keypix-time-chart-current-time {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: hsl(var(--primary));
  z-index: 40;
}

.keypix-time-chart-debug {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.75rem;
  color: hsl(0, 84%, 60%);
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
}

/* Additional utility classes */
.keypix-space-y-2 > * + * { margin-top: 0.5rem; }
.keypix-space-y-3 > * + * { margin-top: 0.75rem; }
.keypix-space-x-2 > * + * { margin-left: 0.5rem; }
.keypix-space-x-4 > * + * { margin-left: 1rem; }
.keypix-h-8 { height: 2rem; }
.keypix-h-full { height: 100%; }
.keypix-w-20 { width: 5rem; }
.keypix-w-24 { width: 6rem; }
.keypix-w-80 { width: 20rem; }
.keypix-min-w-full { min-width: 100%; }
.keypix-min-w-\[60px\] { min-width: 60px; }
.keypix-flex-1 { flex: 1 1 0%; }
.keypix-overflow-hidden { overflow: hidden; }
.keypix-overflow-x-auto { overflow-x: auto; }
.keypix-border-b { border-bottom-width: 1px; }
.keypix-border-r { border-right-width: 1px; }
.keypix-border-gray-200 { border-color: hsl(var(--border)); }
.keypix-border-gray-100 { border-color: hsl(var(--border) / 0.5); }
.keypix-bg-gray-50 { background-color: hsl(var(--muted) / 0.1); }
.keypix-bg-gray-200 { background-color: hsl(var(--border)); }
.keypix-bg-white { background-color: hsl(var(--background)); }
.keypix-text-gray-600 { color: hsl(var(--muted-foreground)); }
.keypix-text-gray-900 { color: hsl(var(--foreground)); }
.keypix-text-xs { font-size: 0.75rem; line-height: 1rem; }
.keypix-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.keypix-font-mono { font-family: monospace; }
.keypix-font-medium { font-weight: 500; }
.keypix-font-semibold { font-weight: 600; }
.keypix-text-center { text-align: center; }
.keypix-text-left { text-align: left; }
.keypix-text-right { text-align: right; }
.keypix-pr-4 { padding-right: 1rem; }
.keypix-pl-4 { padding-left: 1rem; }
.keypix-px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
.keypix-py-0\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
.keypix-mb-2 { margin-bottom: 0.5rem; }
.keypix-mb-4 { margin-bottom: 1rem; }
.keypix-mt-4 { margin-top: 1rem; }
.keypix-last\:keypix-border-r-0:last-child { border-right-width: 0; }
.keypix-z-10 { z-index: 10; }
.keypix-z-20 { z-index: 20; }
.keypix-z-30 { z-index: 30; }
.keypix-z-40 { z-index: 40; }
.keypix-z-50 { z-index: 50; }
.keypix-transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.keypix-duration-200 { transition-duration: 200ms; }
.keypix-cursor-grab { cursor: grab; }
.keypix-cursor-grabbing { cursor: grabbing; }
.keypix-bg-black { background-color: black; }
.keypix-bg-opacity-50 { background-color: rgba(0, 0, 0, 0.5); }
.keypix-bg-red-500 { background-color: hsl(0, 84%, 60%); }
.keypix-bg-blue-500 { background-color: hsl(var(--primary)); }
.keypix-border-red-400 { border-color: hsl(0, 84%, 60%); }
.keypix-border-dashed { border-style: dashed; }
.keypix-border-l-2 { border-left-width: 2px; }
.keypix-w-px { width: 1px; }
.keypix-w-4 { width: 1rem; }
.keypix-h-4 { height: 1rem; }
.keypix-h-6 { height: 1.5rem; }
.keypix-top-0 { top: 0; }
.keypix-top-1 { top: 0.25rem; }
.keypix-left-1 { left: 0.25rem; }
.keypix-bottom-0 { bottom: 0; }
.keypix-relative { position: relative; }
.keypix-absolute { position: absolute; }
.keypix-rounded { border-radius: 0.25rem; }
.keypix-rounded-full { border-radius: 9999px; }
.keypix-text-white { color: white; }
.keypix-flex-shrink-0 { flex-shrink: 0; }
.keypix-justify-between { justify-content: space-between; }
.keypix-items-center { align-items: center; }
.keypix-gap-2 { gap: 0.5rem; }
.keypix-gap-4 { gap: 1rem; }
.keypix-p-4 { padding: 1rem; }
.keypix-border-b { border-bottom-width: 1px; }
.keypix-border-gray-200 { border-color: hsl(var(--border)); }
.keypix-bg-gray-50 { background-color: hsl(var(--muted) / 0.1); }
.keypix-text-gray-600 { color: hsl(var(--muted-foreground)); }
.keypix-text-gray-900 { color: hsl(var(--foreground)); }
.keypix-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.keypix-font-semibold { font-weight: 600; }
.keypix-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.keypix-font-mono { font-family: monospace; }
.keypix-min-w-\[60px\] { min-width: 60px; }
.keypix-text-center { text-align: center; }
.keypix-border-r { border-right-width: 1px; }
.keypix-border-gray-100 { border-color: hsl(var(--border) / 0.5); }
.keypix-last\:keypix-border-r-0:last-child { border-right-width: 0; }
.keypix-space-y-2 > * + * { margin-top: 0.5rem; }
.keypix-h-8 { height: 2rem; }
.keypix-flex-1 { flex: 1 1 0%; }
.keypix-relative { position: relative; }
.keypix-h-full { height: 100%; }
.keypix-bg-gray-50 { background-color: hsl(var(--muted) / 0.1); }
.keypix-rounded { border-radius: 0.25rem; }
.keypix-border { border-width: 1px; }
.keypix-border-gray-200 { border-color: hsl(var(--border)); }
.keypix-absolute { position: absolute; }
.keypix-top-0 { top: 0; }
.keypix-bottom-0 { bottom: 0; }
.keypix-rounded { border-radius: 0.25rem; }
.keypix-cursor-pointer { cursor: pointer; }
.keypix-transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.keypix-duration-200 { transition-duration: 200ms; }
.keypix-hover\:keypix-opacity-80:hover { opacity: 0.8; }
.keypix-top-1 { top: 0.25rem; }
.keypix-left-1 { left: 0.25rem; }
.keypix-text-xs { font-size: 0.75rem; line-height: 1rem; }
.keypix-font-mono { font-family: monospace; }
.keypix-text-white { color: white; }
.keypix-bg-black { background-color: black; }
.keypix-bg-opacity-50 { background-color: rgba(0, 0, 0, 0.5); }
.keypix-px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
.keypix-py-0\.5 { padding-top: 0.125rem; padding-bottom: 0.125rem; }
.keypix-rounded { border-radius: 0.25rem; }
.keypix-z-20 { z-index: 20; }
.keypix-w-px { width: 1px; }
.keypix-h-full { height: 100%; }
.keypix-border-l-2 { border-left-width: 2px; }
.keypix-border-dashed { border-style: dashed; }
.keypix-border-red-400 { border-color: hsl(0, 84%, 60%); }
.keypix-top-0 { top: 0; }
.keypix-left-1 { left: 0.25rem; }
.keypix-w-4 { width: 1rem; }
.keypix-h-4 { height: 1rem; }
.keypix-bg-red-500 { background-color: hsl(0, 84%, 60%); }
.keypix-rounded-full { border-radius: 9999px; }
.keypix-flex { display: flex; }
.keypix-items-center { align-items: center; }
.keypix-justify-center { justify-content: center; }
.keypix-text-white { color: white; }
.keypix-text-xs { font-size: 0.75rem; line-height: 1rem; }
.keypix-mt-4 { margin-top: 1rem; }
.keypix-h-6 { height: 1.5rem; }
.keypix-bg-blue-500 { background-color: hsl(var(--primary)); }
.keypix-z-30 { z-index: 30; }
.keypix-z-50 { z-index: 50; }
.keypix-text-red-500 { color: hsl(0, 84%, 60%); }
.keypix-overflow-hidden { overflow: hidden; }
.keypix-min-w-full { min-width: 100%; }
.keypix-cursor-grab { cursor: grab; user-select: none; }
.keypix-cursor-grabbing { cursor: grabbing; }
.keypix-active\:keypix-cursor-grabbing:active { cursor: grabbing; }
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