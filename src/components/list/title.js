// @flow
import React from 'react';
import { CreateDeleteModify } from '../create_delete_modify';

export function Title({ properties, wasOpen }: Object) {
  return (
    <div>
      <span className="flex-parent flex-parent--row justify--space-between">
        <span className={`txt-m ${wasOpen ? '' : 'txt-bold'} mt3 mr6`}>
          {properties.get('user')}
        </span>
        <CreateDeleteModify
          showZero
          className="mr3 pb3"
          create={properties.get('create')}
          modify={properties.get('modify')}
          delete={properties.get('delete')}
        />
      </span>

    </div>
  );
}