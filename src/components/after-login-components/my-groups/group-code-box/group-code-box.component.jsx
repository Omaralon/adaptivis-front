import React from 'react';
import { Input, Button } from 'antd';

import TitledWrapper from 'components/after-login-components/general-purpose/titled-wrapper/titled-wrapper.component';
import { BoxContainer, ButtonContainer } from './group-code-box.styles';

const AccessClassBox = () => {
  return (
    <TitledWrapper title='Asignarse a un curso'>
      <BoxContainer>
        <h3 style={{ color: '#fff' }}>Ingrese el código de acceso:</h3>
        <Input />
        <ButtonContainer>
          <Button>Unirse</Button>
        </ButtonContainer>
      </BoxContainer>
    </TitledWrapper>
  );
};

export default AccessClassBox;
