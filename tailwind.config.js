/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.html"],
  theme: {
    extend: {},
    fontFamily : {
      'sans' : ['Poppins', 'sans-serif'],
      'mono' : ['Merriweather', 'serif']
    },
    colors : {
      green : "#7bae00",
      white : "#fff",
      gray : "#cccccc",
      darkCyan : "#0b2b3c",
      black : "#1a1a1a",
      twitter: "#1da1f2",
      facebook : "#084f99",
      linkedIn : "#0e76a8",
    }

  },
  plugins: [],
}
