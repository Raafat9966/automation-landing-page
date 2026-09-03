// Runs before first paint to set the theme class — prevents a light/dark flash.
const script = `(function(){try{var s=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=s==='dark'||(s!=='light'&&m);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
