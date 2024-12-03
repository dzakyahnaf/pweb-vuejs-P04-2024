<script lang="ts">
// import TheWelcome from "../components/TheWelcome.vue";
import { RouterLink } from 'vue-router'
import type { PropType } from 'vue'

export interface BookObject {
  _id: string
  title: string
  author: string
  publishedDate: string
  tags: string[]
  initialQty: number
  qty: number
  publisher: string
  coverImage: string
}

export default {
  name: 'BookCard',
  components: {
    RouterLink,
  },
  props: {
    book: {
      type: Object as PropType<BookObject>,
      required: true,
    },
  },
  methods: {
    getReadMoreLink(id: string) {
      return `/detail/${id}`
    },
  },
}
</script>

<template>
  <div class="border rounded-xl px-6 pt-6 pb-8 bg-blue-300 shadow-lg">
    <img :src="book.coverImage" alt="Cover Image" class="rounded-xl mb-4 w-full max-w-sm mx-auto" />
    <h3 class="text-xl font-bold text-left">{{ book.title }} | {{ book.author }}</h3>
    <hr class="my-2 border border-black" />
    <h5 class="text-md font-medium text-left">
      Published: {{ book.publishedDate }} by {{ book.publisher }}
    </h5>
    <h5 class="text-md font-medium text-left">Category: {{ book.tags.join(', ') }}</h5>
    <h5 class="text-md font-medium text-left">
      Quantity: {{ book.qty }} of {{ book.initialQty }} books
    </h5>
    <RouterLink
      :to="getReadMoreLink(book._id)"
      class="px-4 text-white py-2 bg-blue-400 font-semibold rounded-xl inline-block mt-2"
      >Read More</RouterLink
    >
  </div>

  <div></div>
</template>
