const testimonials = [
  {
    title: 'Very tasty',
    name: 'Emma Newman',
    text:
      'I’ve tried many breakfast options over the years, but nothing beats the unique flavor and rich texture of Unique Morning Tom Brown. It’s not just filling — it’s energizing. I used to skip breakfast often, but now I look forward to my morning bowl every day. The fact that it’s made from natural, locally sourced ingredients   makes me feel good about what I’m feeding myself and my family. Highly recommended for anyone looking to start their day right!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    title: 'I have lunch here every day',
    name: 'Paul Trueman',
    text:
      'I first bought Tom Brown just out of curiosity, but it quickly became a staple in my kitchen. I usually eat it in the morning, but on busy days it even serves as a quick and healthy lunch. The aroma when it’s being prepared is nostalgic — it reminds me of my childhood. The blend of grains, soya, and peanuts is perfect, and it keeps me full for hours. Plus, I really appreciate how fast and neatly they deliver the product. Customer service is top-notch!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
]

const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927a1 1 0 011.902 0l1.518 4.674a1 1 0 00.95.69h4.91a1 1 0 01.592 1.806l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674a1 1 0 01-1.538 1.118L10 15.347l-3.974 2.888a1 1 0 01-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.668 10.097a1 1 0 01.592-1.806h4.91a1 1 0 00.95-.69l1.518-4.674z" />
  </svg>
)

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-3">
              Reviews about us
            </h2>
            <p className="max-w-xl text-gray-500">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Arrows */}
            <button
              type="button"
              aria-label="Previous reviews"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-800 text-gray-900 hover:text-white hover:bg-gray-900 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.293 19.707a1 1 0 010-1.414L14.586 12 8.293 5.707a1 1 0 011.414-1.414l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* All reviews button */}
            <button className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition text-white font-semibold py-3 px-6 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2 12a10 10 0 1117.32 6.906l3.387 3.387a1 1 0 11-1.414 1.414l-3.387-3.387A10 10 0 012 12zm10-7a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
              All reviews
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.title}</h3>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">{t.text}</p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium text-gray-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 