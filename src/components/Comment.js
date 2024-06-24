export default function Comment({ name, comment }) {
  return (
    <div class="bg-gray-100 p-4 rounded-lg shadow-inner">
      <div class="flex items-center mb-2">
        <svg
          class="w-6 h-6 text-gray-500 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
        <span class="font-bold">{name}</span>
      </div>
      <p class="text-gray-700">{comment}</p>
    </div>
  );
}
