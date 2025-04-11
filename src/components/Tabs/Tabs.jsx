import React, { useEffect, useRef, useState } from "react";


const defaultFt = () => {}
function Tabs({children, defaultIndex = 0, onChange = defaultFt}) {
    console.log(children);
    const tabs = React.Children.toArray(children)
    const [currentIndex, setCurrentIndex] = useState(defaultIndex);
    const prevIndex = useRef(defaultIndex);
     
    useEffect(() => {
        if(prevIndex.current !== currentIndex){
            onChange(currentIndex)
        }
        prevIndex.current == currentIndex
    }, [currentIndex, onChange])
  return (
    <div>
      <div className="tab-list">
        {tabs.map((tab, index) => {
            const active = currentIndex === index
            return <button key={index} 
            style={{
                color: active ? 'red' : '#333',
                fontWeight: active ? 'bold' : 'normal'
            }}
            onClick={() => setCurrentIndex(index)}
            >{tab.props.title}
            </button>
        })}
      </div>
      <div className="tab-content">{tabs[currentIndex]}</div>
    </div>
  )
}

export default Tabs
