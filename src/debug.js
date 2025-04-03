console.log('Debug.js loaded');

// Check if wpSettings is available
if (typeof window !== 'undefined') {
  console.log('Window object:', window);
  console.log('wpSettings:', window.wpSettings);
  
  // Add a global error handler
  window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Global error:', {
      message: msg,
      url: url,
      lineNo: lineNo,
      columnNo: columnNo,
      error: error
    });
    return false;
  };
} 