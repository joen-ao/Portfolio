// Google Analytics tracking utilities

// Track file downloads
export const trackDownload = (fileName, language) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'file_download', {
      file_name: fileName,
      language: language,
      file_type: 'pdf',
      custom_parameter_1: 'cv_download'
    });
  }
};

// Track social media clicks
export const trackSocialClick = (platform, url) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'social_click', {
      social_platform: platform,
      link_url: url,
      custom_parameter_1: 'social_media'
    });
  }
};

// Track contact form submissions
export const trackContactSubmission = (success = true) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'form_submit', {
      form_name: 'contact_form',
      success: success,
      custom_parameter_1: 'contact'
    });
  }
};

// Track section views (when user scrolls to a section)
export const trackSectionView = (sectionName) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'section_view', {
      section_name: sectionName,
      custom_parameter_1: 'navigation'
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, section) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'button_click', {
      button_name: buttonName,
      section: section,
      custom_parameter_1: 'interaction'
    });
  }
};