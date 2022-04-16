// import React, {useCallback, useRef, useState} from 'react';
// import {AppProvider, Avatar, ActionList, Card, TextField, TextContainer, ContextualSaveBar, FormLayout, Modal, Frame, Layout, Loading, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, Toast, TopBar} from '@shopify/polaris';
// import {ArrowLeftMinor, ConversationMinor, HomeMajor, OrdersMajor} from '@shopify/polaris-icons';
// import TextFie from "./TextFie";
// import enTranslations from "@shopify/polaris/locales/en.json";

// //import Navbar from "./component/Navbar";
// import CreatePollPage from "./page/CreatePoll";
// export default function First() {
//   const [PollType, setValue] = useState("1");
//   // const [dataloop, setDataLoop] = useState(TextFie);

//  // const pageMarkup = isLoading ? loadingPageMarkup : CreatePollPage;



//   const handleChange = useCallback(
//     (_checked, newValue) => setValue(newValue),
//     []
//   );

//   const navigationMarkup = (
//     <Navigation location="/">
//       <Navigation.Section
//         items={[
//           {
//             label: 'Back to Shopify',
//             icon: ArrowLeftMinor,
//           },
//         ]}
//       />
//       <Navigation.Section
//         separator
//         title="Jaded Pixel App"
//         items={[
//           {
//             label: 'Dashboard',
//             icon: HomeMajor,
//             onClick: toggleIsLoading,
//           },
//           {
//             label: 'Jaded Pixel Orders',
//             icon: OrdersMajor,
//             onClick: toggleIsLoading,
//           },
//         ]}
//         action={{
//           icon: ConversationMinor,
//           accessibilityLabel: 'Contact support',
//           onClick: toggleModalActive,
//         }}
//       />
//     </Navigation>
//   );

//   const actualPageMarkup = (
//     <CreatePollPage />
//   );

//   return (
//     <>
//       <AppProvider i18n={enTranslations}>
//       <Frame
//           topBar={topBarMarkup}
//           navigation={navigationMarkup}
//         >
//           {actualPageMarkup}
//         </Frame>
//       </AppProvider>
//     </>
//   );
// }
