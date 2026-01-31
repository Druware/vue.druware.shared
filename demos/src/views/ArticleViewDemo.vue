<script setup>
import { ArticleView } from "druware-components";

const article = 		{
  "$id": "3",
  "articleId": "d72a6ace-47e4-4be6-8f2d-4d4e24c08cd2",
  "title": "ODBCKit More News!",
  "summary": "Well, progress on this wintry weather day has gone far better than expected. All of the base classes are now implemented in their most basic forms.\n\nUnittests running against a Microsoft SQL Server, using the Actual Tech driver are connecting, executing commands to create the table, insert data, an open command returning a recordset and even down to reading that data before dropping the table and then closing the connection.",
  "body": "Well, progress on this wintry weather day has gone far better than expected. All of the base classes are now implemented in their most basic forms.\n\nUnittests running against a Microsoft SQL Server, using the Actual Tech driver are connecting, executing commands to create the table, insert data, an open command returning a recordset and even down to reading that data before dropping the table and then closing the connection.\n\nThe initial pass of the work has been moved to [GitHub](https://github.com/Druware/ODBCKit). The old Objective-C code is now all moved over to the 'Legacy' folder and the Swift code will become the new main line branch of the code.\n\nComments are always welcomed.  Documentation and all the other bits are incoming. However, it is now time to go get a workout done before the weather turns to grisly.  Y'all be safe out there.\n\n",
  "authorId": "8d519bd0-f265-4244-8ef7-387406b3393a",
  "posted": "2026-01-24T22:38:53.183",
  "modified": "2026-01-24T22:38:53.183",
  "expires": null,
  "pinned": false,
  "permalink": "odbckit_more_news",
  "byLine": "Satori, Dru",
  "headerImageId": null,
  "headerImage": null,
  "iconId": null,
  "iconImage": {
    "$id": "2",
    "assetId": 4,
    "typeId": 2,
    "description": "Bicycle Icon",
    "mediaType": "image/png",
    "fileName": "https://www.twowheeljunction.com/api/asset/icon-news-512.png",
    "type": null
  },
  "isFeatured": false,
  "tags": [
    "ODBCKit",
    "swift"
  ]
};

</script>

<template>
  <div class="container">
    <p class="mb-3">
      Display examples of the ArticleView component in it's optional states
    </p>

    ## Summary
    <ArticleView :article="article" summary url="/"/>

    ## Show Icon
    <ArticleView :article="article" showIcon />

    ## Detail
    <ArticleView :article="article" enableDisqus disqusShortname="two-wheel-junction" />


    <h3 class="subtitle">
      Properties
    </h3>

    <h4>Count</h4>

    <p>Sets the count to be animated and displayed.</p>


  </div>
</template>

<style scoped>

</style>
