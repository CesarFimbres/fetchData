import getSuspender from "./getSuspender"

function fetchData(url) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const message = []
      res.forEach( item => {
        message.push(`https://picsum.photos/id/${item.id}/200/150`)
      })
      return { message }
    })
    .then((res) => res.message)

  return getSuspender(promise)
}

export default fetchData