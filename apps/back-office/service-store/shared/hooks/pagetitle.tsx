import React, { useEffect, useState } from "react";

const usePageTitle = title => {
  const [Page_title, setPageTitle] = useState(title);
   useEffect(() => {
    document.title = Page_title; 
  },[Page_title]);

  return [Page_title, setPageTitle];
};

export {usePageTitle};