import React from "react"

import { Helmet } from "react-helmet"
import Favicon from "../../images/favicon-32x32.png"

export const Seo = (

  
  
  ) => {
  
    return (
  
      <Helmet>
  
        <meta charset="utf-8" />
  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  
  
        <meta name="author" content="Ananya Maddali" />
  
        <meta name="description" content="Portfolio" />
  
        <meta name="image" content={Favicon} />
  
  
        <title>Ananya Maddali</title>
        <link rel="shortcut icon" type="image/jpg" href={Favicon} />
  
        <html lang="en" />
  
      </Helmet>
  
    )
  
  }
