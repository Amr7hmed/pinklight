import React from "react";
 

export default function Inputcolor(props) {
    const { selectedColors ,setSelectedColors} = props;

    function handleKeyDown(e){
        // If user did not press enter key, return
        if(e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if(!value.trim()) return
        // Add the value to the tags array
        setSelectedColors([...selectedColors, value])
        // Clear the input
        e.target.value = ''
    }
      
    
    function removeTag(index){
        setSelectedColors(selectedColors.filter((el, i) => i !== index))
    }

    return (<div className="form-group inputcolor">
      <label>الألوان المتاحه</label>
      <div className="clolor-list">
        <div className="color-controle">
            
        <div className="tags-input-container">
            { selectedColors.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            )) }
            <input onKeyDown={handleKeyDown} type="text" className="tags-input form-control" placeholder="Add Colors" />
        </div>

      </div>
    </div>
    </div>
  
    );
  }
