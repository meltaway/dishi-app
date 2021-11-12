import React from 'react';
// import {func, node} from 'prop-types';
import {Platform, StatusBar} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import styled, {css} from 'styled-components/native';

import {Flex, Button, Typography} from './../atoms';

// import {NOOP} from '@constants';
// import {useUnreadMessagesCount} from '@hooks';

// import Logo from '@icons/logo';
// import Close from '@icons/headerClose';
// import Done from '@icons/done';
// import Settings from '@icons/settings';
// import Menu from '@icons/headerMenu';
// import Return from '@icons/return';
// import Search from '@icons/search';
// import PlusIcon from '@icons/plus.svg';
// import ThreeDots from '@icons/three-dots.svg';

const CommonHeaderContainer = styled.View`
  ${({theme, type, withZIndex = true}) => css`
    background-color: ${theme.colors.lightGreen};
    ${Platform.select({
      ios: 'box-shadow: 0 2px 4px rgba(133, 147, 161, 0.5)',
      android: 'elevation: 3',
    })};
    ${withZIndex && 'z-index: 50'};
    height: ${Platform.select({
      ios: type === 'fullHeight' ? '80px' : '35px',
      android:
        type === 'fullHeight' ? `${160 - StatusBar.currentHeight}px` : '70px',
    })};
    margin-top: 20px;
  `}
`;

const SearchPageHeaderContainer = styled.View`
  ${({theme, type, isExpanded}) => css`
    background-color: ${theme.colors.lightGreen};
    ${Platform.select({
      ios: 'box-shadow: 0 0.5px 0 rgba(133, 147, 161, 0.5)',
      android: 'elevation: 3',
    })};
    z-index: 50;
    height: ${Platform.select({
      ios: type === 'fullHeight' ? '230px' : '190px',
      android:
        type === 'fullHeight'
          ? `${(!isExpanded ? 180 : 200) - StatusBar.currentHeight}px`
          : '150px',
    })};
  `}
`;

const StickyWrapper = styled(Flex)`
  position: relative;
`;

const StickLeft = styled(Flex)`
  position: absolute;
  left: 20px;
  bottom: 15px;
`;

const StickRight = styled(Flex)`
  position: absolute;
  right: 17px;
  bottom: 20px;
`;

const HomeHeader = ({children}) => {
  return (
    <CommonHeaderContainer type="fullHeight">
      <Flex>{children}</Flex>
    </CommonHeaderContainer>
  );
};

// const SubheaderWithReturnBackAndTitle = ({
//   customOnPress,
//   headerSign,
//   isExpanded,
// }) => {
//   const navigation = useNavigation();

//   const onPress = () => {
//     customOnPress ? customOnPress() : navigation.goBack();
//   };

//   return (
//     <Flex
//       row
//       itemsCenter
//       marginTop={Platform.select({
//         ios: 'xl6',
//         android: !isExpanded ? 'md' : null,
//       })}
//       marginBottom={Platform.select({
//         ios: null,
//         android: !isExpanded ? 'md' : null,
//       })}>
//       <Flex width="20%" itemsCenter>
//         <Button.Container onPress={onPress}>
//           <Return width="32" height="32" />
//         </Button.Container>
//       </Flex>
//       <Flex width="60%" itemsCenter>
//         <Typography size="xl2" bold numberOfLines={2} align="center">
//           {headerSign}
//         </Typography>
//       </Flex>
//       <Flex width="20%" />
//     </Flex>
//   );
// };

// const ThreeItemsHeader = ({
//   children,
//   rightIcon,
//   leftIcon,
//   returnIconCustomAction = null,
//   onLayout = NOOP,
//   onSubmit = NOOP,
// }) => {
//   const navigation = useNavigation();

//   const returnBack = () => {
//     navigation.goBack();
//   };

