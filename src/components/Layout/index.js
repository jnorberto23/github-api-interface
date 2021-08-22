 import React from 'react';
 import * as S from './styles';

 function Layout ({children}) {
     return(
         <S.WrapperLayout>
             <header>{children}</header>
         </S.WrapperLayout>
     );
 }

 export default Layout;