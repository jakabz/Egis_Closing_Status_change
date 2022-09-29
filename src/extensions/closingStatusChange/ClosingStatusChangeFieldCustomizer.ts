import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BaseFieldCustomizer,
  FieldCustomizerContext,
  IFieldCustomizerCellEventParameters,
  ListItemAccessor
} from '@microsoft/sp-listview-extensibility';

import ClosingStatusChange, { IClosingStatusChangeProps } from './components/ClosingStatusChange';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IClosingStatusChangeFieldCustomizerProperties {
  // This is an example; replace with your own property
  AdminGroup: string;
}

export default class ClosingStatusChangeFieldCustomizer
  extends BaseFieldCustomizer<IClosingStatusChangeFieldCustomizerProperties> {

  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    return Promise.resolve();
  }

  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const row: ListItemAccessor = event.listItem;
    const context: FieldCustomizerContext = this.context;
    const adminGroup: string = this.properties.AdminGroup;

    const closingStatusChange: React.ReactElement<{}> =
      React.createElement(ClosingStatusChange, { row, context, adminGroup } as IClosingStatusChangeProps);

    ReactDOM.render(closingStatusChange, event.domElement);
  }

  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