//   const chooseIcon = selectiveIcon => {
//     switch (selectiveIcon) {
//       case 'close':
//         return (
//           <Button.Container onPress={returnBack}>
//             <Close width="16" height="16" />
//           </Button.Container>
//         );
//       case 'return':
//         return (
//           <Button.Container onPress={returnIconCustomAction || returnBack}>
//             <Return width="32" height="32" />
//           </Button.Container>
//         );
//       case 'done':
//         return (
//           <Button.Container onPress={onSubmit}>
//             <Done width="24" height="16" />
//           </Button.Container>
//         );
//       case 'settings':
//         return <Settings width="24" height="24" />;
//       case 'plus':
//         return (
//           <Button.Container onPress={onSubmit}>
//             <PlusIcon width="16" height="16" />
//           </Button.Container>
//         );
//       case 'threeDots':
//         return (
//           <Button.Container onPress={onSubmit}>
//             <ThreeDots />
//           </Button.Container>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <CommonHeaderContainer onLayout={onLayout}>
//       <Flex
//         row
//         itemsCenter
//         paddingTop={Platform.select({ios: 'xl6', android: 'xl2'})}
//         paddingBottom={Platform.select({ios: null, android: 'xl2'})}>
//         <Flex width="20%" itemsCenter>
//           {chooseIcon(leftIcon)}
//         </Flex>
//         <Flex width="60%" itemsCenter>
//           {children}
//         </Flex>
//         <Flex width="20%" itemsCenter>
//           {chooseIcon(rightIcon)}
//         </Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const OneItemHeader = () => {
//   const navigation = useNavigation();

//   const [hasUnreadMessages] = useUnreadMessagesCount();

//   const handleNavigateMenu = () => {
//     navigation.navigate('ProfileNavigator', {screen: 'ProfileMenuScreen'});
//   };

//   const handleNavigateNotifications = () => {
//     navigation.navigate('ProfileNavigator', {
//       screen: 'NotificationsScreen',
//     });
//   };

//   return (
//     <CommonHeaderContainer>
//       <Flex
//         row
//         itemsCenter
//         paddingTop={Platform.select({ios: 'xl6', android: null})}
//         justifyEnd
//         paddingRight="xl">
//         <Button.Container
//           marginRight="xl4"
//           onPress={handleNavigateNotifications}>
//           <MessageIcon hasUnreadMessages={hasUnreadMessages} />
//         </Button.Container>
//         <Button.Container onPress={handleNavigateMenu}>
//           <Menu width="24" height="24" />
//         </Button.Container>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const HeaderWithSearch = ({headerSign, children, onIconPress}) => {
//   const navigation = useNavigation();

//   const returnBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <CommonHeaderContainer type="fullHeight">
//       <Flex column justifyBetween>
//         <Flex
//           row
//           itemsCenter
//           marginTop={Platform.select({ios: 'xl6', android: 'xl2'})}
//           paddingBottom={Platform.select({ios: null, android: 'xl2'})}>
//           <Flex width="20%" itemsCenter>
//             <Button.Container onPress={returnBack}>
//               <Return width="32" height="32" />
//             </Button.Container>
//           </Flex>
//           <Flex
//             itemsCenter
//             alignItems="center"
//             justifyContent="center"
//             width="60%">
//             <Typography bold size="xl2" align="center">
//               {headerSign}
//             </Typography>
//           </Flex>
//           <Flex row itemsCenter justifyEnd width="20%">
//             <Button.Container marginRight="xl4" onPress={onIconPress}>
//               <Search width="24" height="24" />
//             </Button.Container>
//           </Flex>
//         </Flex>
//         <Flex marginX="xl" grow={0}>
//           {children}
//         </Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const HeaderWithSearchWithoutBackButton = ({
//   headerSign,
//   children,
//   onIconPress,
// }) => {
//   return (
//     <CommonHeaderContainer type="fullHeight">
//       <Flex column justifyBetween>
//         <Flex
//           row
//           itemsCenter
//           marginTop={Platform.select({ios: 'xl6', android: null})}>
//           <Flex width="20%" itemsCenter />
//           <Flex
//             itemsCenter
//             alignItems="center"
//             justifyContent="center"
//             width="60%"
//             marginTop={Platform.select({ios: null, android: 'xl'})}>
//             <Typography bold size="xl2" align="center">
//               {headerSign}
//             </Typography>
//           </Flex>
//           <Flex
//             row
//             itemsCenter
//             justifyEnd
//             width="20%"
//             marginTop={Platform.select({ios: null, android: 'xl'})}>
//             <Button.Container marginRight="xl4" onPress={onIconPress}>
//               <Search width="24" height="24" />
//             </Button.Container>
//           </Flex>
//         </Flex>
//         <Flex
//           marginX="xl"
//           grow={0}
//           marginTop={Platform.select({ios: null, android: 'sm'})}>
//           {children}
//         </Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const WithReturnAndSign = ({headerSign, children, onIconPress}) => {
//   const navigation = useNavigation();

