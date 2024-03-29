import React from "react"
import PropTypes from "prop-types"
import LoaderGif from "./assets/gif/loaderGif.gif"

const HTML = props => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {props.headComponents}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: "center",
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            position: "fixed",
            inset: 0,
            zIndex: 90000,
            cursor: "wait",
            clipPath: "circle(2500px at 100% -11%)",
            pointerEvents: "all",
            transition: "all 1.5s ease-out",
          }}
        >
          <img src={LoaderGif} alt="loading spinner" width="40%" />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
