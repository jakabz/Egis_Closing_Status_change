import { FieldCustomizerContext, ListItemAccessor } from '@microsoft/sp-listview-extensibility';
import { PrimaryButton } from 'office-ui-fabric-react';
import * as React from 'react';

//import styles from './ClosingStatusChange.module.scss';
import { SetStatusPanelForm } from './SetStatusPanelForm';

export interface IClosingStatusChangeProps {
  row: ListItemAccessor;
  context: FieldCustomizerContext;
  adminGroup: string;
}

export interface IClosingStatusChangeState {
  openPanel: boolean;
}

export default class ClosingStatusChange extends React.Component<IClosingStatusChangeProps, IClosingStatusChangeState> {

  constructor(props: IClosingStatusChangeProps) {
    super(props);
    this.state = {
      openPanel: false
    };
  }

  public render(): React.ReactElement<{}> {

    const openStatusPanel = (): void => {
      this.setState({ openPanel: true });
    };

    return (
      <React.Fragment>
        <PrimaryButton 
          text="Set status" 
          onClick={openStatusPanel}
          allowDisabledFocus 
          disabled={false} 
          //iconProps={{ iconName: 'NavigateForward' }}
        />
        {
          this.state.openPanel && <SetStatusPanelForm
              row={this.props.row}
              context={this.props.context}
              adminGroup={this.props.adminGroup}
              closePanel={(openPanel) => this.setState({ openPanel: openPanel })}
            />
        }

      </React.Fragment>
    );
  }
}
