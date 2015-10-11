/* @flow */
import React from 'react';

function Address(props: {Street: string, Zip: string}) {
  return (
    <p className="small_details nosp">{props.Street}, {props.Zip}</p>
  );
}

export default Address;
