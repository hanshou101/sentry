import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

import {t} from 'app/locale';
import Button from 'app/components/button';
import {Panel, PanelHeader, PanelBody} from 'app/components/panels';
import SelectControl from 'app/components/forms/selectControl';
import TextField from 'app/components/forms/textField';
import Link from 'app/components/links/link';
import {IconAdd} from 'app/icons/iconAdd';
import {IconDelete} from 'app/icons/iconDelete';

const actions = {
  MASK: 'mask',
  REMOVE: 'remove',
  HASH: 'hash',
  REPLACE: 'replace',
};

const data = {
  CREDIT_CARD_NUMBERS: 'Credit Card Numbers',
  BANK_ACCOUNTS: 'Bank Accounts',
  PASSWORDS: 'Passwords',
  PHONE_NUMBERS: 'Phone Numbers',
  IP_ADDRESSES: 'IP Addresses',
  CUSTOM_REGULAR_EXPRESSION: 'Custom Regular Expression',
};

class ProjectDataPrivacyRulesPanel extends React.Component {
  state = {
    action: actions.MASK,
    data: data.CREDIT_CARD_NUMBERS,
    from: '',
  };

  handleChangeAction = (value: keyof typeof actions) => {
    this.setState({
      method: value,
    });
  };

  handleChangeData = (value: keyof typeof data) => {
    this.setState({
      method: value,
    });
  };

  handleChangeFrom = (value: string) => {
    this.setState({
      from: value,
    });
  };

  render() {
    return (
      <Panel>
        <PanelHeader>{t('Data Privacy Rules')}</PanelHeader>
        <PanelBody>
          <PanelForm>
            <StyledSelectControl
              placeholder={t('Select an action')}
              name="action"
              options={Object.keys(actions).map(key => ({
                label: actions[key],
                value: key,
              }))}
              value={this.state.action}
              onChange={({value}: {value: keyof typeof actions}) =>
                this.handleChangeAction(value)
              }
              maxWidth="157px"
              openOnFocus
            />

            <StyledSelectControl
              placeholder={t('Select data')}
              name="data"
              options={Object.keys(data).map(key => ({
                label: data[key],
                value: key,
              }))}
              value={this.state.data}
              onChange={({value}: {value: keyof typeof data}) =>
                this.handleChangeData(value)
              }
              maxWidth="300px"
              openOnFocus
            />

            <span>{t('from')}</span>
            <StyledTextField
              name="from"
              placeholder={t('ex. strings, numbers, custom')}
              required
              inputStyle={{
                height: '100%',
              }}
            />
            <StyledIconTrash disabled onClick={() => console.log('Deleted Rule')}>
              <IconDelete />
            </StyledIconTrash>
          </PanelForm>
          <PanelAction>
            <StyledLink onClick={() => console.log('Add Rule')}>
              <IconAdd circle />
              <span>{t('Add Rule')}</span>
            </StyledLink>
          </PanelAction>
        </PanelBody>
      </Panel>
    );
  }
}

export default ProjectDataPrivacyRulesPanel;

const PanelForm = styled('div')`
  padding: 18px 22px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e1ec;
  > * {
    margin-right: 17px;
    :last-child {
      margin-right: 0px;
    }
  }
`;

const PanelAction = styled('div')`
  padding: 14px 22px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #3d74db;
  > * {
    margin-right: 5px;
    :last-child {
      margin-right: 0px;
    }
  }
`;

const StyledSelectControl = styled(SelectControl)<{maxWidth: string}>`
  max-width: ${p => p.maxWidth};
  height: 40px;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 0px;
  width: 100%;
  height: 40px;
  > * {
    height: 100%;
    min-height: 100%;
  }
`;

const StyledIconTrash = styled(Button)`
  height: 40px;
  width: 40px;
`;
