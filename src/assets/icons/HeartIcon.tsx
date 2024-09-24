import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IconBase} from '../icons/Icon';

export function HeartIcon({size = 20, color = 'black'}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M10.0006 2.18077C11.0581 1.4205 12.3301 1 13.651 1C15.3591 1 16.9848 1.70302 18.1715 2.93417C19.3486 4.15469 20 5.79507 20 7.4939C20 9.19292 19.3484 10.8335 18.1712 12.054C17.5022 12.7478 16.8323 13.4594 16.1545 14.1794L16.1485 14.1857C14.7741 15.6458 13.3677 17.1399 11.9068 18.5473L11.905 18.5491L11.9007 18.5532L11.8988 18.555C10.8017 19.5967 9.06547 19.5593 8.01469 18.4696L8.53104 17.9717L8.01469 18.4696L1.82831 12.0539L1.8283 12.0538C-0.609423 9.52567 -0.609446 5.46213 1.8283 2.93398L2.2709 3.36074L1.8283 2.93398C4.04164 0.638569 7.51064 0.386109 10.0006 2.18077ZM13.651 2.4346C12.4804 2.4346 11.3552 2.86432 10.4719 3.63602C10.2014 3.87238 9.79777 3.87217 9.52749 3.63553C7.59423 1.9429 4.68387 2.03931 2.86102 3.92976C0.959126 5.90218 0.959129 9.0856 2.86102 11.0581C2.86102 11.0581 2.86102 11.0581 2.86102 11.0581L9.04739 17.4738C9.55055 17.9956 10.384 18.0141 10.9101 17.5155C10.9104 17.5152 10.9107 17.5149 10.911 17.5146L10.9115 17.5142C12.3449 16.1331 13.7295 14.6625 15.1099 13.196L15.1115 13.1944C15.7877 12.4761 16.463 11.7587 17.1385 11.0582L17.1386 11.0581C18.0534 10.1096 18.5654 8.82792 18.5654 7.4939C18.5654 6.15999 18.0536 4.87842 17.1388 3.92993L17.1386 3.92977C16.2174 2.97403 14.9624 2.4346 13.651 2.4346Z"
      />
    </Svg>
  );
}
