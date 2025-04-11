import { useRef, useState, Children } from "react";

function Accordion({ children, defaultIndex = 0, onChange, collapseOthers = true, className = "" }) {
  const items = Children.toArray(children);
    const [activeIndexes, setActiveIndexes] = useState([defaultIndex]);
    const [focusIndex, setFocusIndex] = useState(defaultIndex);
  
  const buttonRefs = useRef([]);

  const toggleItem = (index) => {
    const isActive = activeIndexes.includes(index);
    
    if (collapseOthers) {
      if (isActive) {
        setActiveIndexes([]);
      } else {
        setActiveIndexes([index]);
      }
    } else {
      if (isActive) {
        setActiveIndexes(activeIndexes.filter(i => i !== index));
      } else {
        setActiveIndexes([...activeIndexes, index]);
      }
    }
    
    if (onChange) {
      onChange(index);
    }
  };

  const handleKeyDown = (e) => {
    let nextIndex = focusIndex;
    
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      nextIndex = (focusIndex + 1) % items.length;
    } 
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      nextIndex = (focusIndex - 1 + items.length) % items.length;
    } 
    else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(focusIndex);
    }

    setFocusIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div className={`accordion ${className}`} onKeyDown={handleKeyDown}>
      {items.map((item, index) => {
        const isOpen = activeIndexes.includes(index);
        
        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-header"
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              {item.props.header}
            </button>
            
            {isOpen && (
              <div className="accordion-content">
                {item.props.children}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
