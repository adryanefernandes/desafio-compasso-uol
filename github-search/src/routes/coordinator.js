export const goToSearchPage = (history, user) => {
  history.push(`/user/search/${user}`)
}

export const goToDetailsUserPage = (history, id) => {
  history.push(`/user/${id}`)
}