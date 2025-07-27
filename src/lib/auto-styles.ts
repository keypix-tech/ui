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