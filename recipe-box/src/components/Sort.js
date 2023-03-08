import React from "react";


function Sort({updateSort}) {

    const handleUpdate = e => updateSort( e.target.value )


    return (
        <select onChange={handleUpdate}>
            <option></option>
            <option value="american">American</option>
            <option value="chinese">Chinese</option>
            <option value="greek">Greek</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
            <option value="thai">Thai</option>
        </select>
  );
}

export default Sort;