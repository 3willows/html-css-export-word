import React from "react"

export const ComponentToPrint =
  /* eslint-disable */
  React.forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <p>Hello world</p>
      </div>
    )
  })
