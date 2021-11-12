import {useState} from 'react';

const useSectionListUtils = (
  sectionListRef,
  sectionName,
  defaultState = false,
) => {
  const [isSectionHidden, setIsSectionHidden] = useState(defaultState);

  const scrollSectionListToTop = () => {
    if (sectionListRef?.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: 0,
        itemIndex: 0,
        viewPosition: 0,
        animated: true,
      });
    }
  };

  const handleViewableItemsChange = ({changed}) => {
    const isSectionInvisibleNow = changed.find(
      ({item, isViewable}) => item.sectionName === sectionName && !isViewable,
    );

    const isSectionVisibleNow = changed.find(
      ({item, isViewable}) => item.sectionName === sectionName && isViewable,
    );

    if (isSectionInvisibleNow) {
      setIsSectionHidden(true);
    } else if (isSectionVisibleNow) {
      setIsSectionHidden(false);
    }
  };

  return [isSectionHidden, scrollSectionListToTop, handleViewableItemsChange];
};

export default useSectionListUtils;
