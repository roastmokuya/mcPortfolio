export const useIsMobile = () => {
  const isMobile = () => {
    const mobileDevices = [
      "Android",
      "webOS",
      "iPhone",
      "iPad",
      "iPod",
      "BlackBerry",
      "Windows Phone",
    ];

    for (var i = 0; i < mobileDevices.length; i++) {
      if (navigator.userAgent.match(mobileDevices[i])) {
        return true;
      }
    }

    return false;
  };

  return { isMobile };
};
