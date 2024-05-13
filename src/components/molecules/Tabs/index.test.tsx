// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import LinkTabs from '.';
// import { BrowserRouter } from 'react-router-dom';

// describe('LinkTabs', () => {
//   const tabNames = ['Tab 1', 'Tab 2', 'Tab 3'];
//   const selectedValue = 'Tab 2';
//   const onClick = jest.fn();

//   it('renders tabs with correct styles', () => {
//     const { getByText } = render(
//       <BrowserRouter>
//         <LinkTabs
//           tabNames={tabNames}
//           selectedValue={selectedValue}
//           onClick={onClick}
//         />
//         ,
//       </BrowserRouter>,
//     );

//     tabNames.forEach((tabName) => {
//       const tab = getByText(tabName);
//       expect(tab).toBeInTheDocument();
//       expect(tab).toHaveStyle(`cursor: pointer`);
//     });

//     const selectedTab = getByText(selectedValue);
//     expect(selectedTab).toHaveStyle(`text-decoration: none`);
//   });

//   it('calls onClick handler when a tab is clicked', () => {
//     const { getByText } = render(
//       <BrowserRouter>
//         <LinkTabs
//           tabNames={tabNames}
//           selectedValue={selectedValue}
//           onClick={onClick}
//         />
//         ,
//       </BrowserRouter>,
//     );

//     const tabToClick = getByText('Tab 3');
//     fireEvent.click(tabToClick);

//     expect(onClick).toHaveBeenCalledWith('tab-3');
//   });
//   it('applies correct text decoration and color based on selected tab', () => {
//     const { getByText } = render(
//       <BrowserRouter>
//         <LinkTabs
//           tabNames={tabNames}
//           selectedValue={selectedValue}
//           onClick={onClick}
//         />
//       </BrowserRouter>,
//     );

//     tabNames.forEach((tabName) => {
//       const tab = getByText(tabName);
//       expect(tab).toHaveStyle(
//         `text-decoration: ${tabName.toLowerCase() === selectedValue.toLowerCase() ? 'none' : 'none'}`,
//       );
//       expect(tab).toHaveStyle(
//         `color: ${tabName.toLowerCase() === selectedValue.toLowerCase() ? 'rgb(0, 75, 185)' : 'rgb(0, 75, 185)'}`,
//       );
//     });
//   });
// });
