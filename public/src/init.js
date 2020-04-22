const filterUsers = async (name) => fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`).then(res => res.json())

function debounceEvent(time) {
  return function(fn, wait = 1000) {
    clearTimeout(time)

    time = setTimeout(() => {
      fn()
    }, wait)
  }
}

const debounce = debounceEvent()

function handleKeyUp(event){
  debounce(() => {
    filterUsers(event.target.value).then(users => console.log(users.map(user => user.name)))
  })
}

document.querySelector("input").addEventListener("keyup", handleKeyUp)