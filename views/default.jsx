const React = require('react')

function Def (html) {
        return (
            <html>
                <head>
                    <title>REST-RANT</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="css/style.css" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                   
                    {/*<link rel="manifest" href="/site.webmanifest"></link>*/}
                </head>
                <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                         </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">New Place</a>
                        </li>
                   </ul>
                </nav>
              
                 {html.children} 
                </body>
            </html>
        )
      }
      

module.exports = Def
