import React from 'react';

export class Screen {
  public label : string;
  public icon : string;
  public focusedIcon : string;
  public component : React.ComponentType<any>;

  public constructor(
    label: string,
    icon: string,
    focusedIcon: string,
    component: React.ComponentType<any>
  ) {
    this.label = label;
    this.icon = icon;
    this.focusedIcon = focusedIcon;
    this.component = component;
  }
}