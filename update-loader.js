const fs = require('fs');
const path = require('path');

// مسیر فایل nextjs-loader.js
const loaderPath = path.join(__dirname, '..', 'js', 'nextjs-loader.js');

// مسیر پوشه out
const outDir = path.join(__dirname, '.next');

// بررسی وجود پوشه‌های مورد نیاز
const cssDir = path.join(outDir, 'static', 'css');
const jsDir = path.join(outDir, 'static', 'chunks');

if (!fs.existsSync(cssDir) || !fs.existsSync(jsDir)) {
    console.error('Required directories do not exist. Please check the build process.');
    process.exit(1);
}

try {
    // پیدا کردن فایل‌های CSS و JS
    const cssFiles = fs.readdirSync(cssDir);
    const jsFiles = fs.readdirSync(jsDir);

    // پیدا کردن فایل‌های اصلی
    const cssFile = cssFiles.find(file => file.endsWith('.css'));
    const mainJsFile = jsFiles.find(file => file.startsWith('main-'));

    if (!cssFile || !mainJsFile) {
        console.error('Could not find CSS or JS files');
        process.exit(1);
    }

    // بررسی وجود فایل nextjs-loader.js
    if (!fs.existsSync(loaderPath)) {
        console.error('nextjs-loader.js does not exist at:', loaderPath);
        process.exit(1);
    }

    // خواندن محتوای فایل nextjs-loader.js
    let loaderContent = fs.readFileSync(loaderPath, 'utf8');

    // جایگزینی مسیرهای فایل‌ها
    loaderContent = loaderContent.replace(
        /href = '\/backend\/wp-content\/themes\/wp-theme\/frontend\/out\/_next\/static\/css\/[^']+'/,
        `href = '/backend/wp-content/themes/wp-theme/frontend/.next/static/css/${cssFile}'`
    );

    loaderContent = loaderContent.replace(
        /src = '\/backend\/wp-content\/themes\/wp-theme\/frontend\/out\/_next\/static\/chunks\/[^']+'/,
        `src = '/backend/wp-content/themes/wp-theme/frontend/.next/static/chunks/${mainJsFile}'`
    );

    // نوشتن محتوای جدید در فایل
    fs.writeFileSync(loaderPath, loaderContent);

    console.log('Updated nextjs-loader.js with new file paths:');
    console.log(`CSS: ${cssFile}`);
    console.log(`JS: ${mainJsFile}`);
} catch (error) {
    console.error('Error updating loader:', error);
    process.exit(1);
} 