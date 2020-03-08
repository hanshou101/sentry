import React from 'react';
import styled from '@emotion/styled';

import Button from 'app/components/button';
import {t} from 'app/locale';

type Props = {
  onCancel: () => void;
  onSave: () => void;
};

const ProjectDataPrivacyActions = ({onCancel, onSave}: Props) => (
  <Wrapper>
    <StyledButton onClick={onCancel}>{t('Cancel')}</StyledButton>
    <StyledButton priority="primary" onClick={onSave}>
      {t('Save Rules')}
    </StyledButton>
  </Wrapper>
);

export default ProjectDataPrivacyActions;

const Wrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  > * {
    margin-right: 14px;
    :last-child {
      margin-right: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 124px;
`;
