import React from 'react';

type DropdownProps = {
  options: string;
 
};

const Dropdown = (props: DropdownProps) => {
  return (
    <>
      <select name='selectList' id='selectList'>
          <option value='option 1'>Option 1</option>  <option value='option 2'>Option 2</option>
      </select>
    </>
  );
};
