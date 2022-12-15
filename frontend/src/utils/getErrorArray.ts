export const getErrorArray = (array: any) => {
  const errors: string[] = []
  for (const error of array) {
    for (const key in error) {
      errors.push(error[key])
    }
  }
  return errors
}
