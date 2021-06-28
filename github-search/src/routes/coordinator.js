export const goToHome = (history) => {
  history.push(`/`)
}

export const goToSearchPage = (history, user) => {
  history.push(`/user/search/${user}/1`)
}

export const goToDetailsUserPage = (history, id) => {
  history.push(`/user/${id}`)
}

export const goBack = (history) => {
  history.goBack()
}