import {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';

const HANDLE_ON_END_REACHED_CALLED_OFFSET = -300;

const useInfiniteScrollWithTabs = ({
  tabsObjects,
  tabsLists,
  tabsRequests,
  tabsKeys,
  tabsInitialPageNumbers,
  isPending,
  needToUpdateFollowings,
  initialTabIndex = 0,
  id = null,
  additionalId = null,
}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);

  const [pageNumbers, setPageNumbers] = useState(tabsInitialPageNumbers);

  /*
    Change data in currentList state every time the tab changes
    If list in selected tab is empty -> make a request
  */
  useEffect(() => {
    const currentList = tabsLists[activeTabIndex];

    if (
      !currentList ||
      (needToUpdateFollowings && tabsKeys[activeTabIndex] === 'followings')
    ) {
      fetchNewPageForActiveTab();
    }
  }, [
    activeTabIndex,
    isFocused,
    fetchNewPageForActiveTab,
    needToUpdateFollowings,
    tabsKeys,
    tabsLists,
  ]);

  /*
    Page number is increased in state -> useEffect is fired when state update is finished
    Make request in useEffect for a new page, updated page number is now surely in state

    Before making a request check if any data is already saved in store, if not -- don't make a request
  */
  useEffect(() => {
    const currentList = tabsLists[activeTabIndex];

    if (!isPending && currentList) {
      fetchNewPageForActiveTab();
    }
  }, [
    activeTabIndex,
    fetchNewPageForActiveTab,
    isPending,
    pageNumbers,
    tabsLists,
  ]);

  const fetchNewPageForActiveTab = useCallback(() => {
    // Get appropriate thunk for active list by tab index
    const thunk = tabsRequests[activeTabIndex];
    // Get appropriate list key by tab index
    const activeListKey = tabsKeys[activeTabIndex];
    // Get current page number in the list by tab index
    const activeListPageNumber = pageNumbers[activeListKey];

    /*
      If userId is passed to component -> data is public, so pass ID to thunk as param
      Always pass current page number for the list
    */
    const thunkParams = {page: activeListPageNumber};

    if (id) {
      thunkParams.id = id;
    }
    if (additionalId) {
      thunkParams.additionalId = additionalId;
    }

    // Fire a request to get new items for the currently active list
    thunk && dispatch(thunk(thunkParams));
  }, [
    activeTabIndex,
    additionalId,
    dispatch,
    id,
    pageNumbers,
    tabsKeys,
    tabsRequests,
  ]);

  const incrementPageNumberForActiveTab = () => {
    // Check whether the list is paginated at all
    const canPageNumberBeIncremented = tabsObjects[activeTabIndex].has_more;
    // Check whether the list is not empty and whether another request is not running at the moment
    const shouldPageNumberBeIncremented =
      tabsLists[activeTabIndex] && !isPending;

    if (canPageNumberBeIncremented && shouldPageNumberBeIncremented) {
      const activeListKey = tabsKeys[activeTabIndex];

      const activeListPageNumber = pageNumbers[activeListKey];

      // Increment page number and wait for state to be updated and useEffect to handle update finish
      setPageNumbers({
        ...pageNumbers,
        [activeListKey]: activeListPageNumber + 1,
      });
    }
  };

  const handleOnEndReached = event => {
    /*
      Otherwise if removed onEndReached would be called on initial component render
      Such check allows to make a request only if list end is nearly literally reached
    */
    if (event.distanceFromEnd < HANDLE_ON_END_REACHED_CALLED_OFFSET) {
      return;
    }

    incrementPageNumberForActiveTab();
  };

  const handleRefresh = () => {
    const activeListKey = tabsKeys[activeTabIndex];

    setPageNumbers(prevState => {
      return {...prevState, [activeListKey]: 1};
    });

    fetchNewPageForActiveTab();
  };

  const handleTabPress = index => () => {
    setActiveTabIndex(index);
  };

  return [activeTabIndex, handleTabPress, handleOnEndReached, handleRefresh];
};

export default useInfiniteScrollWithTabs;
