#!/usr/bin/env node

/**
 * PRE-FLIGHT CHECK SCRIPT
 * 
 * Verifies all prerequisites are in place before running the routing fix
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 PRE-FLIGHT CHECKS FOR ROUTING FIX');
console.log('━'.repeat(60));
console.log('');

let allChecksPassed = true;

// Check 1: Desktop72.tsx exists
console.log('1️⃣  Checking Desktop72.tsx exists...');
const desktop72Path = path.join(__dirname, 'src', 'imports', 'Desktop72.tsx');
if (fs.existsSync(desktop72Path)) {
  console.log('   ✅ Desktop72.tsx found');
} else {
  console.log('   ❌ Desktop72.tsx NOT found');
  allChecksPassed = false;
}

// Check 2: navigationHelper.ts has initializeNavigation
console.log('2️⃣  Checking navigationHelper.ts is updated...');
const navHelperPath = path.join(__dirname, 'src', 'app', 'utils', 'navigationHelper.ts');
if (fs.existsSync(navHelperPath)) {
  const navHelperContent = fs.readFileSync(navHelperPath, 'utf8');
  if (navHelperContent.includes('initializeNavigation')) {
    console.log('   ✅ navigationHelper.ts has initializeNavigation()');
  } else {
    console.log('   ❌ navigationHelper.ts missing initializeNavigation()');
    console.log('      This must be added first!');
    allChecksPassed = false;
  }
  if (navHelperContent.includes('navigateToService')) {
    console.log('   ✅ navigationHelper.ts has navigation functions');
  } else {
    console.log('   ❌ navigationHelper.ts missing navigation functions');
    allChecksPassed = false;
  }
} else {
  console.log('   ❌ navigationHelper.ts NOT found');
  allChecksPassed = false;
}

// Check 3: App.tsx has NavigationInitializer
console.log('3️⃣  Checking App.tsx is updated...');
const appPath = path.join(__dirname, 'src', 'app', 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('NavigationInitializer')) {
    console.log('   ✅ App.tsx has NavigationInitializer');
  } else {
    console.log('   ❌ App.tsx missing NavigationInitializer');
    console.log('      This must be added first!');
    allChecksPassed = false;
  }
  if (appContent.includes('initializeNavigation')) {
    console.log('   ✅ App.tsx imports initializeNavigation');
  } else {
    console.log('   ❌ App.tsx missing initializeNavigation import');
    allChecksPassed = false;
  }
} else {
  console.log('   ❌ App.tsx NOT found');
  allChecksPassed = false;
}

// Check 4: Desktop72.tsx has navigation helper imports
console.log('4️⃣  Checking Desktop72.tsx has navigation imports...');
if (fs.existsSync(desktop72Path)) {
  const desktop72Content = fs.readFileSync(desktop72Path, 'utf8');
  if (desktop72Content.includes('navigateToService')) {
    console.log('   ✅ Desktop72.tsx has navigation helper imports');
  } else {
    console.log('   ❌ Desktop72.tsx missing navigation helper imports');
    console.log('      This must be added first!');
    allChecksPassed = false;
  }
}

// Check 5: No backup exists (clean state)
console.log('5️⃣  Checking for existing backup...');
const backupPath = path.join(__dirname, 'src', 'imports', 'Desktop72.tsx.backup');
if (fs.existsSync(backupPath)) {
  console.log('   ⚠️  WARNING: Backup file already exists');
  console.log('      Previous backup will be overwritten');
} else {
  console.log('   ✅ No existing backup (clean state)');
}

console.log('');
console.log('━'.repeat(60));

if (allChecksPassed) {
  console.log('✅ ALL PRE-FLIGHT CHECKS PASSED');
  console.log('');
  console.log('You are ready to run the routing fix:');
  console.log('   node fix-routing.js');
  console.log('');
  process.exit(0);
} else {
  console.log('❌ SOME CHECKS FAILED');
  console.log('');
  console.log('Please fix the issues above before running the routing fix.');
  console.log('');
  console.log('Required prerequisites:');
  console.log('  1. navigationHelper.ts must have initializeNavigation()');
  console.log('  2. App.tsx must have NavigationInitializer component');
  console.log('  3. Desktop72.tsx must import navigation helpers');
  console.log('');
  process.exit(1);
}
