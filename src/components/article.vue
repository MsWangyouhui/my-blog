<template>
    <b-card>
  <b-media>
    <img slot="aside" src="https://placeholdit.imgix.net/~text?txt=64x64&w=64&h=64">
    <h5 class="mt-0">Media Title</h5>
    <p>
      User {{ $route.params.id }}
    </p>
    <p class="mb-0">
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
    <b-media>
      <img slot="aside" src="https://placeholdit.imgix.net/~text?txt=64x64&w=64&h=64">
      <h5 class="mt-0">Nested Media</h5>
      Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </b-media>
  </b-media>
</b-card>
</template>
