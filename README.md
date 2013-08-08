# LinkSnip

A utility that will take a url and provide a basic synoposis
of the web page including title, text, and image. Inspired by
Facebook link scraper.


## Usage

Install it:

```bash
npm install -g linksnip
```

Run it:

```bash
linksnip http://google.com
```

```json
{
  "url": "https://www.google.com/",
  "title": "Google",
  "description": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
  "images": [
    {
      "height": 128,
      "width": 128,
      "format": "PNG",
      "url": "https://www.google.com/images/google_favicon_128.png",
      "filename": "/cloudcollege/linksnip/images/fe319f17bbd1a352c0ad1a47a5f5c7ee555e4f3d"
    }
  ]
}
```

Require it:

```javascript
linksnip = require('linksnip')

linksnip("https://google.com", function(results){
    console.log(JSON.stringify(results, null, 2))
})
```




