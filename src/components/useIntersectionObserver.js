import { useState, useEffect } from "react";

const useIntersectionObserver = (elementRefs) => {
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (!visibleEntries.length) return;

        // Assuming the first section in view is the active one
        const firstVisibleEntry = visibleEntries[0];
        setActiveSectionId(firstVisibleEntry.target.id);
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    );

    elementRefs.forEach((ref) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elementRefs.forEach((ref) => {
        if (ref && ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [elementRefs]);

  return activeSectionId;
};

export default useIntersectionObserver;
