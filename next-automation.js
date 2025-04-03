const { spawn } = require('child_process');
const path = require('path');

// تنظیم مسیرهای مورد نیاز
const frontendDir = path.join(__dirname);
const outDir = path.join(frontendDir, '.next');

// تابع برای اجرای دستورات
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, {
      ...options,
      stdio: 'inherit',
      shell: true
    });

    process.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

// تابع اصلی
async function main() {
  try {
    console.log('🚀 Starting Next.js in production mode...');
    
    // اجرای دستور npm start
    await runCommand('npm', ['start'], { cwd: frontendDir });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// اجرای تابع اصلی
main(); 