//   const returnBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <CommonHeaderContainer type="fullHeight">
//       <Flex column justifyBetween>
//         <SubheaderWithReturnBackAndTitle
//           headerSign={headerSign}
//           customOnPress={onIconPress || returnBack}
//         />
//         <Flex marginX="xl" grow={0}>
//           {children}
//         </Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const WithReturnAndTabs = ({children}) => {
//   const navigation = useNavigation();

//   const returnBack = () => {
//     navigation.goBack();
//   };
//   return (
//     <CommonHeaderContainer>
//       <Flex row justifyBetween itemsEnd marginX="xl">
//         <Button.Container
//           onPress={returnBack}
//           paddingRight="xl"
//           paddingBottom="sm">
//           <Return width="32" height="32" />
//         </Button.Container>
//         <Flex>{children}</Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const WithReturnAndSignHalfHeight = ({headerSign, customOnPress}) => {
//   return (
//     <CommonHeaderContainer withZIndex={false}>
//       <Flex row itemsCenter justifyCenter>
//         <SubheaderWithReturnBackAndTitle
//           headerSign={headerSign}
//           customOnPress={customOnPress}
//         />
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// const SearchPageHeader = ({
//   headerSign,
//   children,
//   customOnPress,
//   type = 'fullHeight',
//   isExpanded,
// }) => {
//   return (
//     <SearchPageHeaderContainer type={type} isExpanded={isExpanded}>
//       <Flex column>
//         <SubheaderWithReturnBackAndTitle
//           headerSign={headerSign}
//           customOnPress={customOnPress}
//           isExpanded={isExpanded}
//         />
//         <Flex column justifyBetween marginX="xl">
//           {children}
//         </Flex>
//       </Flex>
//     </SearchPageHeaderContainer>
//   );
// };

// const HeaderWithTabsWithoutIcons = ({headerSign, children}) => {
//   return (
//     <CommonHeaderContainer type="fullHeight">
//       <Flex column justifyBetween>
//         <Flex
//           row
//           itemsCenter
//           marginTop={Platform.select({ios: 'xl6', android: null})}>
//           <Flex
//             itemsCenter
//             alignItems="center"
//             justifyContent="center"
//             width="100%"
//             marginTop={Platform.select({ios: null, android: 'xl'})}>
//             <Typography bold size="xl2" align="center">
//               {headerSign}
//             </Typography>
//           </Flex>
//         </Flex>
//         <Flex
//           marginX="xl"
//           grow={0}
//           marginTop={Platform.select({ios: null, android: 'sm'})}>
//           {children}
//         </Flex>
//       </Flex>
//     </CommonHeaderContainer>
//   );
// };

// ThreeItemsHeader.propTypes = {
//   children: node,
// };

// ThreeItemsHeader.defaultProps = {
//   children: null,
// };

// WithReturnAndSign.propTypes = {
//   children: node.isRequired,
//   onIconPress: func,
// };

// WithReturnAndSign.defaultProps = {
//   onIconPress: null,
// };

const Header = {
  HomeHeader,
};
export default Header;
