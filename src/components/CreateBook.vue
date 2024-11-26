<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 class="text-2xl font-semibold mb-6">Create Book</h1>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="title" class="block font-medium">Title</label>
          <input
            id="title"
            v-model="book.title"
            type="text"
            placeholder="Enter book title"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="author" class="block font-medium">Author</label>
          <input
            id="author"
            v-model="book.author"
            type="text"
            placeholder="Enter author's name"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="publishedDate" class="block font-medium">Published Date</label>
          <input
            id="publishedDate"
            v-model="book.publishedDate"
            type="date"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="publisher" class="block font-medium">Publisher</label>
          <input
            id="publisher"
            v-model="book.publisher"
            type="text"
            placeholder="Enter publisher"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="description" class="block font-medium">Description</label>
          <textarea
            id="description"
            v-model="book.description"
            placeholder="Enter book description"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label for="coverImage" class="block font-medium">Cover Image URL</label>
          <input
            id="coverImage"
            v-model="book.coverImage"
            type="url"
            placeholder="Enter cover image URL"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="tags" class="block font-medium">Tags</label>
          <input
            id="tags"
            v-model="book.tags"
            type="text"
            placeholder="Enter tags, separated by commas"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="averageRating" class="block font-medium">Average Rating</label>
          <input
            id="averageRating"
            v-model.number="book.rating.average"
            type="number"
            step="0.1"
            placeholder="Enter average rating (0-5)"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="ratingCount" class="block font-medium">Rating Count</label>
          <input
            id="ratingCount"
            v-model.number="book.rating.count"
            type="number"
            placeholder="Enter total rating count"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="initialQty" class="block font-medium">Initial Quantity</label>
          <input
            id="initialQty"
            v-model.number="book.initialQty"
            type="number"
            placeholder="Enter initial quantity"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="qty" class="block font-medium">Quantity</label>
          <input
            id="qty"
            v-model.number="book.qty"
            type="number"
            placeholder="Enter quantity"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      <p v-if="message" class="mt-4 text-green-500">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        book: {
          title: "",
          author: "",
          publishedDate: "",
          publisher: "",
          description: "",
          coverImage: "",
          tags: "",
          rating: {
            average: 0,
            count: 0,
          },
          initialQty: 0,
          qty: 0,
        },
        message: "",
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...this.book,
              tags: this.book.tags.split(",").map((tag) => tag.trim()),
            }),
          });
  
          if (response.ok) {
            this.message = "Book created successfully!";
            this.book = {
              title: "",
              author: "",
              publishedDate: "",
              publisher: "",
              description: "",
              coverImage: "",
              tags: "",
              rating: {
                average: 0,
                count: 0,
              },
              initialQty: 0,
              qty: 0,
            };
          } else {
            this.message = "Failed to create the book.";
          }
        } catch (error) {
          console.error("Error:", error);
          this.message = "An error occurred while creating the book.";
        }
      },
    },
  };
  </script>
  
  <style>
  body {
    background-color: #f3f4f6;
  }
  </style>
  