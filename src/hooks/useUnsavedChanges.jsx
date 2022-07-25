import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {ModalWindow} from './../components/molecules';

const useUnsavedChanges = hasUserDataInputsChanged => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  const [
    hasUnsavedChangesModalVisible,
    setHasUnsavedChangesModalVisible,
  ] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  useEffect(() => {
    setHasUnsavedChanges(hasUserDataInputsChanged);
  }, [hasUserDataInputsChanged]);

  useEffect(() => {
    const closePageListener = navigation.addListener(
      'beforeRemove',
      async e => {
        if (hasUnsavedChanges) {
          // Prevent default behavior of leaving the screen
          e.preventDefault();
          setHasUnsavedChangesModalVisible(true);
        }
        // If we don't have unsaved changes, then we don't need to do anything
      },
    );
    return () => closePageListener();
  }, [navigation, hasUnsavedChanges]);

  const hideHasUnsavedChangesModal = () => {
    setHasUnsavedChangesModalVisible(false);
  };

  const onCancelSave = () => {
    setHasUnsavedChanges(false);
    setHasUnsavedChangesModalVisible(false);

    setTimeout(() => {
      navigation.goBack();
    }, 0);
  };

  const Modal = (
    <ModalWindow.WithTwoButtons
      isOpen={hasUnsavedChangesModalVisible}
      title={t('Modal.UnsavedChanges.Title')}
      subtitle={t('Modal.UnsavedChanges.Subtitle')}
      firstButtonText={t('Modal.Cancel')}
      secondButtonText={t('Modal.Ok')}
      onFirstButtonPress={hideHasUnsavedChangesModal}
      onSecondButtonPress={onCancelSave}
      buttonsRow
    />
  );

  return [Modal, setHasUnsavedChanges];
};

export default useUnsavedChanges;
