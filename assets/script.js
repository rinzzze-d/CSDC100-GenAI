const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const faqIcon = document.getElementById('faq-icon');
const ethicsIcon = document.getElementById('ethics-icon');
const articleIcon = document.getElementById('article-icon');
const iconPaths = {
    light: {
        toggle: 'assets/images/light-mode.png',
        faq: 'assets/images/FAQs.png',
        ethics: 'assets/images/Ethics.png',
        article: 'assets/images/Article.png'
    },
    dark: {
        toggle: 'assets/images/dark-mode.png',
        faq: 'assets/images/FAQs -dark.png',
        ethics: 'assets/images/Ethics-dark.png',
        article: 'assets/images/Article-dark.png'
    }
};
function applyTheme(isDark) {
    body.classList.toggle('dark-mode', isDark);
    themeIcon.src = isDark ? iconPaths.dark.toggle : iconPaths.light.toggle;
    if (faqIcon) faqIcon.src = isDark ? iconPaths.dark.faq : iconPaths.light.faq;
    if (ethicsIcon) ethicsIcon.src = isDark ? iconPaths.dark.ethics : iconPaths.light.ethics;
    if (articleIcon) articleIcon.src = isDark ? iconPaths.dark.article : iconPaths.light.article;
}
const savedTheme = localStorage.getItem('theme');
const isDarkMode = savedTheme === 'dark';
applyTheme(isDarkMode);
themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
