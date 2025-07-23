// Test script to verify session storage behavior
console.log('Testing session storage for view tracking...');

const slug = 'fever-in-children-guide';
const sessionKey = `viewed_${slug}`;

console.log('Current session storage value:', sessionStorage.getItem(sessionKey));

// Simulate marking as viewed
sessionStorage.setItem(sessionKey, 'true');
console.log('After setting:', sessionStorage.getItem(sessionKey));

// Test if already viewed
const hasViewedInSession = sessionStorage.getItem(sessionKey);
console.log('Has viewed in session:', !!hasViewedInSession);
