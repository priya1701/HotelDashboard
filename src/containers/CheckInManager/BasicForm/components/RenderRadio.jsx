import React from 'react';
import {RadioGroup } from '@material-ui/core/RadioGroup';


const renderRadioGroup = ({ input, ...rest }) => (
    <RadioGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
)

export default (renderRadioGroup);
